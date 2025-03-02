/** Challenge 5: Image Carousel Application 🖼️

// ### Image Display

// - Display a set of images in a carousel format.
// - Only one image should be visible at a time.
// - Each image should have a caption displayed at the bottom.

// ### Navigation Controls

// - Users should be able to navigate through the images using:
//   - A "Next" button to move to the next image.
//   - A "Previous" button to go back to the previous image.
//   - Clicking on an indicator dot to jump to a specific image.

// ### Automatic Slideshow

// - Support an auto-play mode where images transition automatically.
// - Users should be able to start and stop the auto-play mode with a button.
// - Display a timer showing how many seconds remain before the next image transition.

// ### Indicators

// - Display navigation dots (indicators) below the carousel.
// - The indicator for the active image should be highlighted.
// - Clicking an indicator should navigate directly to the corresponding image.*/

const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carouselTrack = document.getElementById('carouselTrack')
const caption = document.getElementById('caption')
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')
const carouselNav = document.getElementById('carouselNav')
const autoPlayButton = document.getElementById('autoPlayButton')
const timerDisplay = document.getElementById('timerDisplay')


let currentSlideIndex = 0
let timeInHand = 5
let autoPlayTimerInterval
let timerInterval

//----------------------------------------------------------------------------------------------------------------

function startCarousel() {

  images.forEach((image, index) => {
    const slide = document.createElement('div')
    slide.classList.add('carousel-slide')
    slide.style.backgroundImage = `url(${image.url})`
    carouselTrack.appendChild(slide)
  

    const indicator = document.createElement('div')
    indicator.classList.add('carousel-indicator')
    indicator.addEventListener('click', () => gotoSlide(index) )
    carouselNav.appendChild(indicator)
  })
  updateCarousel()
}

function updateCarousel() {

  carouselTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`

  caption.textContent = images[currentSlideIndex].caption;

  const indicators = document.querySelectorAll('.carousel-indicator')
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlideIndex )
  })
}

//------------------------------------------------------------------
function prevSlide () {
  currentSlideIndex = (currentSlideIndex-1  + images.length) % images.length
  updateCarousel()
  resetTimer()
}
function nextSlide () {
  currentSlideIndex = (currentSlideIndex + 1) % images.length
  updateCarousel()
  resetTimer()
}
function gotoSlide (index) {
  currentSlideIndex = index 
  updateCarousel()
  resetTimer()
}

// ---------------------------------------------------------------------------------------
function toggleAutoPlayButton () {
  if(autoPlayTimerInterval) {
      stopAutoPlay()
      autoPlayButton.textContent = 'Start Auto Play'
    } else {
        startAutoPlay()
        autoPlayButton.textContent = 'Stop Auto Play'
  }
}

function startAutoPlay() {
  autoPlayTimerInterval = setInterval(nextSlide , 5000)
  startTimer()
}

function stopAutoPlay() {
  clearInterval(autoPlayTimerInterval)
  clearInterval(timerInterval)

  autoPlayTimerInterval = null 
  timerDisplay.textContent = ''
  updateTimerDisplay()
}


function startTimer() {
  timeInHand = 5
  updateTimerDisplay()
  timerInterval = setInterval(()=> {
    timeInHand--
    updateTimerDisplay()
    if(timeInHand == 0)
      timeInHand = 5
  }, 1000)
}
function resetTimer () {
  if(autoPlayTimerInterval) {
    clearInterval(timerInterval)
    startTimer()
  }
}

function updateTimerDisplay () {
  console.log(timeInHand)
  timerDisplay.textContent = autoPlayTimerInterval ? `Next slide in: ${timeInHand}s` : '' ;

}
 //--------------------------------------------------------------------------------------------------------------

 prevButton.addEventListener('click', () => {
  prevSlide()
  if (autoPlayTimerInterval) {
    stopAutoPlay()
    
  }
 })

 nextButton.addEventListener('click', ()=> {
  nextSlide()
  if (autoPlayTimerInterval) {
    stopAutoPlay()
    
  }
 })

 autoPlayButton.addEventListener('click', toggleAutoPlayButton)

 startCarousel()