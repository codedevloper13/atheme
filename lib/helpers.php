<?php
/**
 * Theme basic Helper Functions
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;



/**
 * Function for read more link
 *
 * @return void
 */
function _themename_readmore_link() {

	echo '<a class="c-post__read-more" href="' . esc_url( get_permalink() ) . '" title="' . the_title_attribute( array( 'echo' => false ) ) . '">';

		printf(
			wp_kses(
					/* translators: %s: Post Title */
				__( 'Read More <span class="u-screen-reader-text">About %s</span>', '_themename' ),
				array( 'span' => array( 'class' => array() ) )
			),
			esc_url( get_the_title() )
		);

	echo '</a>';
}


/**
 * Function for get the post id
 *
 * @return integer
 */
function _themename_post_id() {
	return get_the_ID();
}


if ( ! function_exists( '_themename_link_pages' ) ) {
	/**
	 * Displays/retrieves page links for paginated posts (i.e. including the
	 * `<!--nextpage-->` Quicktag one or more times). This tag must be
	 * within The Loop. Default: echo.
	 *
	 * @return void|string Formatted output in HTML.
	 */
	function _themename_link_pages() {
		$args = apply_filters(
			'_themename_link_pages_args',
			array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'understrap' ),
				'after'  => '</div>',
			)
		);
		wp_link_pages( $args );
	}
}

/**
 * Function sanitize html flied.
 *
 * @param  string $value input value.
 * @return string
 */
function _themename_sanitize_html_field( $value ) {
	$allowed_html = array(
		'a' => array(
			'href'   => array(),
			'title'  => array(),
			'target' => array(),
		),
	);
	return wp_kses( $value, $allowed_html );
}

/**
 * Delete the post if the the user relation is author to post
 *
 * @return string
 */
function _themename_delete_post() {
	$url = add_query_arg(
		array(
			'action' => '_themename_delete_post',
			'post'   => get_the_ID(),
			'nonce'  => wp_create_nonce( '_themename_delete_post' . get_the_ID() ),
		),
		home_url()
	);
	if ( current_user_can( 'delete_post', get_the_ID() ) ) {
		return '<a href=' . esc_url( $url ) . '>' . esc_html__( 'Delete Post', '_themename' ) . '</a>';
	}

}
