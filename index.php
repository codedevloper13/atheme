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

<?php
if ( have_posts() ) {
	while ( have_posts() ) {
		the_post();
		?>
	<h2>
		<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>"><?php the_title(); ?>
		</a>
	</h2>
	<div>
		Posted On
		<a href="<?php esc_url( get_permalink() ); ?>">
		<time datetime="<?php echo get_the_date( 'c' ); ?>">
		<?php echo get_the_date( 'l , F ,j ,Y' ); ?>
		</time>
		</a>
		By <a href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>">
		<?php echo get_the_author(); ?></a>
	</div>
	<div>
		<?php the_excerpt(); ?>
		<a href="<?php echo esc_url( get_the_permalink() ); ?>" title="<?php the_title_attribute(); ?>">
		Read More
		<span class="u-screen-reader-text">About<?php the_title(); ?></span></a>
	</div>
		<?php
	}
	the_posts_pagination();

} else {
	echo esc_html( apply_filters( '_themename_no_post_text', esc_html__( 'Sorry, no posts matched yours criteria', '_themename' ) ) );
}


?>


<?php get_footer(); ?>
