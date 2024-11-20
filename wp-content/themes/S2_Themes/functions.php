<?php
function s2_theme_enqueue_styles() {
    wp_enqueue_style('s2-theme-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 's2_theme_enqueue_styles');


?>