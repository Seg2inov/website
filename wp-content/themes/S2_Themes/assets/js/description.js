alert("Script chargé !");

let description = document.querySelector('.description');
let stickyElement = document.querySelector('.stickyElement');  // L'image à gauche

console.log('description', description);

// Variable pour éviter les multiples appels à `scroll`
let isScrolling = false;

// Fonction pour gérer l'événement de scroll
const handleScroll = () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            console.log('isScrolling');
            // Logique pour changer l'image selon la position de scroll
            let scrollPosition = window.scrollY || window.pageYOffset;

            // Exemple de logique pour changer l'image en fonction du défilement
            if (scrollPosition > 1000) {
                console.log('change img')
                //stickyElement.src = 'path_to_new_image.webp';  // Change l'image à un certain point du scroll
            } else {
                console.log('img')
                //stickyElement.src = 'path_to_original_image.webp';  // Remet l'image initiale
            }

            isScrolling = false;
        });
    }

    isScrolling = true;
};

// Ajouter l'écouteur d'événement de scroll
document.addEventListener('scroll', handleScroll);
