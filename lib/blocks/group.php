<?php
/**
 * Functions used to extend the `core/group` block.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Adds the controls to the `core/group` block.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_add_group_controls( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/group' => array(
				'padding'       => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'padding',
					),
					'selector' => array(
						'editor'   => '.wp-block-group',
						'frontend' => '&',
					),
				),
				'margin'        => array(
					'type'     => 'spacing',
					'params'   => array(
						'prefix' => 'margin',
					),
					'selector' => array(
						'editor'   => '.wp-block-group',
						'frontend' => '&',
					),
				),
				'background'    => array(
					'type'     => 'background',
					'selector' => array(
						'editor'   => '.wp-block-group',
						'frontend' => '&',
					),
				),
				'border'        => array(
					'type'     => 'border',
					'selector' => array(
						'editor'   => '.wp-block-group',
						'frontend' => '&',
					),
				),
				'border-radius' => array(
					'type'     => 'border-radius',
					'selector' => array(
						'editor'   => '.wp-block-group',
						'frontend' => '&',
					),
				),
				'box-shadow'    => array(
					'type'     => 'box-shadow',
					'selector' => array(
						'editor'   => '.wp-block-group',
						'frontend' => '&',
					),
				),
			),
		)
	);
}
add_filter( 'mighty_blocks_controls', 'mighty_blocks_add_group_controls' );

/**
 * Modify the controls of the `core/group` block in "Twenty Nineteen" theme.
 *
 * @since  1.0.0
 * @param  array $controls
 * @return array
 */
function mighty_blocks_modify_group_controls_in_twentynineteen( $controls ) {
	return array_replace_recursive(
		$controls,
		array(
			'core/group' => array(
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
add_filter( 'mighty_blocks_controls_twentynineteen', 'mighty_blocks_modify_group_controls_in_twentynineteen' );
