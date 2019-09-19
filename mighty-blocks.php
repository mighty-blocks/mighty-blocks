<?php
/**
 * Plugin Name: Mighty Blocks
 * Plugin URI:  https://mightyblocks.com/
 * Description: Gutenberg on Steroids.
 * Version:     1.0.0
 * Author:      mightyblocks
 * Author URI:  https://mightyblocks.com
 * Text Domain: mighty-blocks
 *
 * @package Mighty_Blocks
 * @author  Mighty Blocks
 * @link    https://mightyblocks.com
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Initialize the plugin.
require_once 'lib/assets.php';
require_once 'lib/styles.php';
require_once 'lib/controls.php';
require_once 'lib/i18n.php';
