/*
 * Sales handoff
 *
 * Cobalt does not collect card details. Add complete HTTPS payment links from
 * a checkout provider you own (for example, a Stripe Payment Link, Gumroad,
 * Lemon Squeezy, or Shopify checkout). The storefront validates the protocol
 * and opens the provider-hosted checkout only after a visitor clicks a CTA.
 *
 * Leave a product blank while it is not ready to sell. That product will show
 * an honest "checkout link pending" state instead of a broken purchase button.
 */
window.COBALT_CONFIG = {
  checkout: {
    provider: "",
    urls: {
      "market-premise": "",
      "glassline-identity": "",
      "release-current": "",
    },
  },
};
