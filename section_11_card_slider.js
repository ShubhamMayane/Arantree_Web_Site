const section_11_slider = document.querySelector('.section-11-slider');
const section_11_cards = document.querySelectorAll('.section-11-card');
const section_11_prevBtn = document.getElementById('section-11-prev');
const section_11_nextBtn = document.getElementById('section-11-next');
const section_11_totalCards = section_11_cards.length;
let section_11_index = 0;




function section_11_getCardsVisible() {
    const w = window.innerWidth;
    if (w < 680) return 1;      
    else if (w < 980) return 2; 
    else return 3;              
}

function section_11_updateSliderState() {


    const visible = section_11_getCardsVisible();
    

    section_11_prevBtn.disabled = false;
    section_11_nextBtn.disabled = false;
    

    section_11_prevBtn.setAttribute('aria-label', `Show previous ${visible} items`);
    section_11_nextBtn.setAttribute('aria-label', `Show next ${visible} items`);
    

    const cardWidth = section_11_cards[0].offsetWidth;
    const gap = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap'));
    const moveAmount = cardWidth + gap;
    
    section_11_slider.style.transform = `translateX(-${section_11_index * moveAmount}px)`;





}

function section_11_handleResize() {
    // Reset position if current index would be invalid at new screen size
    const maxIndex = section_11_index_totalCards - section_11_indexgetCardsVisible();
    if (section_11_index > maxIndex) {
        section_11_index = maxIndex;
    }
    section_11_updateSliderState();
}


section_11_nextBtn.addEventListener('click', () => {
    const visible = section_11_getCardsVisible();
    if (section_11_index < section_11_totalCards - visible) {
        
        section_11_index++;

    } else {
        section_11_index = 0;
    }
    section_11_updateSliderState();
});

section_11_prevBtn.addEventListener('click', () => {
    if (section_11_index > 0) 
    {
        section_11_index--;
    } else {

        section_11_index = section_11_totalCards - section_11_getCardsVisible();
    }
    section_11_updateSliderState();
});


let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(handleResize, 100);
});


section_11_updateSliderState();
