<?php
/**
 *
 * Theme Customize setup
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Register basic customizer support.
 *
 * @param object $wp_customize Customizer reference.
 */
function _themename_customize_register( $wp_customize ) {

	$wp_customize->get_setting( 'blogname' )->transport = 'postMessage';

	$wp_customize->add_section(
		'_themename_footer_section',
		array(
			'title'       => __( 'Footer Options', '_themename' ),
			'description' => __( 'You can change Footer Options from here ', '_themename' ),
			'priority'    => 35,
		)
	);

	$wp_customize->add_setting(
		'_themename_site_info',
		array(
			'default'          => '',
			'saniate_callback' => '_themename_sanitize_html_field',
			'transport'        => 'postMessage',
		)
	);

	$wp_customize->add_control(
		'_themename_site_info',
		array(
			'label'    => __( 'Site Info', '_themename' ),
			'section'  => 'title_tagline',
			'type'     => 'text',
			'priority' => 11,
		)
	);
}
add_action( 'customize_register', '_themename_customize_register' );
