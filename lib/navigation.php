<?php
/**
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
 * Added fontawesome icon on menu items.
 * @ $title - menu item title.
 * @ $item - menu item object.
 * @ $args - menu item args.
 * @ $depth - menu item depth.
 */
function _themename_nav_menu_dropdown_icon( $title, $item, $args, $depth ) {
	if ( 'main-menu' === $args->theme_location ) {
		if ( in_array( 'menu-item-has-children', $item->classes, true ) ) {
			if ( 0 == $depth ) {
				$title .= '<i class="fa fa-angle-down" aria-hidden="true"></i>';
			} else {
				$title .= '<i class="fa fa-angle-right" aria-hidden="true"></i>';
			}
		}
	}
	return $title;

}

add_filter( 'nav_menu_item_title', '_themename_nav_menu_dropdown_icon', 10, 4 );


