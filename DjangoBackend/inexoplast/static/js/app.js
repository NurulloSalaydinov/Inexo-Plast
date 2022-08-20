var burger = document.getElementById("navbarBurger");
var menu = document.getElementById("navbarMenu");
var contact = document.getElementById("contact-num");

burger.onclick = function () {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  contact.classList.toggle("active");
};

// slider self written Simple Slider library function

const SimpleSlider = (sliderId) => {
  var slider = document.getElementById(sliderId);
  var simpleIndex = 0;
  if (slider) {
    var sliderWrapper = slider.querySelector(".slider-wrapper");
    var slidersCount = sliderWrapper.children.length;
    var next = slider.querySelector(".next");
    var prev = slider.querySelector(".prev");
    next.onclick = () => {
      if (simpleIndex != slidersCount - 1) {
        simpleIndex += 1;
        prev.classList.remove("disabled");
      }
      if (simpleIndex + 1 == slidersCount) {
        next.classList.add("disabled");
      }
      sliderWrapper.style = `transform: translate3d(-${
        simpleIndex * 100
      }%, 0, 0)`;
    };
    prev.onclick = () => {
      if (simpleIndex != 0) {
        simpleIndex -= 1;
        next.classList.remove("disabled");
      }
      if (simpleIndex == 0) {
        prev.classList.add("disabled");
      }
      sliderWrapper.style = `transform: translate3d(-${
        simpleIndex * 100
      }%, 0, 0)`;
    };
  } else {
    console.error(`Element with id ${sliderId} not found `);
  }
};

SimpleSlider("slider1");
SimpleSlider("slider2");

// var bannerImages = document.querySelectorAll(".banner-image");
// var bannerIndex = 0;
// var bannerTime = 2000;

// const changeBannerImage = () => {
//   if (window.innerWidth < 768) {
//     if (bannerIndex != bannerImages.length - 1) {
//       bannerIndex += 1;
//     } else {
//       bannerIndex = 0;
//     }
//     bannerImages.forEach((bannerImage) => {
//       bannerImage.style.display = "none";
//     });
//     bannerImages[bannerIndex].style.display = "block";
//   }
// };

// setInterval(changeBannerImage, bannerTime);


function ResizeImage(src) {
    var element = document.createElement('div');
    element.style = `position: fixed;top: 0;left: 0;
    width: 100%;height: 100vh;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1111111111111111111;
    `
    element.innerHTML = `
        <div id="closeResizedImage" style="position: absolute;top: 20px;right: 20px;font-size: 30px;cursor: pointer;color: #fff;font-size: 70px;">&times;</div>
        <img src="${src}" style="width: 650px" alt="Not Found">
    `
    document.body.appendChild(element)
    var remover = document.getElementById('closeResizedImage');
    remover.onclick = () => {
        document.body.removeChild(element);
    };
};
