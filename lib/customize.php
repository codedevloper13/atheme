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

	// Selective refresh to refresh the ifrem into customizeer.

	$wp_customize->selective_refresh->add_partial(
		'',
		array(
			'settings'            => array( 'blogname' ),
			'selector'            => '.c-header__blogname',
			'container_inclusive' => false,
			'render_callback'     => function () {
				bloginfo( 'name' );
			},
		)
	);
	/*##################  SINGLE SETTINGS ########################*/
		$wp_customize->selective_refresh->add_partial(
			'',
			array(
				'settings'            => array( '_themename_footer_bg' ),
				'selector'            => '#footer',
				'container_inclusive' => false,
				'render_callback'     => function () {
					get_template_part( 'template-parts/footer/info' );
					get_template_part( 'template-parts/footer/widgets' );
				},
			)
		);

	$wp_customize->add_section(
		'_themename_footer_section',
		array(
			'title'       => __( 'Footer Options', '_themename' ),
			'description' => __( 'You can change Footer Options from here ', '_themename' ),
			'priority'    => 25,
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
			'section'  => '_themename_footer_section',
			'type'     => 'text',
			'priority' => 11,
		)
	);

	/**
	 * FOOTER BACKGROUND CUSTOMIZER.
	*/

	$wp_customize->add_setting(
		'_themename_footer_bg',
		array(
			'default'           => 'dark',
			'transport'         => 'postMessage',
			'sanitize_callback' => '_themename_sanitize_footer_bg',
		)
	);
	$wp_customize->add_control(
		'_themename_footer_bg',
		array(
			'type'    => 'select',
			'label'   => esc_html__( 'Footer Backgroud', '_themename' ),
			'choices' => array(
				'light' => esc_html__( 'Light', '_themename' ),
				'dark'  => esc_html__( 'Dark', '_themename' ),
			),
			'section' => '_themename_footer_section',
		)
	);

}
/**
 * Footer backgroud clolr change.

 * @param string $input -Dropdown value.
 * if dropdown value will be not selected then it will be return defaul=('dark').
 * @return string
 */
function _themename_sanitize_footer_bg( $input ) {
	$valid = array( 'light', 'dark' );
	if ( in_array( $input, $valid, true ) ) {
		return $input;
	}
	return 'dark';
}



add_action( 'customize_register', '_themename_customize_register' );
