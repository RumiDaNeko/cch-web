const experiencedynamicText = document.querySelector("#experience");
const preloaderdynamicText = document.querySelector("#preloader");
const words = ["experience", "path", "emotion", "strategies","load"];
const words2 = ["CloudCode", "A Cloud for codes", "A Host that willing to try"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

let wordIndex2 = 0;
let charIndex2 = 0;
let isDeleting2 = false;

document.onscroll = function() {

    scrollTop = window.scrollY;

    allDivs = document.getElementsByTagName('section');

    for( i=0; i< allDivs.length; i++ )
    {
        curDiv = allDivs[i];
        heightBefore = 0;    
        if (i > 0){
            heightBefore = allDivs[i-1].offsetHeight / 3;
        }

        if (scrollTop > curDiv.offsetTop - heightBefore){
          var element2 = document.getElementById("NavBar");
            mini = curDiv.getAttribute("data-mini");
          element2.removeAttribute('class');
            if (mini == "extended") {}
            else {
          element2.classList.add(mini)
            }
        }
    }
};


const typeEffect = () => {
    if (!preloaderdynamicText) return;
  const currentWord = words2[wordIndex];
  const currentChar = currentWord.substring(0, charIndex2);
          preloaderdynamicText.innerHTML = currentChar;
          preloaderdynamicText.classList.add("stop-blinking");

  if (!isDeleting2 && charIndex2 < currentWord.length) {
      // If condition is true, type the next character
      charIndex2++;
      setTimeout(typeEffect, 200);
  } else if (isDeleting2 && charIndex > 0) {
      // If condition is true, remove the previous character
      charIndex2--;
      setTimeout(typeEffect, 100);
  } else {
      // If word is deleted then switch to the next word
      isDeleting2 = !isDeleting2;
            preloaderdynamicText.classList.remove("stop-blinking");
      wordIndex2 = !isDeleting2 ? (wordIndex2 + 1) % words2.length : wordIndex2;
      setTimeout(typeEffect, 1200);
  }
}

const typeEffect2 = () => {
    if (!experiencedynamicText) return;
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0, charIndex);
      experiencedynamicText.innerHTML = currentChar;
      experiencedynamicText.classList.add("stop-blinking");

  if (!isDeleting && charIndex < currentWord.length) {
      // If condition is true, type the next character
      charIndex++;
      setTimeout(typeEffect2, 200);
  } else if (isDeleting && charIndex > 0) {
      // If condition is true, remove the previous character
      charIndex--;
      setTimeout(typeEffect2, 100);
  } else {
      // If word is deleted then switch to the next word
      isDeleting = !isDeleting;
        experiencedynamicText.classList.remove("stop-blinking");
      wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
      setTimeout(typeEffect2, 1200);
  }
}
typeEffect();
function removeLoader(){
    $( ".Preloader" ).fadeOut(500, function() { 
      $( ".Preloader" ).remove()
      $( "header" ).css('display', 'flex');
      window.scrollTo(0, 0);
      $( "html" ).css('overflow', '');
      $( "html" ).css('overflow-x', 'hidden');
      typeEffect2();
  }); 
}
function onLoad() {
    window.scrollTo(0, 0);
      $( ".Preloader" ).show("scale",{direction: "up"},750)
      $( "html" ).css('overflow', 'hidden');
      setTimeout(removeLoader, 2500); //wait for page load PLUS two seconds.
}
function onShopClick() {
window.location.href='https://free.cloudcodehosting.site'
}

function onDisocrdClick() {
window.location.href='https://discord.gg/cloudcode'
}

function onPanelClick() {
window.location.href='https://panel.cloudcodehosting.site'
}
