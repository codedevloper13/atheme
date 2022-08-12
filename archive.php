<?php
/**
 * The template for displaying archive pages
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Atheme
 */

// Exit if accessed directly.

defined( 'ABSPATH' ) || exit;
get_header();
?>
<div class="o-container u-margin-bottom-40">
	<div class="o-row">
		<div class="o-row__column o-row__column--span-12  o-row__column--span-<?php echo is_active_sidebar( 'primary-sidebar' ) ? '8' : '12'; ?>@medium">
			<main role="main">
				<?php
				if ( have_posts() ) {
					?>
					<header class="page-header">
						<?php
						the_archive_title( '<h1 class="page-title">', '</h1>' );
						the_archive_description( '<div class="taxonomy-description">', '</div>' );
						?>
					</header><!-- .page-header -->
					<?php

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
