
const text = ["Web Developer", "Designer", "Programmer"];
let index = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function type() {
    if (charIndex < text[index].length) {
        typingElement.innerHTML += text[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (charIndex > 0) {
        typingElement.innerHTML = text[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
    } else {
        index = (index + 1) % text.length;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});


function toggleTheme() {
    document.body.classList.toggle("dark");
}
