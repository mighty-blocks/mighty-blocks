<?php
/**
 * Functions used to extend the `core/pullquote` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/pullquote` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_pullquote_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/pullquote' => array(
				'padding'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'padding',
					),
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'margin'         => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'background'     => array(
					'type'     => 'background',
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'font-size'      => array(
					'type'     => 'font-size',
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'font-family'    => array(
					'type'     => 'font-family',
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'font-weight'    => array(
					'type'     => 'font-weight',
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'line-height'    => array(
					'type'     => 'line-height',
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'letter-spacing' => array(
					'type'     => 'letter-spacing',
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'text-transform' => array(
					'type'     => 'text-transform',
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'text-shadow'    => array(
					'type'     => 'text-shadow',
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'box-shadow'     => array(
					'type'     => 'box-shadow',
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'border'         => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
				'border-radius'  => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => '.wp-block-pullquote',
						'frontend' => '&',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_pullquote_controls' );

/**
 * Modify the controls of the `core/pullquote` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_pullquote_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/pullquote' => array(
				'padding'     => array(
					'selector' => array(
						'frontend' => '.entry .entry-content &',
					),
				),
				'margin'      => array(
					'selector' => array(
						'frontend' => '.entry &',
					),
				),
				'border'      => array(
					'selector' => array(
						'editor'   => '& [data-block] .wp-block-pullquote',
						'frontend' => '.entry .entry-content &',
					),
				),
				'font-size'   => array(
					'selector' => array(
						'frontend' => '.entry .entry-content &',
					),
				),
				'font-family' => array(
					'selector' => array(
						'frontend' => '.entry .entry-content &',
					),
				),
				'line-height' => array(
					'selector' => array(
						'frontend' => '.entry .entry-content &',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_pullquote_controls_in_twentynineteen' );
