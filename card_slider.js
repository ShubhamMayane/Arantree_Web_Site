const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const totalCards = cards.length;
let index = 0;


function getCardsVisible() {
  const w = window.innerWidth;
  if (w < 680) return 1;      
  else if (w < 980) return 2; 
  else return 3;              
}

function updateSliderState() {
  const visible = getCardsVisible();
  

  prevBtn.disabled = false;
  nextBtn.disabled = false;
  

  prevBtn.setAttribute('aria-label', `Show previous ${visible} items`);
  nextBtn.setAttribute('aria-label', `Show next ${visible} items`);
  

  const cardWidth = cards[0].offsetWidth;
  const gap = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap'));
  const moveAmount = cardWidth + gap;
  
  slider.style.transform = `translateX(-${index * moveAmount}px)`;
}

function handleResize() {
  // Reset position if current index would be invalid at new screen size
  const maxIndex = totalCards - getCardsVisible();
  if (index > maxIndex) {
    index = maxIndex;
  }
  updateSliderState();
}


nextBtn.addEventListener('click', () => {
  const visible = getCardsVisible();
  if (index < totalCards - visible) {
    index++;
  } else {
    index = 0;
  }
  updateSliderState();
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {

    index = totalCards - getCardsVisible();
  }
  updateSliderState();
});


let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleResize, 100);
});


updateSliderState();