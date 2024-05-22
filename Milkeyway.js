// Fonction de défilement vers la droite
document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item'); // Sélectionne tous les éléments avec la classe "item"
    document.getElementById('slide').appendChild(lists[0]); // Déplace le premier élément au bout de la liste
}

// Fonction de défilement vers la gauche
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item'); // Sélectionne tous les éléments avec la classe "item"
    document.getElementById('slide').prepend(lists[lists.length - 1]); // Déplace le dernier élément au début de la liste
}

// Gestion du menu 
let  menu = document.querySelector('#menu-bars'); // Sélectionne l'icône du menu
let  navbar = document.querySelector('.navbar'); // Sélectionne la barre de navigation

menu.onclick = () =>{
    menu.classList.toggle('fa-times'); // Ajoute ou supprime la classe 'fa-times' pour modifier l'apparence de l'icône du menu
    navbar.classList.toggle('active'); // Ajoute ou supprime la classe 'active' pour afficher ou masquer la barre de navigation
}

// Alerte utilisateur lors du clic sur l'icône d'utilisateur
document.getElementById("fa-user").addEventListener("click", function() {
    alert("Veuillez vous inscrire avant de continuer."); // Affiche une alerte pour inviter l'utilisateur à s'inscrire
});

// Gestion de la navigation de la barre de défilement
let section = document.querySelectorAll('section'); // Sélectionne toutes les sections de la page
let navLinks = document.querySelectorAll('header .navbar a'); // Sélectionne tous les liens de navigation dans la barre de navigation

window.onscroll = () =>{
    menu.classList.remove('fa-times'); // Réinitialise l'apparence de l'icône du menu
    navbar.classList.remove('active'); // Masque la barre de navigation

    // Parcours de toutes les sections pour déterminer laquelle est visible à l'écran
    section.forEach(sec =>{
        let top=window.scrollY; // Position de défilement actuelle
        let height =sec.offsetHeight; // Hauteur de la section
        let offset = sec.offsetTop -150; // Position de la section par rapport au haut de la page, ajustée de 150 pixels
        let id = sec.getAttribute('id'); // Identifiant de la section

        if(top >= offset && top < offset + height){
            // Si la section est visible à l'écran, ajoute la classe 'active' au lien de navigation correspondant
            navLinks.forEach(links =>{
              links.classList.remove('active'); // Réinitialise tous les liens de navigation
              document.querySelector('header .navbar a[href*='+id+']').classList.add('active'); // Ajoute la classe 'active' au lien correspondant à la section visible
            });
        };
    });
}

// Gestion de l'affichage du formulaire de recherche
document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active'); // Ajoute ou supprime la classe 'active' pour afficher ou masquer le formulaire de recherche
}

// Gestion de la fermeture du formulaire de recherche
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active'); // Supprime la classe 'active' pour masquer le formulaire de recherche
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
