var burger = document.getElementById('navbarBurger');
var menu = document.getElementById('navbarMenu');
var contact = document.getElementById('contact-num');

burger.onclick = function() {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    contact.classList.toggle('active');
};

// slider self written Simple Slider library function

const SimpleSlider = (sliderId) => {
    var slider = document.getElementById(sliderId);
    var simpleIndex = 0;
    if (slider) {
        var sliderWrapper = slider.querySelector('.slider-wrapper');
        var slidersCount = sliderWrapper.children.length;
        var next = slider.querySelector('.next');
        var prev = slider.querySelector('.prev');
        next.onclick = () => {
            if (simpleIndex != slidersCount - 1) {
                simpleIndex += 1;
                prev.classList.remove('disabled')
            }
            if (simpleIndex + 1 == slidersCount) {
                next.classList.add('disabled');
            }
            sliderWrapper.style = `transform: translate3d(-${simpleIndex * 100}%, 0, 0)`
        }
        prev.onclick = () => {
            if (simpleIndex != 0) {
                simpleIndex -= 1;
                next.classList.remove('disabled')
            }
            if (simpleIndex == 0) {
                prev.classList.add('disabled');
            }
            sliderWrapper.style = `transform: translate3d(-${simpleIndex * 100}%, 0, 0)`
        }
    } else {
        console.error(`Element with id ${sliderId} not found `)
    }
}

SimpleSlider('slider1');
SimpleSlider('slider2');