  window.alert("Welcome to my page! ~(￣▽￣)~ ")
  function biginstagram(x) {
  x.style.height = "70px";
  x.style.width = "70px";
 }
   function normalinstagram(x) {
      x.style.height = "60px";
      x.style.width = "60px";
   }
    function bigtwitter(x) {
  x.style.height = "60px";
  x.style.width = "60px";
 }
   function normaltwitter(x) {
      x.style.height = "50px";
      x.style.width = "50px";
   }
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

