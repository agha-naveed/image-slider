var images = document.querySelectorAll('.gallery > img')
var dots = document.querySelectorAll('.dots > i')
let firstImg = document.getElementById('first-img')
let firstDot = document.getElementById('first-dot')
const leftArrow = document.querySelector('.arrow-left > i')
const rightArrow = document.querySelector('.arrow-right > i')

var temp = 0
var clickImg = 0
firstImg.style.width = '55vw'    
firstDot.style.color = 'white'

rightArrow.addEventListener('click', () => {
    if(temp < images.length - 1) {
        images[temp].style.width = 0
        dots[temp].style.color = 'rgb(71, 71, 71)'
        temp++;
        images[temp].style.width = '55vw'
        dots[temp].style.color = 'white'

    }
})

leftArrow.addEventListener('click', () => {
    if(temp > 0) {
        images[temp].style.width = 0
        dots[temp].style.color = 'rgb(71, 71, 71)'
        temp--; 
        images[temp].style.width = '55vw'
        dots[temp].style.color = 'white'
    }
})

window.addEventListener('keydown', (e) => {
    if(e.key == 'ArrowRight') {
        if(temp < images.length - 1) {
            images[temp].style.width = 0
            dots[temp].style.color = 'rgb(71, 71, 71)'
            temp++; 
            images[temp].style.width = '55vw'
            dots[temp].style.color = 'white'
        }
    }
    else if(e.key == 'ArrowLeft') {
        if(temp > 0) {      
            images[temp].style.width = 0
            dots[temp].style.color = 'rgb(71, 71, 71)'
            temp--; 
            images[temp].style.width = '55vw'
            dots[temp].style.color = 'white'
        }
    }
})

// images.forEach(img => {
//     img.addEventListener('click', () => {

//     })
// });


// for(let i=0; i<images.length; i++) {
//     images[i].addEventListener('click', () => {
//         images[i].style.width = '55vw'
//         dots[i].style.color = 'white'
//     })
// }