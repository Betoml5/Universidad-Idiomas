const coursesTitles = Array.from(document.getElementsByClassName('main__courses-item-title'));
const coursesTexts = document.getElementsByClassName('main__courses-item-text');



for(let i = 0; i < coursesTitles.length; i++){
    coursesTitles[i].addEventListener('click', () => {
        coursesTitles[i].classList.toggle('moveTitle')
        coursesTexts[i].classList.toggle('showText')
    })
}

// coursesTitles.forEach( e => {
//     e.addEventListener('click', () => {
//         e.classList.toggle('')
//     })
// });

console.log(coursesTexts)
console.log(Array.from(coursesTitles));