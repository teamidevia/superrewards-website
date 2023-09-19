const button = document.querySelector('.featuresButton');
const contentPart1 = document.querySelector('.part1');
const contentPart2 = document.querySelector('.part2');
const contentPart3 = document.querySelector('.part3');

button.addEventListener('mouseover', (e) => {
    // console.log(e.target);
    let lastNumber = e.target.innerText[e.target.innerText.length - 1];
    if (lastNumber == 1) {
        contentPart1.classList.add('visible');
        contentPart2.classList.add('invisible');
        contentPart3.classList.add('invisible');
        contentPart2.classList.remove('visible');
        contentPart3.classList.remove('visible');
        contentPart1.classList.remove('invisible');
    }
    if (lastNumber == 2) {
        contentPart2.classList.add('visible');
        contentPart1.classList.add('invisible');
        contentPart3.classList.add('invisible');
        contentPart1.classList.remove('visible');
        contentPart3.classList.remove('visible');
        contentPart2.classList.remove('invisible');
    }
    if (lastNumber == 3) {
        contentPart3.classList.add('visible');
        contentPart2.classList.add('invisible');
        contentPart1.classList.add('invisible');
        contentPart2.classList.remove('visible');
        contentPart1.classList.remove('visible');
        contentPart3.classList.remove('invisible');
    }
})