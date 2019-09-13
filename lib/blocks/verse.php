<?php
/**
 * Functions used to extend the `core/verse` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/verse` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_verse_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/verse' => array(
				'padding'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'padding',
					),
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'margin'         => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'background'     => array(
					'type'     => 'background',
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'font-size'      => array(
					'type'     => 'font-size',
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'font-family'    => array(
					'type'     => 'font-family',
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'font-weight'    => array(
					'type'     => 'font-weight',
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'line-height'    => array(
					'type'     => 'line-height',
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'letter-spacing' => array(
					'type'     => 'letter-spacing',
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'text-transform' => array(
					'type'     => 'text-transform',
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'text-shadow'    => array(
					'type'     => 'text-shadow',
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'box-shadow'     => array(
					'type'     => 'box-shadow',
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'border'         => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
				'border-radius'  => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => '.wp-block-verse',
						'frontend' => '&',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_verse_controls' );

/**
 * Modify the controls of the `core/verse` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_verse_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/verse' => array(
				'padding'     => array(
					'selector' => array(
						'editor' => '[data-block] .wp-block-verse',
					),
				),
				'margin'      => array(
					'selector' => array(
						'frontend' => '.entry &',
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
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_verse_controls_in_twentynineteen' );
