const parent = document.querySelector('.slider')
const slides = parent.querySelectorAll('.item')

let currentIndex = 0
let lastIndex = slides.length - 1
let config = {
  mode: 'slide',
  interval: 2000
}

boot()

function boot(custom) {
  config = Object.assign({}, config, custom)
  if (config.mode == 'slide') slide()
  else {
    hideAll()
    fade()
  }
  setInterval(() => {
    increment()
    if (config.mode == 'slide') slide()
    else fade()
  }, config.interval)
}

function fade() {
  let prev = getPrev()
  let current = getCurrent()
  prev.style.opacity = 0
  current.style.opacity = 1
}

function hideAll() {
  slides.forEach(el => {
    el.style.opacity = 0
  })
}

function slide() {
  slideX()
  slideZ()
}

function increment() {
  if (currentIndex < lastIndex) currentIndex++
  else currentIndex = 0
}

function slideX() {
  let prev = getPrev()
  let current = getCurrent()
  let next = getNext()
  prev.style.left = -prev.offsetWidth + 'px'
  current.style.left = 0
  next.style.left = next.offsetWidth + 'px'
}

function slideZ() {
  let prev = getPrev()
  let current = getCurrent()
  let next = getNext()
  prev.style.zIndex = -1
  current.style.zIndex = 1
  next.style.zIndex = -1
}

function getPrev() {
  if (currentIndex > 0) return slides[currentIndex - 1]
  else return slides[lastIndex]
}

function getCurrent() {
  return slides[currentIndex]
}

function getNext() {
  if (currentIndex < lastIndex) return slides[currentIndex + 1]
  else return slides[0]
}
