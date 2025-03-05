alert("Script chargé !");

let description = document.querySelector('.description');
let stickyElement = document.querySelector('.stickyElement');  // L'image à gauche
let isScrolling = false;

const handleScroll = () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            let scrollPosition = window.scrollY || window.pageYOffset;
            console.log('scrollPosition', scrollPosition)
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
document.addEventListener('scroll', handleScroll);
