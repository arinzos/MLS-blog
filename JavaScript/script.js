// code for sidebar and backdrop
let backdrop = document.querySelector(".backdrop");
let sideBar =document.querySelector(".sidebar");
let mobileNav=document.querySelector(".mobile-nav");

backdrop.addEventListener("click",function(){
  mobileNav.style.display='none';
  
  closeModal();
}
);
function closeModal(){
  backdrop.style.display= "none";
}

sideBar.addEventListener('click', function(){
  mobileNav.style.display= 'block';
  backdrop.style.display='block';


});

//code for images slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName('mySlidesfade');
  let dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    let active;
    dots[i].className = dots[i].className.replace("active");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className = "active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function showPass(){
  let pwd=document.getElementById("password");
  let chk=document.getElementById("checked");
  if(pwd.type==="password"){
    pwd.type="text";
  }
  else{
    pwd.type="password";
  }
  chk.addEventListener('click',showPass());
  showPass();
};

