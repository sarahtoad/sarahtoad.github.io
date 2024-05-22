let  menu = document.querySelector('#menu-bars');
let  navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
document.getElementById("fa-user").addEventListener("click", function() {
    alert("Veuillez vous inscrire avant de continuer.");
});

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
        let top=window.scrollY;
        let height =sec.offsetHeight;
        let offset = sec.offsetTop -150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
              links.classList.remove('active');
              document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

// Fonction pour masquer le loader
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out'); // Ajoute la classe 'fade-out' au conteneur du loader
}

// Fonction pour déclencher le masquage du loader après un certain délai
function fadeOut(){
    setInterval(loader, 2000); // Exécute la fonction loader toutes les 2 secondes
}

window.onload = fadeOut; // Lance la fonction fadeOut lorsque la fenêtre est chargée
