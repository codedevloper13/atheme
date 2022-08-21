<?php
/**
 *
 * Theme Navigation setup
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;


/**
 * Register a Nav menu.
 */
function _themename_register_nav_menus() {
	register_nav_menus(
		array(
			'main-menu'   => esc_html__( 'Main Menu', '_themename' ),
			'footer-menu' => esc_html__( 'Footer Menu', '_themename' ),
		)
	);
}
add_action( 'init', '_themename_register_nav_menus' );


/**
 * Add a area flied to dropdowns.
 *
 * @since 1.0.0
 * @param string $atts - menu item links attributes.
 * @param object $item - menu item object.
 * @param object $args - menu item args.
 * @return string
 */
function _themename_area_hasdropdown( $atts, $item, $args ) {
	if ( 'main-menu' === $args->theme_location ) {
		if ( in_array( 'menu-item-has-children', $item->classes, true ) ) {
			$atts['aria-haspopup'] = 'true';
			$atts['aria-expand']   = 'false';
		}
	}
	return $atts;
}

add_filter( 'nav_menu_link_attributes', '_themename_area_hasdropdown', 10, 3 );

/**
 * Register a button.
 *
 * @param string $dir The Arrow Direction.
 * @param string $title Menu title name.
 * @return string
 */
function _themename_submenu_button( $dir = 'down', $title ) {
	$button = '<button class="menu-button">';
	/* translators: %s: Menu Title show */
	$button .= '<span class="u-screen-reader-text menu-button-show">' . sprintf( esc_html__( 'Show %s submenu', '_themename' ), $title ) . '</span>';
	/* translators: %s: Menu Title Hide */
	$button .= '<span aria-hidden="true" class="u-screen-reader-text menu-button-hide">' . sprintf( esc_html__( 'Hide %s submenu', '_themename' ), $title ) . '</span>';
	$button .= '<i class="fa fa-angle-' . $dir . '" aria-hidden="true"></i>';
	$button .= '</button>';
	return $button;
}


/**
 * Added fontawesome icon on menu items.
 *
 * @param string $title - menu item title.
 * @param string $item - menu item object.
 * @param string $args - menu item args.
 * @param string $depth - menu item depth.
 * @return string
 */
function _themename_nav_menu_dropdown_icon( $title, $item, $args, $depth ) {
	if ( 'main-menu' === $args->theme_location ) {
		if ( in_array( 'menu-item-has-children', $item->classes, true ) ) {
			if ( 0 === $depth ) {
				$title .= _themename_submenu_button( 'down', $title );
			} else {
				$title .= _themename_submenu_button( 'right', $title );
			}
		}
	}
	return $title;

}

add_filter( 'nav_menu_item_title', '_themename_nav_menu_dropdown_icon', 10, 4 );
