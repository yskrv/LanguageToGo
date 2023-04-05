function slider({
     sliderContainerSelector, 
     sliderCardsSelector, 
     previousBtnSelector, 
     nextBtnSelector
}){
     const windowWidth = window.screen.width;
     const sliderContainer = document.querySelector(sliderContainerSelector);
     const sliderCards = document.querySelectorAll(sliderCardsSelector);
     const prevBtn = document.querySelector(previousBtnSelector);
     const nextBtn = document.querySelector(nextBtnSelector);
     let sliderGap = 40;
     if (windowWidth <= 660) {
          sliderGap = 20;
     } else if (windowWidth <= 1440) {
          sliderGap = 30;
     }
     let sliderCardWidth = window.getComputedStyle(sliderCards[0]).width.slice(0, -2); 
     let sliderOffset = 0;
     let maxOffset = 3;
     if (windowWidth <= 660) {
          maxOffset = 5;
     } else if (windowWidth <= 1200) {
          maxOffset = 4;
     }
     prevBtn.addEventListener('click', () => {
          if (sliderOffset != 0) {
               sliderOffset--;
               moveSlider(sliderOffset, sliderCardWidth);
          }
     });
     nextBtn.addEventListener('click', () => {
          if (sliderOffset !== maxOffset) {
               sliderOffset++;
               moveSlider(sliderOffset, sliderCardWidth);
          }
     });
     const moveSlider = (offset, width) => {
          const moveWidth = (Number(sliderGap) + Number(width)) * offset;
          console.log(moveWidth);
          sliderContainer.style.transform = `translateX(-${moveWidth}px)`;
     };
}

export default slider;