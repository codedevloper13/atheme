<?php
/**
 * The template for displaying search forms
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

?>

<form role="search" method="get" class="c-search-form" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<label class="c-search-form__label">
		<span class="screen-reader-text"><?php echo esc_html_x( 'Search for:', 'label', '_themename' ); ?></span>
		<input type="search" class="c-search-form__field" placeholder="<?php echo esc_attr_x( 'Search &hellip;', 'placeholder', '_themename' ); ?>" value="<?php echo get_search_query(); ?>" name="s" />
	</label>
	<button type="submit" class="c-search-form__button"><span class="u-screen-reader-text"><?php echo esc_html_x( 'Search', 'submit button', '_themename' ); ?></span><i class="fa-solid fa-magnifying-glass"></i></button>
</form>
