<?php
/**
 * Functions used to extend the `core/cover` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/cover` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_cover_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/cover' => array(
				'padding'       => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'padding',
					),
					'selector' => array(
						'editor'   => '.wp-block-cover',
						'frontend' => '&',
					),
				),
				'margin'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => '.wp-block-cover',
						'frontend' => '&',
					),
				),
				'box-shadow'    => array(
					'type'     => '.wp-block-cover',
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'border'        => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => '.wp-block-cover',
						'frontend' => '&',
					),
				),
				'border-radius' => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => '.wp-block-cover',
						'frontend' => '&',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_cover_controls' );

/**
 * Modify the controls of the `core/cover` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_cover_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/cover' => array(
				'padding' => array(
					'selector' => array(
						'frontend' => '.entry .entry-content &',
					),
				),
				'margin'  => array(
					'selector' => array(
						'frontend' => '.entry &',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_cover_controls_in_twentynineteen' );
