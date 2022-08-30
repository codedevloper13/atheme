<?php
/**
 * Theme Inline CSS
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
/**
 * Color customizer for change the ahref tag color.
 *
 * @return string
 */
function accent_color() {
	$accent_color = sanitize_hex_color( get_theme_mod( '_themename_accent_color', '#6ab04c' ) );

	$inline_style = "a{
        color: $accent_color
    }
    
    :focus{
        outline-color: $accent_color
    }
    .c-post.sticky{
       border-left-color: $accent_color
    }
    button, input[type='submit'] { 
        background-color:$accent_color
    }
    .header-nav .menu > .menu-item:not(.mega) .sub-menu .menu-item:hover > a {
        background: $accent_color;
    }
    .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > .sub-menu a:hover {
     color: $accent_color;
    }

    .header-nav .menu > .menu-item.mega > .sub-menu > .menu-item > a:hover {
    color: $accent_color;
    }
    ";
	return $inline_style;
}
