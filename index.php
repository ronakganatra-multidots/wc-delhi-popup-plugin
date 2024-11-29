<?php
/*
Plugin Name: WC Delhi Member Popup Plugin
Description: WC Delhi Demo Creates a popup with "Hello Member" heading
Version: 1.0
Author: Ronak
*/

if (!defined('ABSPATH')) {
	exit;
}

/*
* This plugin is made for the WC Delhi Workshop demo purpose hence not taken care of high standards. 
*/

//Enqueue assets and render popup
add_action('wp_enqueue_scripts', 'wc_delhi_enqueue_popup_assets');
add_action('wp_footer', 'wc_delhi_render_popup');

function wc_delhi_enqueue_popup_assets() {
    wp_enqueue_style('wc-delhi-member-popup-style', plugin_dir_url(__FILE__) . '/assets/frontend/css/popup-style.css', [], '1.0');
    wp_enqueue_script('wc-delhi-member-popup-script', plugin_dir_url(__FILE__) . '/assets/frontend/js/popup-script.js', ['jquery'], '1.0', true);
}

function wc_delhi_render_popup() {
	$popup_settings = get_option('wc_delhi_popup');
	if ($popup_settings['display']) {
    ?>
		<div id="wc-delhi-member-popup" class="popup-overlay">
			<div class="popup-content">
				<span class="popup-close">&times;</span>
				<h2><?php echo esc_html($popup_settings['title']); ?></h2>
				<p><?php echo esc_html($popup_settings['message']); ?></p>
			</div>
		</div>
    <?php
	}
}

/**
 * Registers the options page.
 */
function wc_delhi_popup_settings_page() {
	add_options_page(
		__( 'WCDelhi Popup Settings', 'wc-delhi' ),
		__( 'WCDelhi Popup Settings', 'wc-delhi' ),
		'manage_options',
		'wc-delhi-popup-settings',
		'wc_delhi_popup_settings_page_html'
	);
}
add_action( 'admin_menu', 'wc_delhi_popup_settings_page' );

/**
 * Outputs the root element for the main React component.
 */
function wc_delhi_popup_settings_page_html() {
	printf(
		'<div class="wrap" id="wc-delhi-popup-settings">%s</div>',
		esc_html__( 'Loading WCDelhi Popup...', 'wc-delhi' )
	);
}

/**
 * Enqueues the necessary styles and script only on the options page.
 */
function wc_delhi_popup_enqueue_assets( $admin_page ) {
	if ( 'settings_page_wc-delhi-popup-settings' !== $admin_page ) {
		return;
	}

	$asset_file = plugin_dir_path( __FILE__ ) . 'build/index.asset.php';

	if ( ! file_exists( $asset_file ) ) {
		return;
	}

	$asset = include $asset_file;

	wp_enqueue_script(
		'wc-delhi-popup',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset['dependencies'],
		$asset['version'],
		array( 'in_footer' => true )
	);

	wp_enqueue_style(
		'wc-delhi-popup-style',
		plugins_url( 'build/index.css', __FILE__ ),
		array_filter(
			$asset['dependencies'],
			function ( $style ) {
				return wp_style_is( $style, 'registered' );
			}
		),
		$asset['version']
	);
}
add_action( 'admin_enqueue_scripts', 'wc_delhi_popup_enqueue_assets' );

/**
 * Registers the setting and defines its type and default value.
 */
function wc_delhi_popup_settings() {
	$default = array(
		'display' => true,
		'title'          => __( 'Hello WordCamp Delhi', 'wc-delhi' ),
		'message'        => __( 'Welcome to WordCamp Delhi 2024 popup.', 'wc-delhi' ),
		'size'		=> 'small',
		// 'background_color'    => '#f0f0f0',
	);

	$schema = array(
		'type'       => 'object',
		'properties' => array(
			'display' => array( 'type' => 'boolean' ),
			'title'          => array( 'type' => 'string' ),
			'message'        => array( 'type' => 'string' ),
			// 'background_color'    => array( 'type' => 'string' ),
			'size'    => array( 'type' => 'string' ),
		),
	);

	register_setting(
		'options',
		'wc_delhi_popup',
		array(
			'type'         => 'object',
			'default'      => $default,
			'show_in_rest' => array( 'schema' => $schema ),
		)
	);
}
add_action( 'init', 'wc_delhi_popup_settings' );