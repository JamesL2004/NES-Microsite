const navSlide = () => { //used for the sliding menu in moble mode
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks =document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active'); 
        navLinks.forEach((link, index) => {
            if(link.getElementsByClassName.animation){
                link.style.animation = " ";
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });
    });
}
navSlide();