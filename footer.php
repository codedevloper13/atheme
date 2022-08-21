<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Understrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit; ?>
<?php get_template_part( 'template-parts/footer/widgets' ); ?>
<?php get_template_part( 'template-parts/footer/info' ); ?>
<?php wp_footer(); ?>
</body>
</html>
