<?php
/**
 * Plugin Name: Baridi-Mob Payment Gateway for WooCommerce
 * Description: Allows customers to pay using Baridi-Mob on your WooCommerce store.
 * Version: 1.0
 * Author: islam
 */

if (!defined('ABSPATH')) exit; // Exit if accessed directly

add_action('plugins_loaded', 'init_baridi_mob_gateway');

function init_baridi_mob_gateway() {
    if (!class_exists('WC_Payment_Gateway')) return;

    class WC_Baridi_Mob_Gateway extends WC_Payment_Gateway {
        public function __construct() {
            $this->id = 'baridi_mob';
            $this->method_title = 'Baridi-Mob';
            $this->method_description = 'Pay using Baridi-Mob';
            $this->has_fields = false;

            $this->init_form_fields();
            $this->init_settings();

            $this->title = $this->get_option('title');
            $this->description = $this->get_option('description');

            add_action('woocommerce_update_options_payment_gateways_' . $this->id, array($this, 'process_admin_options'));
        }

        public function init_form_fields() {
            $this->form_fields = array(
                'enabled' => array(
                    'title' => 'Enable/Disable',
                    'type' => 'checkbox',
                    'label' => 'Enable Baridi-Mob Payment Gateway',
                    'default' => 'yes'
                ),
                'title' => array(
                    'title' => 'Title',
                    'type' => 'text',
                    'default' => 'Baridi-Mob',
                ),
                'description' => array(
                    'title' => 'Description',
                    'type' => 'textarea',
                    'default' => 'Pay with Baridi-Mob.',
                )
            );
        }

        public function process_payment($order_id) {
            $order = wc_get_order($order_id);
            $order->update_status('on-hold', 'Awaiting Baridi-Mob payment');
            return array(
                'result' => 'success',
                'redirect' => $this->get_return_url($order)
            );
        }
    }
}

add_filter('woocommerce_payment_gateways', 'add_baridi_mob_gateway');

function add_baridi_mob_gateway($gateways) {
    $gateways[] = 'WC_Baridi_Mob_Gateway';
    return $gateways;
}
