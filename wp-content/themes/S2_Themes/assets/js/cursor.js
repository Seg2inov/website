// Cursor
const Cursor = (() => {

    const cursorArea  = document.querySelector('.cursor');
    const cursorSmall = document.querySelector('.cursor__circle--small');
    const cursorLarge = document.querySelector('.cursor__circle--large');

    if (!cursorSmall || !cursorLarge) {
        console.error('Cursor elements not found in the DOM.');
        return null;
    }

    let smallPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let largePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let mousePos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    // Function to interpolate between positions
    const lerp = (a, b, n) => a + (b - a) * n;

    const updateCursor = () => {
        smallPos.x = lerp(smallPos.x, mousePos.x, 0.2);
        smallPos.y = lerp(smallPos.y, mousePos.y, 0.2);

        largePos.x = lerp(largePos.x, mousePos.x, 0.1);
        largePos.y = lerp(largePos.y, mousePos.y, 0.1);

        cursorSmall.style.transform = `translate(${smallPos.x}px, ${smallPos.y}px)`;
        cursorLarge.style.transform = `translate(${largePos.x}px, ${largePos.y}px)`;
    };

    const handleMouseMove = (e) => {
        mousePos.x = e.clientX;
        mousePos.y = e.clientY;
    };

    const handleLinkEnter = () => {
        cursorLarge.style.transform = `scale(2) translate(${largePos.x}px, ${largePos.y}px)`;
        cursorSmall.style.transform = `scale(0) translate(${smallPos.x}px, ${smallPos.y}px)`;
    };

    const handleLinkLeave = () => {
        cursorLarge.style.transform = `scale(1) translate(${largePos.x}px, ${largePos.y}px)`;
        cursorSmall.style.transform = `scale(1) translate(${smallPos.x}px, ${smallPos.y}px)`;
    };

    const addLinkEvents = () => {
        document.querySelectorAll('a').forEach((link) => {
            link.addEventListener('mouseenter', handleLinkEnter);
            link.addEventListener('mouseleave', handleLinkLeave);
        });
    };

    const removeLinkEvents = () => {
        document.querySelectorAll('a').forEach((link) => {
            link.removeEventListener('mouseenter', handleLinkEnter);
            link.removeEventListener('mouseleave', handleLinkLeave);
        });
    };

    const init = () => {
        window.addEventListener('mousemove', handleMouseMove);
        addLinkEvents();
        requestAnimationFrame(animateCursor);
    };

    const destroy = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        removeLinkEvents();
    };

    const disable = () => {
        destroy();
        cursorArea.classList.add('cursor-hide');
    };

    const animateCursor = () => {
        updateCursor();
        requestAnimationFrame(animateCursor);
    };

    return { init, destroy, disable };

})();

// Simple touch device detection
const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};

// Init
document.addEventListener('DOMContentLoaded', () => {
    const descriptionLog = document.querySelector('.hero-header__description');
    
    if (!isTouchDevice()) {
        Cursor.init();
        if (descriptionLog) {
            descriptionLog.textContent = 'Non-touch device detected. Initializing cursor.';
        }
        console.log('Non-touch device detected. Initializing cursor.');
    } else {
        Cursor.disable();
        if (descriptionLog) {
            descriptionLog.textContent = 'Touch device detected. Disabling cursor.';
        }
        console.log('Touch device detected. Disabling cursor.');
    }
});
