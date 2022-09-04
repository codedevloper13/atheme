<?php
/**
 * Metaboxes for themes.
 *
 * @package Understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

/**
 * Create Metabox in post page.
 */
function _themename_add_metabox() {
	add_meta_box(
		'_themename_post_metabox',
		'Post Setting',
		'_themename_post_metabox_html',
		'post',
		'normal',
		'default'
	);
}

add_action( 'add_meta_boxes', '_themename_add_metabox' );

/**
 * Metabox input flied callback function.
 */
function _themename_post_metabox_html( $post ) {
	$subtitle = get_post_meta( $post->ID, '__themename_post_subtitle', true );
	echo '
    <p>
      <label for=""><b>' . esc_html_e( 'Post Subtitle', '_themename' ) . '</b></label>
        <input class="widefat" type="text" name="_themename_post_subtitle_filed" id="_themename_post_metabox_html" value="' . esc_attr( $subtitle ) . '">
    </p>
    ';
}


/**
 * Metabox value store in the DB in postmeta table.
 */
function _themename_save_post_metabox( $post_id, $post ) {
	if ( array_key_exists( '_themename_post_subtitle_filed', $_POST ) ) {
		update_post_meta( $post_id, '__themename_post_subtitle', $_POST['_themename_post_subtitle_filed'] );
	}
}

add_action( 'save_post', '_themename_save_post_metabox', 10, 2 );
