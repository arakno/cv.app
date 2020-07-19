import print from 'print-js';
import Sortable from 'sortablejs'
// TODO: look for alternative
// import holderjs from 'http://unpkg.com/holderjs' 

import { Experience, Education, Certification } from './templates'

window.addEventListener('DOMContentLoaded', () => {

  const PATHS = {
    css: './css/'
  }

  const cv = document.getElementById('cv')

  const profile = document.getElementById('profile')
  const intro = document.getElementById('intro')

	const experiences = cv.querySelectorAll('#cv-Experience article')
  const educations = cv.querySelectorAll('#cv-Education article')

  const certs = document.getElementById('cv-Certifications')
  const papers = document.getElementById('papers')
  const readings = document.getElementById('readings')
  const volunteer = document.getElementById('volunteer')
  const tools = document.getElementById('tools')

  const sections = [profile, intro, certs, papers, readings, volunteer, tools]

  //HELPER FUNCTIONS FOR EASY DOM MANIPULATION
	/** @{function} - helper global $elector alias */
	window.$ = function(selector) {
		let selectorType = 'querySelectorAll';

		if (selector.indexOf('#') === 0) {
			selectorType = 'getElementById';
			selector = selector.substr(1, selector.length);
    }
  }
    
  /** @{function} - helper method to attach events */
  Node.prototype.on = window.on = Node.prototype.addEventListener;
  NodeList.prototype.on = NodeList.prototype.addEventListener = function(name, fn) {
    Array.prototype.slice.call(this).forEach(function(el) {
      el.addEventListener(name, fn, false);
    });
  }
  
    
  // Add visible/hidden checkboxes to each section
  for (let section of sections) {
    let input = document.createElement('input')
    input.type = 'checkbox'
    section.parentNode.insertBefore(input, section)
  }

  // Add visible/hidden checkboxes to each experience
	for (let experience of experiences) {
    let input = document.createElement('input')
    let label = document.createElement('label')
    input.type = 'checkbox'
    input.id = 'selected-section'
    label.for = 'selected-section'
    // experience.insertBefore(input, experience)
    // experience.prepend(input)
    // input.appendChild(label)
    experience.parentNode.insertBefore(input, experience)
  }
  
  for (let education of educations) {
    let input = document.createElement('input')
    input.type = 'checkbox'
    education.parentNode.insertBefore(input, education)
  }
  

  const printBtn = document.getElementById('print-btn')
  printBtn.on('click', () => {
    // const primaryCSS = document.createElement('link')
    // primaryCSS.href = `${PATHS.css}index.css`
    // primaryCSS.rel = 'stylesheet'
    // primaryCSS.media = 'print'
    // primaryCSS.type = 'text/css'
    // const secondaryCSS = document.createElement('link')
    // secondaryCSS.href = `${PATHS.css}primary.css`
    // secondaryCSS.rel = 'stylesheet'
    // secondaryCSS.type = 'text/css'
    // const tertiaryCSS = document.createElement('link')
    // tertiaryCSS.href = `${PATHS.css}pdf.css`
    // // tertiaryCSS.media = 'print'
    // tertiaryCSS.rel = 'stylesheet'
    // tertiaryCSS.type = 'text/css'

    // const doc = document.getElementById('print_frame').contentWindow.document;
    // doc.head.appendChild(primaryCSS);
    // doc.head.appendChild(secondaryCSS);
    // doc.head.appendChild(tertiaryCSS);
    // doc.body.innerHTML = document.getElementById('cv').innerHTML

    setTimeout(() => {
      // window.frames['print_frame'].focus();
      // window.frames['print_frame'].print();
      window.print()
    }, 500)
  })

  cv.on('click', (evt) => {
    const isButton = evt.target.nodeName === 'BUTTON'
    if (!isButton) {
      return
    }

    if (evt.target.classList.contains('add-btn')) {
      let section = evt.target.closest('section')
console.log(section)

      switch(section.id) {
        case 'cv-Experience':
          section.insertAdjacentHTML('beforeend', Experience)
          break;
        case 'cv-Education':
          section.insertAdjacentHTML('beforeend', Education)
          break;
        case 'cv-Certifications':
          section.insertAdjacentHTML('beforeend', Certification)
          break;
        default:
          break;
      }
      // section.nextElementSibling.insertAdjacentHTML('beforeend', Experience)
      // console.dir(evt.target.id)
    }
    
  })

  // Drag n Drop functionality
  function setupDnD() {
    const experienceList = cv.querySelector('.experience')
    Sortable.create(experienceList, { 
      animation: 150 
    })

    const educationList = cv.querySelector('.education');
    Sortable.create(educationList, { 
      animation: 150 
    })

    // for ( el of experienceList) {
    //   // function (a) {
    //     Sortable.create(el, {group: 'photo',animation: 150 });
    //   // });
    // }
    
    // [].forEach.call( educationList, function (el) {
    //     Sortable.create(el, {group: 'photo',animation: 150 });
    //   });

  }
    
//   $(document).on('click', '.add-el', function(){
//     var n = $('.list img').length + 1;
//     var template = `<img src="http://placehold.it/50x50&text=${n}">`;
//     list.append(template);
// });

  setupDnD()


  // TODO: Add localStorage with localforage?
  // localforage.setItem('key', 'value').then(fu
  //   nction () {
  //   return localforage.getItem('key');
  // }).then(function (value) {
  //   // we got our value
  // }).catch(function (err) {
  //   // we got an error
  // });

});