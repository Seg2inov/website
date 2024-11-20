<?php

function s2_theme_enqueue_styles() {
    // Enqueue reset.css
    wp_enqueue_style('reset-css', get_template_directory_uri() . '/css/reset.css');

    // Enqueue style.css
    wp_enqueue_style('s2-theme-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 's2_theme_enqueue_styles');
