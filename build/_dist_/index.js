import print from "https://cv.arakno.net/web_modules/print-js.js";
import Sortable from "https://cv.arakno.net/web_modules/sortablejs.js";
import {Experience, Education, Certification} from "./templates.js";
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
    let label = document.createElement("label");
    input.type = "checkbox";
    input.id = "selected-section";
    label.for = "selected-section";
    experience.parentNode.insertBefore(input, experience);
  }
  for (let education of educations) {
    let input = document.createElement("input");
    input.type = "checkbox";
    education.parentNode.insertBefore(input, education);
  }
  const printBtn = document.getElementById("print-btn");
  printBtn.on("click", () => {
    setTimeout(() => {
      window.print();
    }, 500);
  });
  cv.on("click", (evt) => {
    const isButton = evt.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }
    if (evt.target.classList.contains("add-btn")) {
      let section = evt.target.closest("section");
      console.log(section);
      switch (section.id) {
        case "cv-Experience":
          section.insertAdjacentHTML("beforeend", Experience);
          break;
        case "cv-Education":
          section.insertAdjacentHTML("beforeend", Education);
          break;
        case "cv-Certifications":
          section.insertAdjacentHTML("beforeend", Certification);
          break;
        default:
          break;
      }
    }
  });
  function setupDnD() {
    const experienceList = cv.querySelector(".experience");
    Sortable.create(experienceList, {
      animation: 150
    });
    const educationList = cv.querySelector(".education");
    Sortable.create(educationList, {
      animation: 150
    });
  }
  setupDnD();
});
