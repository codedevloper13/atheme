<?php



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
