let btn = document.querySelector('.btn'),
		box = document.querySelector('.box');

function animate({timing, draw, duration}) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    
    let progress = timing(timeFraction);

    draw(progress); 

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

function myAnimations() {
      animate({
        duration: 3000,
        timing: function elastic(x, timeFraction) {
          return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
        }.bind(null, 1.5),
        draw: function(progress) {
          box.style.left = progress * 500 + 'px';
        }
      });
};
btn.addEventListener('click', myAnimations);