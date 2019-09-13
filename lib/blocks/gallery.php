<?php
/**
 * Functions used to extend the `core/gallery` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/gallery` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_gallery_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/gallery' => array(
				'padding'       => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'padding',
					),
					'selector' => array(
						'editor'   => 'ul.wp-block-gallery',
						'frontend' => '&',
					),
				),
				'margin'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => 'ul.wp-block-gallery',
						'frontend' => '&',
					),
				),
				'background'    => array(
					'type'     => 'background',
					'selector' => array(
						'editor'   => 'ul.wp-block-gallery',
						'frontend' => '&',
					),
				),
				'border'        => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => 'ul.wp-block-gallery',
						'frontend' => '&',
					),
				),
				'border-radius' => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => 'ul.wp-block-gallery',
						'frontend' => '&',
					),
				),
				'box-shadow'    => array(
					'type'     => 'box-shadow',
					'selector' => array(
						'editor'   => 'ul.wp-block-gallery',
						'frontend' => '&',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_gallery_controls' );

/**
 * Modify the controls of the `core/gallery` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_gallery_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/gallery' => array(
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
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_gallery_controls_in_twentynineteen' );
