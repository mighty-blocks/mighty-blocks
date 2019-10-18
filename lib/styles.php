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
 * Get the styles of the block.
 *
 * @since  2.0.0
 * @param  array $block
 * @return string
 */
function mighty_blocks_get_block_styles( $block ) {
	if ( ! is_array( $block ) ) {
		return '';
	}

	if ( ! is_array( $block['attrs'] ) ) {
		$block['attrs'] = array();
	}

	$inner_blocks = mighty_blocks_is_reusable_block( $block )
		? mighty_blocks_parse_reusable_block( $block )
		: $block['innerBlocks'];

	$styles = array_reduce(
		$inner_blocks,
		function( $styles, $inner_block ) {
			return $styles . "\n" . mighty_blocks_get_block_styles( $inner_block );
		},
		''
	);

	if ( isset( $block['attrs']['mightyBlocksStyles'] ) ) {
		$styles = $styles . "\n" . $block['attrs']['mightyBlocksStyles'];
	}

	return $styles;
}

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

	$blocks = parse_blocks( get_post_field( 'post_content', $post_id ) );
	$styles = array_reduce(
		$blocks,
		function( $styles, $block ) {
			return $styles . "\n" . mighty_blocks_get_block_styles( $block );
		},
		''
	);

	if ( empty( $styles ) ) {
		return;
	}

	// phpcs:ignore WordPress.WP.EnqueuedResourceParameters.MissingVersion
	wp_register_style( 'mighty-blocks-styles', false );
	wp_enqueue_style( 'mighty-blocks-styles' );
	wp_add_inline_style( 'mighty-blocks-styles', wp_strip_all_tags( $styles ) );
}
add_action( 'wp_enqueue_scripts', 'mighty_blocks_enqueue_styles', 9999 );
