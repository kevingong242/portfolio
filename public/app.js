const navSlider = () =>{
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');

  burger.addEventListener('click', ()=>{
    //Toggle Nav
    nav.classList.toggle('nav-active');
    //Burger Animation
    burger.classList.toggle('toggle');
  });

  //document.querySelector('.nav-links').addEventListener('click', ()=>{
    //nav.classList.toggle('nav-active');
    //burger.classList.toggle('toggle');
  //});
}

navSlider();
