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
      nav.classList.toggle('nav-active');
      document.querySelector( "#nav-toggle" ).classList.toggle("active");
    }
  });
}

navSlider();
