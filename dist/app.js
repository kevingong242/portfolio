const navSlider = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLi = document.querySelector('.navbar ul');
  //this is for the burger menu
  document.querySelector( "#nav-toggle" )
    .addEventListener( "click", function() {
      this.classList.toggle("active");
      nav.classList.toggle("nav-active");
    });
    $('.nav-links').click(function(e){
      nav.classList.toggle('nav-active');
      $('#nav-toggle')[0].classList.toggle("active");
    });
}


navSlider();
