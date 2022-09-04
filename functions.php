<?php
/**
 * UnderStrap functions and definitions
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
require_once 'lib/inline-css.php';
require_once 'lib/customize.php';
require_once 'lib/helpers.php';
require_once 'lib/enqueue-assets.php';
require_once 'lib/sidebars.php';
require_once 'lib/theme-setup.php';
require_once 'lib/class-wp-bootstrap-navwalker.php';
require_once 'lib/navigation.php';
require_once 'lib/metaboxes.php';

/**
 * Delete the post  action handler.
 *
 * @return true
 */
function _themename_handle_delete_post() {
	if ( isset( $_GET['action'] ) && '_themename_delete_post' === $_GET['action'] ) {
		if ( ! isset( $_GET['nonce'] ) || ! wp_verify_nonce( sanitize_text_field( wp_unslash( $_GET['nonce'] ) ), '_themename_delete_post' . ! isset( $_GET['post'] ) ) ) {
			return;
		}
		$post_ids = isset( $_GET['post'] ) ? sanitize_text_field( wp_unslash( $_GET['post'] ) ) : null;
		$postss   = get_post( (int) $post_ids );
		// Check if empty return null.
		if ( empty( $postss ) ) {
			return;
		}

		if ( ! current_user_can( 'delete_post', $post_ids ) ) {
			return;
		}
		wp_trash_post( $post_ids );
		wp_safe_redirect( home_url() );
		die;
	}
}
add_action( 'init', '_themename_handle_delete_post' );
