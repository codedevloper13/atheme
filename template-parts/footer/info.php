<?php
/**
 * Declaring Footer info
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
$footer_bg        = 'dark';
$footer_site_info = get_theme_mod( '_themename_site_info' );
if ( ! empty( $footer_site_info ) ) { ?>
<div class  = "c-site-info c-site-info--<?php echo esc_html( $footer_bg ); ?>" >
<div class='o-container' >
	<div class= 'o-row' >
			<div class = 'o-row__column o-row_column--span-12  c-site-info__text' >
				<?php echo wp_kses_post( $footer_site_info ); ?>
			</div> 
		</div>
	</div>
</div>

<?php } ?>
