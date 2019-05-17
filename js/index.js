// Your code goes here
let nav = document.querySelector('nav');
let mainImg = document.querySelector('header.intro > img');
let backgrd = document.querySelector('div.home');


console.log(mainImg)


// DOUBLE CLICK
nav.addEventListener("dblclick", (e) => {
    e.preventDefault();
    e.target.style.color = '#17A2B8';
    e.target.setAttribute('style','font-size:2rem')
    }
)

// MOUSE OVER
mainImg.addEventListener('mouseover', (e) => {
    e.target.setAttribute('style', '-webkit-transform:scale(0.6)')
})

// MOUSE LEAVE
mainImg.addEventListener('mouseleave', (e) => {
    e.target.setAttribute('style', '-webkit-transform:scale(1)')
})

// RESIZE 
window.addEventListener('resize', () => {
    if(window.innerWidth === 768){
        backgrd.setAttribute('style', 'background-color: #ddd')
        }
    } 
);

// DRAG 
let imgs = [...document.querySelectorAll('img')];

imgs.forEach(ele => ele.addEventListener('drag', (e) => e.target.setAttribute('style', 'display: none')))

// LOAD
let h2 = [...document.querySelectorAll('h2')];

window.addEventListener('load', (e) =>  h2.forEach(ele => ele.classList.add('animationEffect')))

// CLICK
let btns = [...document.querySelectorAll('div.btn')];

btns.forEach(ele => ele.addEventListener('click', (e) => e.target.setAttribute('style', 'background-color: coral')))

// KEY DOWN
let logo = document.querySelector('h1.logo-heading');
document.addEventListener('keydown', (e) => {
    if(e.code === 'Enter'){
        logo.classList.add('animationEffect')
        }
    }
)

// COPY

let para = [...document.querySelectorAll('p')];

para.forEach(ele => {
        ele.addEventListener('copy', (e) => {
            ele.style.color = '#17A2B8';
        })
});

// SCROLL
window.addEventListener('scroll', (e) =>  h2.forEach(ele => ele.classList.add('fadeOut')))

