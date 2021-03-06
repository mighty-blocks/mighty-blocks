<?php
/**
 * Functions used to extend the `core/heading` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/heading` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_heading_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/heading' => array(
				'padding'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'padding',
					),
					'selector' => array(
						'editor'   => '.wp-block-heading',
						'frontend' => '&',
					),
				),
				'margin'         => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => '.wp-block-heading',
						'frontend' => '&',
					),
				),
				'background'     => array(
					'type'     => 'background',
					'selector' => array(
						'editor'   => '.wp-block-heading',
						'frontend' => '&',
					),
				),
				'font-family'    => array(
					'type'     => 'font-family',
					'selector' => array(
						'editor'   => '.wp-block-heading .rich-text',
						'frontend' => '&',
					),
				),
				'font-family'    => array(
					'type'     => 'font-family',
					'selector' => array(
						'editor'   => '.wp-block-heading .rich-text',
						'frontend' => '&',
					),
				),
				'font-weight'    => array(
					'type'     => 'font-weight',
					'selector' => array(
						'editor'   => '.wp-block-heading .rich-text',
						'frontend' => '&',
					),
				),
				'line-height'    => array(
					'type'     => 'line-height',
					'selector' => array(
						'editor'   => '.wp-block-heading .rich-text',
						'frontend' => '&',
					),
				),
				'letter-spacing' => array(
					'type'     => 'letter-spacing',
					'selector' => array(
						'editor'   => '.wp-block-heading .rich-text',
						'frontend' => '&',
					),
				),
				'text-transform' => array(
					'type'     => 'text-transform',
					'selector' => array(
						'editor'   => '.wp-block-heading .rich-text',
						'frontend' => '&',
					),
				),
				'text-shadow'    => array(
					'type'     => 'text-shadow',
					'selector' => array(
						'editor'   => '.wp-block-heading .rich-text',
						'frontend' => '&',
					),
				),
				'box-shadow'     => array(
					'type'     => 'box-shadow',
					'selector' => array(
						'editor'   => '.wp-block-heading .rich-text',
						'frontend' => '&',
					),
				),
				'border'         => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => '.wp-block-heading',
						'frontend' => '&',
					),
				),
				'border-radius'  => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => '.wp-block-heading',
						'frontend' => '&',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_heading_controls' );

/**
 * Modify the controls of the `core/heading` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_heading_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/heading' => array(
				'margin' => array(
					'selector' => array(
						'frontend' => '.entry &',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_heading_controls_in_twentynineteen' );
