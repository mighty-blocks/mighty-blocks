<?php
/**
 * Functions used to extend the `core/preformatted` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/preformatted` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_preformatted_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/preformatted' => array(
				'padding'       => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'padding',
					),
					'selector' => array(
						'editor'   => '.wp-block-preformatted',
						'frontend' => '&',
					),
				),
				'margin'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => '.wp-block-preformatted',
						'frontend' => '&',
					),
				),
				'background'    => array(
					'type'     => 'background',
					'selector' => array(
						'editor'   => '.wp-block-preformatted',
						'frontend' => '&',
					),
				),
				'font-size'     => array(
					'type'     => 'font-size',
					'selector' => array(
						'editor'   => '.wp-block-preformatted pre',
						'frontend' => '&',
					),
				),
				'font-family'   => array(
					'type'     => 'font-family',
					'selector' => array(
						'editor'   => '.wp-block-preformatted pre',
						'frontend' => '&',
					),
				),
				'line-height'   => array(
					'type'     => 'line-height',
					'selector' => array(
						'editor'   => '.wp-block-preformatted pre',
						'frontend' => '&',
					),
				),
				'box-shadow'    => array(
					'type'     => 'box-shadow',
					'selector' => array(
						'editor'   => '.wp-block-preformatted',
						'frontend' => '&',
					),
				),
				'border'        => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => '.wp-block-preformatted',
						'frontend' => '&',
					),
				),
				'border-radius' => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => '.wp-block-preformatted',
						'frontend' => '&',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_preformatted_controls' );

/**
 * Modify the controls of the `core/preformatted` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_preformatted_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/preformatted' => array(
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
						'editor'   => '& [data-block] .wp-block-preformatted',
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
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_preformatted_controls_in_twentynineteen' );
