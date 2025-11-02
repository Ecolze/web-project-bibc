const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#Menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  

  document.body.classList.toggle('no-scroll');

  
  e.preventDefault(); 
};


const hamburger = document.querySelector('#Menu');
document.addEventListener('click', function(e) {
  if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
    

    document.body.classList.remove('no-scroll');

  }
});