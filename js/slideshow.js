  const container = document.querySelector('.container');
  const imageRoll = document.querySelector('.imageroll');
  const next = document.querySelector('.next');
  const dots = document.querySelector('.dots');
  const pageControl = document.querySelector('.page-control');

  Array.from(imageRoll.children).forEach((element, index) => {
    dots.innerHTML += `<div class="dot ${ index == 0 ? 'fill' : '' }" data-index="${index}"></div>`;
  });

  let currentIndex = 0;
  const imageWindowWidth = container.offsetWidth;

  pageControl.addEventListener('click', function(e){
    let newIndex = currentIndex;
    if (e.target === next && currentIndex < imageRoll.children.length - 1) {
      newIndex = currentIndex + 1;
    }
    if (currentIndex === 2) {
      setTimeout(() => {
        window.location.href = 'login.html';    
      }, 2000);
    }
    const offset = newIndex * imageWindowWidth;
    imageRoll.animate([{ transform: `translateX(-${offset}px)` }], { duration: 500, fill: 'both' });
    currentIndex = newIndex;
    Array.from(dots.children).forEach((element, index) => {
      element.classList.toggle('fill', currentIndex === index);
    });
  });