<?php

/**
 * Enqueue assets for the front-end.
 *
 * @since 1.0.0
 * @return void
 */
function atheme_assets() {
	wp_enqueue_style( 'atheme-style', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), wp_rand(), 'all' );
	wp_enqueue_script( 'atheme-script', get_template_directory_uri() . '/dist/assets/js/bundle.js', array(), wp_rand(), true );
}

add_action( 'wp_enqueue_scripts', 'atheme_assets' );


/**
 * Enqueue assets for the back-end.
 *
 * @since 1.0.0
 */
function atheme_admin_assets() {
	wp_enqueue_style( 'atheme-admin-style', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), wp_rand(), 'all' );
}

add_action( 'admin_enqueue_scripts', 'atheme_admin_assets' );
