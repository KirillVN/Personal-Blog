const icon = document.querySelector(".icon-menu");
const appearList = document.getElementById("menu-appear");
const exitBtn = document.querySelector(".exit-btn");
const header = document.querySelector('header');

icon.addEventListener("click", () => {
  appearList.classList.toggle("btn-appear");
});
exitBtn.addEventListener("click", () => {
    appearList.classList.remove("btn-appear");
});
window.addEventListener('scroll', () => {
const headerHeight = header.getBoundingClientRect().height;
const scrollHeight = window.pageYOffset;
if(scrollHeight > headerHeight) {
  header.classList.add('fixed-position');
} else {
  header.classList.remove('fixed-position');
}
})

// TYPE WRITER EFFECT
// const text = document.querySelector('.main-title').innerText;
let text = 'My name is Kirill & this is my Blog';
const container = document.querySelector('.main-title')
let i = 0;
function typeWriter() {
  if(i < text.length) {
    container.innerHTML += text.charAt(i)
    i++;
    setTimeout(typeWriter, 50)
  }
}
window.addEventListener('load', typeWriter)

  
