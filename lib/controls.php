<?php
/**
 * Functions used to apply the custom controls to core blocks.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueues the controls definitions.
 *
 * @since  1.0.0
 * @return void
 */
function mighty_blocks_enqueue_editor_controls() {
	foreach ( glob( mighty_blocks_dir_path() . 'lib/blocks/*.php' ) as $path ) {
		require_once $path;
	}

	$theme    = wp_get_theme()->get( 'TextDomain' );
	$controls = apply_filters( 'mighty_blocks_controls', array(), $theme );
	$controls = apply_filters( "mighty_blocks_controls_{$theme}", $controls );
	$controls = array_map(
		function( $block_controls ) {
			return array_values( $block_controls );
		},
		$controls
	);

	wp_localize_script( 'mighty-blocks-editor', 'mightyBlocks', array( 'controls' => $controls ) );
}
add_action( 'enqueue_block_editor_assets', 'mighty_blocks_enqueue_editor_controls' );
