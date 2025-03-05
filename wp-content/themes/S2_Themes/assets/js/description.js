alert("Script chargé !");

let description = document.querySelector('.description');
const sections = document.querySelectorAll(".contentElement > div");
let stickyElement = document.querySelector('.stickyElement');  // L'image à gauche
let isScrolling = false;

// Fonction pour gérer l'événement de scroll
const handleScroll = () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            let scrollPosition = window.scrollY || window.pageYOffset;
            let windowHeight = window.innerHeight;

            sections.forEach((section, index) => {
                let sectionTop = section.offsetTop;
                let sectionHeight = section.offsetHeight;

                // Calculer la position centrale de la section
                let sectionCenter = sectionTop + sectionHeight / 2;

                // Vérifier si la section est au centre de l'écran
                if (scrollPosition + windowHeight / 2 >= sectionCenter - sectionHeight / 2 && 
                    scrollPosition + windowHeight / 2 <= sectionCenter + sectionHeight / 2) {
                    console.log(`Section ${index + 1} est centrée à l'écran`);
                    
                    // Remplacer le console.log par un changement d'image ici
                    stickyElement.src = `\assets\img\description\_${index + 1}.svg`;
                }
            });

            isScrolling = false;
        });
    }

    isScrolling = true;
};

// Ajouter l'écouteur d'événement de scroll
document.addEventListener('scroll', handleScroll);
