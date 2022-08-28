<?php
/**
 * Declaring widgets
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$footer_layout  = get_theme_mod( '_themename_footer_layout', '3,3,3,3' );
$footer_layout  = preg_replace( '/\s+/', '', $footer_layout );
$footer_columns = explode( ',', $footer_layout );
$footer_bg      = get_theme_mod( '_themename_footer_bg', 'dark' );
$widgets_active = false;
foreach ( $footer_columns as $key => $column ) {
	if ( is_active_sidebar( 'footer-sidebar-' . ( $key + 1 ) ) ) {
		$widgets_active = true;
	}
}
if ( $widgets_active ) {?>
	<div class="c-footer c-footer--<?php echo esc_html( $footer_bg ); ?>">
		<div class="o-container">
			<div class="o-row">
					<?php foreach ( $footer_columns as $key => $column ) : ?>
					<div class ="o-row__column o-row_column--span-12 o-row__column--span-<?php echo esc_html( $column ); ?>@medium">
						<?php
						if ( is_active_sidebar( 'footer-sidebar-' . ( $key + 1 ) ) ) {
							dynamic_sidebar( 'footer-sidebar-' . ( $key + 1 ) );}
						?>
			</div> 
			<?php endforeach; ?>
		</div>
	</div>
	<?php
}
?>

</div>
