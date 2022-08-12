<?php
/**
 * Post rendering content according to caller of get_template_part
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>
<article <?php post_class( 'c-post u-margin-bottom-2' ); ?>>
		<h2>
			<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a>
		</h2>
		<div> Posted On
			<a href="<?php esc_url( get_permalink() ); ?>">
			<time datetime="<?php echo get_the_date( 'c' ); ?>"><?php echo get_the_date( 'l , F ,j ,Y' ); ?></time></a>
			By <a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
			<?php echo get_the_author(); ?></a>
		</div> 
		<div>
			<?php the_excerpt(); ?>
			<?php _themename_readmore_link(); ?>
		</div>
</article>
<?php
