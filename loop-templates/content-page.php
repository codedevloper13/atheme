<?php
/**
 * Partial template for content in page.php
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

?>
<article <?php post_class( 'c-post u-margin-bottom-20 sticky' ); ?> id="post-<?php the_ID(); ?>">
	<header class="entry-header">
		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
	</header>
		<?php echo get_the_post_thumbnail( $post->ID, 'large' ); ?>
		<div>
			<div class="entry-content">
				<?php
				the_content();
				_themename_link_pages();
				?>
			</div>
		</div>
</article>
