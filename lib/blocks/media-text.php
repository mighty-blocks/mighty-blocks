<?php
/**
 * Functions used to extend the `core/media-text` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/media-text` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_media_text_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/media-text' => array(
				'padding'       => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'padding',
					),
					'selector' => array(
						'editor'   => '.wp-block-media-text',
						'frontend' => '&',
					),
				),
				'margin'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => '.wp-block-media-text',
						'frontend' => '&',
					),
				),
				'background'    => array(
					'type'     => 'background',
					'selector' => array(
						'editor'   => '.wp-block-media-text',
						'frontend' => '&',
					),
				),
				'border'        => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => '.wp-block-media-text',
						'frontend' => '&',
					),
				),
				'border-radius' => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => '.wp-block-media-text',
						'frontend' => '&',
					),
				),
				'box-shadow'    => array(
					'type'     => 'box-shadow',
					'selector' => array(
						'editor'   => '.wp-block-media-text',
						'frontend' => '&',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_media_text_controls' );

/**
 * Modify the controls of the `core/media-text` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_media_text_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/media-text' => array(
				'padding' => array(
					'selector' => array(
						'frontend' => '.entry .entry-content &',
					),
				),
				'margin'  => array(
					'selector' => array(
						'frontend' => '.entry .entry-content &',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_media_text_controls_in_twentynineteen' );
