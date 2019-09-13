<?php
/**
 * Functions used to register the scripts and stylesheets for
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
 * Returns the root path of the plugin.
 *
 * @since  1.0.0
 * @return string
 */
function mighty_blocks_dir_path() {
	return plugin_dir_path( dirname( __FILE__ ) );
}

/**
 * Returns a URL to a plugin file.
 *
 * @since  1.0.0
 * @param  string $path
 * @return string
 */
function mighty_blocks_url( $path = '' ) {
	return plugins_url( $path, dirname( __FILE__ ) );
}

/**
 * Returns a path to a plugin asset.
 *
 * @since  1.0.0
 * @param  string $asset
 * @return string
 */
function mighty_blocks_asset( $asset ) {
	$name      = pathinfo( $asset, PATHINFO_FILENAME );
	$extension = pathinfo( $asset, PATHINFO_EXTENSION );
	$suffix    = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

	return "/dist/${name}${suffix}.${extension}";
}

/**
 * Returns a version number for a plugin asset.
 *
 * @todo   Replace `filemtime` calls with a webpack-based manifest.
 * @since  1.0.0
 * @param  string $asset
 * @return integer
 */
function mighty_blocks_asset_version( $asset ) {
	$path = untrailingslashit( mighty_blocks_dir_path() ) . mighty_blocks_asset( $asset );

	if ( ! file_exists( $path ) ) {
		return 0;
	}

	return filemtime( $path );
}

/**
 * Enqueues the assets for the editor.
 *
 * @since  1.0.0
 * @return void
 */
function mighty_blocks_enqueue_editor_assets() {
	wp_enqueue_script(
		'mighty-blocks-editor',
		mighty_blocks_url( mighty_blocks_asset( 'editor.js' ) ),
		array(
			'wp-blocks',
			'wp-components',
			'wp-data',
			'wp-edit-post',
			'wp-editor',
			'wp-element',
			'wp-hooks',
			'wp-i18n',
			'wp-plugins',
		),
		mighty_blocks_asset_version( 'editor.js' ),
		true
	);

	wp_enqueue_style(
		'mighty-blocks-editor',
		mighty_blocks_url( mighty_blocks_asset( 'editor.css' ) ),
		array(),
		mighty_blocks_asset_version( 'editor.css' )
	);
}
add_action( 'enqueue_block_editor_assets', 'mighty_blocks_enqueue_editor_assets' );
