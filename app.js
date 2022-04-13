const icon = document.querySelector(".icon-menu");
const appearList = document.getElementById("menu-appear");
const exitBtn = document.querySelector(".exit-btn");

// icon.addEventListener('click', function(){
//     appearList.classList.add('btn-appear');

// })

// exitBtn.addEventListener('click', function (){
//     appearList.classList.remove('btn-appear');

// });

icon.addEventListener("click", () => {
  appearList.classList.toggle("btn-appear");
});

exitBtn.addEventListener("click", () => {
    appearList.classList.remove("btn-appear");
});


const header = document.querySelector('header');

window.addEventListener('scroll', () => {
const headerHeight = header.getBoundingClientRect().height;
const scrollHeight = window.pageYOffset;

if(scrollHeight > headerHeight) {
  header.classList.add('fixed-position');
} else {
  header.classList.remove('fixed-position');
}

})




  
