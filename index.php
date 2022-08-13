<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

get_header(); ?>

<div class="o-container u-margin-bottom-40">
	<div class="o-row">
		<div class="o-row__column o-row__column--span-12  o-row__column--span-<?php echo is_active_sidebar( 'primary-sidebar' ) ? '8' : '12'; ?>@medium">
			<main role="main">
				<?php
				if ( have_posts() ) {
					while ( have_posts() ) {
						the_post();

						/*
						 * Include the Post-Format-specific template for the content.
						 * If you want to override this in a child theme, then include a file
						 * called content-___.php (where ___ is the Post Format name) and that will be used instead.
						 */
						get_template_part( 'loop-templates/content', get_post_format() );
					}
					the_posts_pagination();

				} else {
					get_template_part( 'loop-templates/content', 'none' );
				}
				?>
			</main>
		</div>
		<?php
		if ( is_active_sidebar( 'primary-sidebar' ) ) {
			?>
			<div class="o-row__column o-row__column--span-12  o-row__column--span-4@medium">
				<!-- Load sidebar template -->
				<?php get_sidebar(); ?>
			</div>
		<?php } ?>
	</div>
</div>
<?php get_footer(); ?>
