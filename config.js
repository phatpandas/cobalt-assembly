/*
 * Add live, product-specific checkout URLs before using the site for sales.
 * Empty URLs keep the launch site in guided-discovery mode rather than sending
 * visitors to a broken purchase flow.
 */
window.COBALT_CONFIG = {
  checkoutUrls: {
    "market-premise": "",
    "glassline-identity": "",
    "release-current": "",
  },
};
