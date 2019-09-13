<?php
/**
 * Functions used to extend the `core/video` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/video` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_video_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/video' => array(
				'margin'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => '.wp-block-video',
						'frontend' => '&',
					),
				),
				'border'        => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => '.wp-block-video',
						'frontend' => '&',
					),
				),
				'border-radius' => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => '.wp-block-video, .wp-block-video video',
						'frontend' => '&, video',
					),
				),
				'box-shadow'    => array(
					'type'     => 'box-shadow',
					'selector' => array(
						'editor'   => '.wp-block-video',
						'frontend' => '&',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_video_controls' );

/**
 * Modify the controls of the `core/video` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_video_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/video' => array(
				'margin' => array(
					'selector' => array(
						'frontend' => '.entry .entry-content &',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_video_controls_in_twentynineteen' );
