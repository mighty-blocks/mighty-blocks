<?php
/**
 * Functions used to extend the `core/list` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/list` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_list_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/list' => array(
				'padding'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'padding',
					),
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'margin'         => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'background'     => array(
					'type'     => 'background',
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'font-family'    => array(
					'type'     => 'font-family',
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'font-weight'    => array(
					'type'     => 'font-weight',
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'line-height'    => array(
					'type'     => 'line-height',
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'letter-spacing' => array(
					'type'     => 'letter-spacing',
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'text-transform' => array(
					'type'     => 'text-transform',
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'text-shadow'    => array(
					'type'     => 'text-shadow',
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'box-shadow'     => array(
					'type'     => 'box-shadow',
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'border'         => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
				'border-radius'  => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => 'ul',
						'frontend' => '&',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_list_controls' );

/**
 * Modify the controls of the `core/list` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_list_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/list' => array(
				'padding'     => array(
					'selector' => array(
						'editor' => '& [data-block] ul',
					),
				),
				'margin'      => array(
					'selector' => array(
						'editor'   => '& [data-block] ul',
						'frontend' => '.entry &',
					),
				),
				'line-height' => array(
					'selector' => array(
						'editor'   => '[data-block] ul',
						'frontend' => 'li',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_list_controls_in_twentynineteen' );
