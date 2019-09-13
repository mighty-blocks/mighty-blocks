<?php
/**
 * Functions used to extend the `core/paragraph` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/paragraph` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_paragraph_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/paragraph' => array(
				'padding'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'padding',
					),
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
				'margin'         => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
				'background'     => array(
					'type'     => 'background',
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
				'font-family'    => array(
					'type'     => 'font-family',
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
				'font-weight'    => array(
					'type'     => 'font-weight',
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
				'line-height'    => array(
					'type'     => 'line-height',
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
				'letter-spacing' => array(
					'type'     => 'letter-spacing',
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
				'text-transform' => array(
					'type'     => 'text-transform',
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
				'text-shadow'    => array(
					'type'     => 'text-shadow',
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
				'box-shadow'     => array(
					'type'     => 'box-shadow',
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
				'border'         => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
				'border-radius'  => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => '.wp-block-paragraph',
						'frontend' => '&',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_paragraph_controls' );

/**
 * Modify the controls of the `core/paragraph` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_paragraph_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/paragraph' => array(
				'margin'      => array(
					'selector' => array(
						'frontend' => '.entry &',
					),
				),
				'line-height' => array(
					'selector' => array(
						'editor' => '.edit-post-visual-editor & [data-block] .wp-block-paragraph',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_paragraph_controls_in_twentynineteen' );
