import { appearAboutImage } from "./about.js"
import { typeWriter } from "./typing.js";
import handleForm from "./form.js";
import showProject from "./project.js";
import projectEffect from "./projectEffect.js";
import backToTop from "./backToTop.js";
import changeTheme from "./theme.js";
import openMenu from "./menu.js";
import carousel from "./carousel.js";

function init() {
    appearAboutImage();
    typeWriter(0);
    handleForm();
    showProject();
    projectEffect();
    backToTop();
    changeTheme();
    openMenu();
    carousel();

    console.log(`%c Welcome!`, 'font-weight: bold; font-size: 50px;color: orange; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); padding: 20px;');

}

init();
  