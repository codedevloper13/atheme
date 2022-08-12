<?php
/**
 * The template part for displaying a message that posts cannot be found
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package Atheme
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

echo esc_html( apply_filters( '_themename_no_post_text', esc_html__( 'Sorry, no posts matched yours criteria', '_themename' ) ) );
