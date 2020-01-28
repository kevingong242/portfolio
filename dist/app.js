const pages = ["homeNav", "experienceNav", "skillNav", "projectNav"];
const navSlider = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLi = document.querySelector('.navbar ul');
  //this is for the burger menu
  $('#nav-toggle').click(function(){
    this.classList.toggle("active");
    nav.classList.toggle("nav-active");
  });
  $('.nav-links').click(function(e){
    nav.classList.toggle('nav-active');
    $('#nav-toggle')[0].classList.toggle("active");
  });
}


navSlider();

//Shows current page on navbar
$('.nav-links li').click(function(e){
  $('.current-page')[0].classList.remove("current-page");
  e.target.parentNode.classList.add("current-page");
});
