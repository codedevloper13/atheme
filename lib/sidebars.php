<?php

/**
 * The sidebar
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage atheme
 * @since A theme 1.0
 */

/**
 * This is the sidebar section of the theme.
 *
 * @since 1.0.0
 * @version 1.0.0
 * @return void
 */
function _themename_sidebar_widgets() {
	register_sidebar(
		array(
			'name'          => __( 'Primary Sidebar', '_themename' ),
			'id'            => 'primary-sidebar',
			'description'   => __( 'This sidebar appear on blog post page.', '_themename' ),
			'before_widget' => '<section id="%1$s" class="c-sidebar-widget u-margin-bottom-20 %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h5>',
			'after_title'   => '</h5>',
		)
	);

}

add_action( 'widgets_init', '_themename_sidebar_widgets' );
