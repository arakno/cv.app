import print from "https://cv.arakno.net/web_modules/print-js.js";
import Sortable from "https://cv.arakno.net/web_modules/sortablejs.js";
import {Experience, Education} from "./templates.js";
window.addEventListener("DOMContentLoaded", () => {
  const PATHS = {
    css: "./css/"
  };
  const cv = document.getElementById("cv");
  const profile = document.getElementById("profile");
  const intro = document.getElementById("intro");
  const experiences = cv.querySelectorAll("#cv-Experience article");
  const educations = cv.querySelectorAll("#cv-Education article");
  const certs = document.getElementById("cv-Certifications");
  const papers = document.getElementById("papers");
  const readings = document.getElementById("readings");
  const volunteer = document.getElementById("volunteer");
  const tools = document.getElementById("tools");
  const sections = [profile, intro, certs, papers, readings, volunteer, tools];
  window.$ = function(selector) {
    let selectorType = "querySelectorAll";
    if (selector.indexOf("#") === 0) {
      selectorType = "getElementById";
      selector = selector.substr(1, selector.length);
    }
  };
  Node.prototype.on = window.on = Node.prototype.addEventListener;
  NodeList.prototype.on = NodeList.prototype.addEventListener = function(name, fn) {
    Array.prototype.slice.call(this).forEach(function(el) {
      el.addEventListener(name, fn, false);
    });
  };
  for (let section of sections) {
    let input = document.createElement("input");
    input.type = "checkbox";
    section.parentNode.insertBefore(input, section);
  }
  for (let experience of experiences) {
    let input = document.createElement("input");
    input.type = "checkbox";
    experience.parentNode.insertBefore(input, experience);
  }
  for (let education of educations) {
    let input = document.createElement("input");
    input.type = "checkbox";
    education.parentNode.insertBefore(input, education);
  }
  const printBtn = document.getElementById("print-btn");
  printBtn.on("click", () => {
    const primaryCSS = document.createElement("link");
    primaryCSS.href = `${PATHS.css}stacks.css`;
    primaryCSS.rel = "stylesheet";
    primaryCSS.type = "text/css";
    const secondaryCSS = document.createElement("link");
    secondaryCSS.href = `${PATHS.css}primary.css`;
    secondaryCSS.rel = "stylesheet";
    secondaryCSS.type = "text/css";
    const tertiaryCSS = document.createElement("link");
    tertiaryCSS.href = `${PATHS.css}pdf.css`;
    tertiaryCSS.media = "print";
    tertiaryCSS.rel = "stylesheet";
    tertiaryCSS.type = "text/css";
    const doc = document.getElementById("print_frame").contentWindow.document;
    doc.head.appendChild(primaryCSS);
    doc.head.appendChild(secondaryCSS);
    doc.head.appendChild(tertiaryCSS);
    doc.body.innerHTML = document.getElementById("cv").innerHTML;
    setTimeout(() => {
      window.frames["print_frame"].focus();
      window.frames["print_frame"].print();
    }, 500);
  });
  cv.on("click", (evt) => {
    const isButton = evt.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }
    if (evt.target.classList.contains("add-btn")) {
      let section = evt.target.closest("section");
      section.insertAdjacentHTML("beforeend", Experience);
    }
  });
  const experienceList = cv.querySelector(".experience");
  Sortable.create(experienceList, {
    animation: 150
  });
  const educationList = cv.querySelector(".education");
  Sortable.create(educationList, {
    animation: 150
  });
});
