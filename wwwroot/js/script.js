let popup = document.getElementById("log-in");
    let opacity = document.getElementById("opacity");
    function openfunction() {
      popup.classList.add("loginA");
      opacity.classList.add("opacity");
      console.log("hi");
}
    
///
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Auto slide
let slideInterval = setInterval(function() {
  plusSlides(1);
}, 5000); // Change slide interval time here (in milliseconds)

// Pause auto slide when user hovers over slider
let slider = document.getElementById("slider");
slider.onmouseenter = function() {
  clearInterval(slideInterval);
}
slider.onmouseleave = function() {
  slideInterval = setInterval(function() {
    plusSlides(1);
  }, 5000); // Change slide interval time here (in milliseconds)
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  

  
}
