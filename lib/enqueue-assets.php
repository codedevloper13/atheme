<?php
/**
 * Theme Enqueue Scripts
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;


/**
 * Enqueue assets for the front-end.
 *
 * @since 1.0.0
 * @return void
 */
function _themename_assets() {
	wp_enqueue_style( '_themename-style', get_template_directory_uri() . '/dist/assets/css/bundle.css', array(), wp_rand(), 'all' );
	wp_enqueue_script( '_themename-script', get_template_directory_uri() . '/dist/assets/js/bundle.js', array( 'jquery' ), wp_rand(), true );
}

add_action( 'wp_enqueue_scripts', '_themename_assets' );


/**
 * Enqueue assets for the back-end.
 *
 * @since 1.0.0
 */
function _themename_admin_assets() {
	wp_enqueue_style( '_themename-admin-style', get_template_directory_uri() . '/dist/assets/css/admin.css', array(), wp_rand(), 'all' );
}

add_action( 'admin_enqueue_scripts', '_themename_admin_assets' );
