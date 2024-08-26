// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner tous les boutons avec la classe "glow-on-hover"
    var boutons = document.querySelectorAll('.glow-on-hover');

    // Ajouter un gestionnaire d'événements de clic à chaque bouton
    boutons.forEach(function(bouton) {
        // Définir la destination pour chaque bouton
        var destination = "contact.html"; // Changez ceci en la destination que vous voulez pour chaque bouton

        // Ajouter l'attribut data-link à chaque bouton avec la destination spécifiée
        bouton.setAttribute('data-link', destination);

        // Ajouter un écouteur d'événements de clic à chaque bouton
        bouton.addEventListener('click', function(event) {
            // Obtenir la destination à partir de l'attribut data-link
            var destination = bouton.getAttribute('data-link');

            // Rediriger l'utilisateur vers la destination spécifiée
            window.location.href = destination;
        });
    });
});
var articles = document.querySelectorAll(".art");
// Ajouter un gestionnaire d'événements à chaque élément
articles.forEach(function(article) {
    article.addEventListener("click", function() {
        // Obtenir le lien spécifique à cet article
        var link = article.getAttribute("data-link");
        // Rediriger vers la page spécifiée
        window.location.href = link;
    });
});
////////////////////
 // Sélectionnez l'icône du menu

