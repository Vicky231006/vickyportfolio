const http = require('http');
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

const PORT = 3000;

const server = http.createServer(async (req, res) => {
    // Serve static files
    if (req.url === '/' || !req.url.startsWith('/api')) {
        let filePath = '.' + req.url;
        if (filePath === './') {
            filePath = './index.html';
        }

        const extname = path.extname(filePath);
        let contentType = 'text/html';
        switch (extname) {
            case '.js':
                contentType = 'text/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
            case '.json':
                contentType = 'application/json';
                break;
        }

        fs.readFile(filePath, (error, content) => {
            if (error) {
                if (error.code === 'ENOENT') {
                    res.writeHead(404);
                    res.end('File not found');
                } else {
                    res.writeHead(500);
                    res.end('Server Error');
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    }
    // Handle API endpoint
    else if (req.url === '/api/contact' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', async () => {
            try {
                const data = JSON.parse(body);
                const { name, email, subject, message } = data;

                // Validate required fields
                if (!name || !email || !subject || !message) {
                    res.writeHead(400, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Please fill in all fields' }));
                    return;
                }

                // Create transporter
                const transporter = nodemailer.createTransport({
                    host: 'smtp.gmail.com',
                    port: 587,
                    secure: false,
                    auth: {
                        user: process.env.EMAIL_USER,
                        pass: process.env.EMAIL_PASSWORD
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });

                // Verify connection configuration
                await transporter.verify();

                // Send email
                await transporter.sendMail({
                    from: `"${name}" <${process.env.EMAIL_USER}>`,
                    to: process.env.EMAIL_USER,
                    replyTo: email,
                    subject: `New Contact Form Submission: ${subject}`,
                    text: `
                        Name: ${name}
                        Email: ${email}
                        Subject: ${subject}
                        Message: ${message}
                    `
                });

                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Message sent successfully!' }));
            } catch (error) {
                console.error('Error:', error);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ 
                    message: 'Failed to send message',
                    error: error.message 
                }));
            }
        });
    }
    else {
        res.writeHead(404);
        res.end('Not found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
}); 