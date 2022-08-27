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
<footer id="footer" role="contentinfo">
	<?php get_template_part( 'template-parts/footer/widgets' ); ?>
	<?php get_template_part( 'template-parts/footer/info' ); ?>
</footer>
<?php wp_footer(); ?>
</body>
</html>
