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
