<?php

function s2_theme_enqueue_styles() {
    wp_enqueue_style('reset-css', get_template_directory_uri() . '/css/reset.css');
    
    wp_enqueue_style('blackButton-css', get_template_directory_uri() . '/css/blackButton.css');
    wp_enqueue_style('header-css', get_template_directory_uri() . '/css/header.css');
    
    wp_enqueue_style('s2-theme-style', get_stylesheet_uri());
    // wp_enqueue_script(
    //     'cursor-js', // Nom unique du script
    //     get_template_directory_uri() . '/assets/js/cursor.js', // Chemin du fichier JS
    //     array(), // Dépendances (par exemple, ['jquery'] si nécessaire)
    //     '1.0', // Version du script
    //     true // Charger le script dans le footer
    // );
}
add_action('wp_enqueue_scripts', 's2_theme_enqueue_styles');


function enqueue_custom_scripts() {
    wp_enqueue_script('custom-script', get_stylesheet_directory_uri() . '/assets/js/description.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'enqueue_custom_scripts');
add_action('wp_enqueue_scripts', '/css/blackButton.css');
add_action('wp_enqueue_scripts', '/css/confiance.css');
add_action('wp_enqueue_scripts', '/css/contact.css');
add_action('wp_enqueue_scripts', '/css/cursor.css');
add_action('wp_enqueue_scripts', '/css/description.css');
add_action('wp_enqueue_scripts', '/css/descriptionCommerce.css');
add_action('wp_enqueue_scripts', '/css/descriptionCommerceDetail.css');
add_action('wp_enqueue_scripts', '/css/evenement.css');
add_action('wp_enqueue_scripts', '/css/footer.css');
add_action('wp_enqueue_scripts', '/css/header.css');
add_action('wp_enqueue_scripts', '/css/hero.css');
add_action('wp_enqueue_scripts', '/css/iaPart.css');
add_action('wp_enqueue_scripts', '/css/mention.css');
add_action('wp_enqueue_scripts', '/css/openSite.css');
add_action('wp_enqueue_scripts', '/css/reset.css');
add_action('wp_enqueue_scripts', '/css/swiper-bundle.min.css');
add_action('wp_enqueue_scripts', '/css/vorPlusDetails.css');
add_action('wp_enqueue_scripts', '/css/certification.css');