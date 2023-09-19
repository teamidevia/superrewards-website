const button = document.querySelector('.featuresButton')
const contentPart1 = document.querySelector('.part1')
const contentPart2 = document.querySelector('.part2')
const contentPart3 = document.querySelector('.part3')

button.addEventListener('mouseover', (e) => {
  // console.log(e.target);
  let lastNumber = e.target.innerText[e.target.innerText.length - 1]
  if (lastNumber == 1) {
    contentPart1.classList.add('d-block')
    contentPart2.classList.add('d-none')
    contentPart3.classList.add('d-none')
    contentPart2.classList.remove('d-block')
    contentPart3.classList.remove('d-block')
    contentPart1.classList.remove('d-none')
  }
  if (lastNumber == 2) {
    contentPart2.classList.add('d-block')
    contentPart1.classList.add('d-none')
    contentPart3.classList.add('d-none')
    contentPart1.classList.remove('d-block')
    contentPart3.classList.remove('d-block')
    contentPart2.classList.remove('d-none')
  }
  if (lastNumber == 3) {
    contentPart3.classList.add('d-block')
    contentPart2.classList.add('d-none')
    contentPart1.classList.add('d-none')
    contentPart2.classList.remove('d-block')
    contentPart1.classList.remove('d-block')
    contentPart3.classList.remove('d-none')
  }
})

const ctaSection = document.querySelector('.cta-area')
const afterCtaSection = document.querySelector('.after-cta')

const fixForCtaTranslate = () => {
  afterCtaSection &&
    (afterCtaSection.style.paddingTop = ctaSection.offsetHeight / 2 + 'px')
}
window.addEventListener('resize', fixForCtaTranslate)
window.addEventListener('orientationchange', fixForCtaTranslate)
fixForCtaTranslate()
