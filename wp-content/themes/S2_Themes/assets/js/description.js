alert("Script chargé !");

let description = document.querySelector('.description');
let stickyElement = document.querySelector('.stickyElement');  // L'image à gauche
let isScrolling = false;

// Calculer la hauteur totale de la div description et la diviser par 6
const descriptionHeight = description.offsetHeight;
const segmentHeight = descriptionHeight / 6;

// Fonction pour gérer l'événement de scroll
const handleScroll = () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            let scrollPosition = window.scrollY || window.pageYOffset;
            console.log('scrollPosition', scrollPosition);

            // Vérifier à quel segment on est dans la description
            for (let i = 1; i <= 6; i++) {
                let segmentStart = description.offsetTop + (i - 1) * segmentHeight;
                let segmentEnd = description.offsetTop + i * segmentHeight;

                // Si la position du scroll est dans ce segment
                if (scrollPosition >= segmentStart && scrollPosition < segmentEnd) {
                    console.log(`Dans le segment ${i}`);
                    // Tu peux remplacer les `console.log` par des changements d'images ici
                    // stickyElement.src = `path_to_image_segment_${i}.webp`;
                    break;
                }
            }

            isScrolling = false;
        });
    }

    isScrolling = true;
};

// Ajouter l'écouteur d'événement de scroll
document.addEventListener('scroll', handleScroll);
