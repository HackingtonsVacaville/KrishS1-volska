var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i=0;
  
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


function carousel(){
  var i;
  var x = document.getElementsByClassName("mySlides");

  for(i=0; i<x.length; i++){
      x[i].style.display="none";
  }
  slideIndex ++;
  if(slideIndex > x.length){
      slideIndex = 1;
  }
  x[slideIndex-1].style.display="block";
  setTimeout(carousel, 4000);
}

var modal = document.getElementById('id01');


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


var modal2 = document.getElementById('id02');


window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}