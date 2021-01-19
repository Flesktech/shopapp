import WooCommerceAPI from 'woocommerce-api';




const WooCommerce = new WooCommerceAPI({

  
  url: 'https://drugshoppa.ng/wp-json/wc/v3/products', // Your store URL
  consumerKey: 'ck_aaef5c823b0fabaf2958613ac0c8f60520f42150', // Your consumer secret
  consumerSecret: 'cs_f87c08e7f6accfde38919868794df9d9c94488c6', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v3', // WooCommerce WP REST API version

});

export default WooCommerce;