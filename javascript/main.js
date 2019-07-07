window.addEventListener('DOMContentLoaded', (event) => {
  //hamburger menu dropdown work
  const hamburger = document.getElementsByClassName('hamburger')[0];
  const dropdown = document.getElementsByClassName('nav-dropdown')[0];

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    dropdown.classList.toggle('display-none');
  });

  //social media on mobile/tablet
  const socialOpenButton = document.getElementsByClassName('header__img-connect')[0];
  const socialCloseButton = document.getElementsByClassName('social-overlay__close')[0];
  const socialOverlay = document.getElementById('social-overlay');
  const socialOverlayBox = document.getElementById('social-overlay-box');
  socialOpenButton.addEventListener('click', () => {
    socialOverlay.classList.toggle('display-none');
    socialOverlay.classList.toggle('social-overlay');
    socialOverlayBox.classList.toggle('display-none');
    socialOverlayBox.classList.toggle('social-overlay-box');
  });
  socialOverlay.addEventListener('click', () => {
    socialOverlay.classList.toggle('display-none');
    socialOverlay.classList.toggle('social-overlay');
    socialOverlayBox.classList.toggle('display-none');
    socialOverlayBox.classList.toggle('social-overlay-box');
  });
  socialCloseButton.addEventListener('click', () => {
    socialOverlay.classList.toggle('display-none');
    socialOverlay.classList.toggle('social-overlay');
    socialOverlayBox.classList.toggle('display-none');
    socialOverlayBox.classList.toggle('social-overlay-box');
  }); //could make a function for these 4 repeating statements, but overall code is not too long.
  

  //image sliding gallery
  const slideClasses = ['gallery--slide1', 'gallery--slide2', 'gallery--slide3'];
  const gallery = document.getElementsByClassName('gallery')[0];
  const leftButton = document.getElementById('gallery__left');
  const rightButton = document.getElementById('gallery__right');
  let i = 0;
  leftButton.addEventListener('click', () => {
    //turn off current image
    gallery.classList.toggle(slideClasses[i]);

    //move image to left (allowing wrap arounds to rightmost array element)
    if (i === 0) {
      i = slideClasses.length - 1;
    }
    else i--;

    gallery.classList.toggle(slideClasses[i]);
  });

  rightButton.addEventListener('click', () => {
    //turn off current image
    gallery.classList.toggle(slideClasses[i]);

    //move image to right (allowing wrap arounds to leftmost array element)
    if (i === slideClasses.length - 1) {
      i = 0;
    }
    else i++;

    gallery.classList.toggle(slideClasses[i]);
  });

});

