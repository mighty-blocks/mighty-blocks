<?php
/**
 * Functions used to extend the `core/button` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/button` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_button_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/button' => array(
				'padding'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'padding',
					),
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'margin'         => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'background'     => array(
					'type'     => 'background',
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'font-size'      => array(
					'type'     => 'font-size',
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'font-family'    => array(
					'type'     => 'font-family',
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'font-weight'    => array(
					'type'     => 'font-weight',
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'line-height'    => array(
					'type'     => 'line-height',
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'letter-spacing' => array(
					'type'     => 'letter-spacing',
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'text-transform' => array(
					'type'     => 'text-transform',
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'text-shadow'    => array(
					'type'     => 'text-shadow',
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'box-shadow'     => array(
					'type'     => 'box-shadow',
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'border'         => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
				'border-radius'  => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => '.wp-block-button__link',
						'frontend' => '.wp-block-button__link',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_button_controls' );

/**
 * Modify the controls of the `core/button` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_button_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/button' => array(
				'background'    => array(
					'selector' => array(
						'editor' => '.block-editor .editor-styles-wrapper & .wp-block-button .wp-block-button__link',
					),
				),
				'border'        => array(
					'selector' => array(
						'frontend' => '.entry .entry-content & .wp-block-button__link',
					),
				),
				'font-size'     => array(
					'selector' => array(
						'editor'   => '.editor-styles-wrapper & [data-block] .wp-block-button__link',
						'frontend' => '.entry .entry-content & .wp-block-button__link',
					),
				),
				'font-family'   => array(
					'selector' => array(
						'editor'   => '.editor-styles-wrapper & [data-block] .wp-block-button__link',
						'frontend' => '.entry .entry-content & .wp-block-button__link',
					),
				),
				'font-weight'   => array(
					'selector' => array(
						'editor'   => '.editor-styles-wrapper & [data-block] .wp-block-button__link',
						'frontend' => '.entry .entry-content & .wp-block-button__link',
					),
				),
				'line-height'   => array(
					'selector' => array(
						'editor'   => '.editor-styles-wrapper & [data-block] .wp-block-button__link',
						'frontend' => '.entry .entry-content & .wp-block-button__link',
					),
				),
				'border-radius' => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => '.editor-styles-wrapper && [data-block] .wp-block-button__link',
						'frontend' => '.entry .entry-content && .wp-block-button__link',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_button_controls_in_twentynineteen' );
