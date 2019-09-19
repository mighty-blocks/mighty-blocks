<?php
/**
 * Functions used to load the language files for
 * the Mighty Blocks plugin.
 *
 * @package Mighty_Blocks
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Loads the plugin language files.
 *
 * @since  1.0.0
 * @return void
 */
function mighty_blocks_load_textdomain() {
	wp_set_script_translations(
		'mighty-blocks-editor',
		'mighty-blocks',
		plugin_dir_path( dirname( __FILE__ ) ) . 'languages'
	);

	load_plugin_textdomain(
		'mighty-blocks',
		false,
		dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
	);
}
add_action( 'init', 'mighty_blocks_load_textdomain' );
