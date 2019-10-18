<?php
/**
 * Functions used to manipulate the blocks.
 *
 * @package Mighty_Blocks
 * @since   2.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Whether the block is a reusable block.
 *
 * @since  2.0.0
 * @param  array $block
 * @return boolean
 */
function mighty_blocks_is_reusable_block( $block ) {
	if ( ! is_array( $block ) || ! isset( $block['blockName'] ) ) {
		return false;
	}

	return 'core/block' === $block['blockName'];
}

/**
 * Parse the reusable block.
 *
 * This function is copy of `core/block` render callback with slight modifications.
 *
 * @see    https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/block/index.php#L8-L30
 * @since  2.0.0
 * @param  array $block
 * @return array
 */
function mighty_blocks_parse_reusable_block( $block ) {
	$attributes = $block['attrs'];

	if ( ! isset( $attributes['ref'] ) || empty( $attributes['ref'] ) ) {
		return array();
	}

	$reusable_block = get_post( $attributes['ref'] );

	if ( ! $reusable_block || 'wp_block' !== $reusable_block->post_type ) {
		return array();
	}

	if ( 'publish' !== $reusable_block->post_status || ! empty( $reusable_block->post_password ) ) {
		return array();
	}

	return parse_blocks( $reusable_block->post_content );
}
