const navSlider = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLi = document.querySelector('.navbar ul');

  document.querySelector( "#nav-toggle" )
    .addEventListener( "click", function() {
      this.classList.toggle("active");
      nav.classList.toggle('nav-active');
    });

 document.querySelector('.nav-links').addEventListener('click', (e)=>{
    if(e.target.id){
      $('.current-page').removeClass('current-page');
      $(e.target).parent().addClass('current-page');
    }
  });

}

navSlider();
