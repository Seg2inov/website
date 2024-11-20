<?php

function s2_theme_enqueue_styles() {
    wp_enqueue_style('reset-css', get_template_directory_uri() . '/css/reset.css');
    
    wp_enqueue_style('blackButton-css', get_template_directory_uri() . '/css/blackButton.css');
    wp_enqueue_style('header-css', get_template_directory_uri() . '/css/header.css');
    
    wp_enqueue_style('s2-theme-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 's2_theme_enqueue_styles');
