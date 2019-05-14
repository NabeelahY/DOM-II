// Your code goes here
let nav = document.querySelector('nav');
let mainImg = document.querySelector('header.intro > img');
let backgrd = document.querySelector('div.home');

console.log(mainImg)


// MOUSE OVER
nav.addEventListener("mouseover", (e) => {
    e.target.style.color = '#17A2B8';
    console.log('mouse')
    }
)

// DOUBLE CLICK
mainImg.addEventListener('dblclick', (e) => {
    e.target.setAttribute('style', '-webkit-transform:scale(0.6)')
    
})

// RESIZE 
window.addEventListener('resize', () => {
    if(window.innerWidth === 768){
        backgrd.setAttribute('style', 'background-color: #ddd')
        }
    } 
);
