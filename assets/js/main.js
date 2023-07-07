const textAnimate = document.querySelector(".text-animation");
let index = 0;
const str = "Thành Thật - Development Learning";

function typingStr() {
  if (index <= str.length) {
    let duration = 100;

    textAnimate.innerHTML += str.charAt(index);
    index++;

    if (index === str.length) {
      duration = 3000;
    }

    if (index > str.length) {
      index = 0;
      textAnimate.innerHTML = "";
    }

    setTimeout(() => {
      typingStr();
    }, duration);
  }
}

typingStr();
