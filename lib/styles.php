<?php
/**
 * Functions used to register and load the generated block styles.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Returns whether the user have enough capabilities
 * to edit the styles.
 *
 * @since  1.0.0
 * @return boolean
 */
function mighty_blocks_styles_meta_auth() {
	return current_user_can( 'edit_posts' );
}

/**
 * Registers the meta used to store the generated block styles.
 *
 * @since  1.0.0
 * @return void
 */
function mighty_blocks_register_styles_meta() {
	register_post_meta(
		'',
		'_mighty_blocks_styles',
		array(
			'single'        => true,
			'show_in_rest'  => true,
			'auth_callback' => 'mighty_blocks_styles_meta_auth',
		)
	);
}
add_filter( 'init', 'mighty_blocks_register_styles_meta' );

/**
 * Enqueues the generated block styles as inline style.
 *
 * @since  1.0.0
 * @return void
 */
function mighty_blocks_enqueue_styles() {
	$post_id = get_the_ID();

	if ( ! $post_id ) {
		return;
	}

	$post_styles = get_post_meta( $post_id, '_mighty_blocks_styles', true );

	if ( empty( $post_styles ) ) {
		return;
	}

	// phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion
	wp_register_style( 'mighty-blocks-styles', false );
	wp_enqueue_style( 'mighty-blocks-styles' );
	wp_add_inline_style( 'mighty-blocks-styles', wp_strip_all_tags( $post_styles ) );
}
add_action( 'wp_enqueue_scripts', 'mighty_blocks_enqueue_styles', 9999 );
