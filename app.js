document.documentElement.classList.add("js");

const offers = {
  "market-premise": {
    format: "Interactive workbook",
    title: "Market Premise",
    price: "$39",
    description: "Define the customer, problem, and commercial boundary before you build anything larger.",
    fieldState: "Signal field · 01",
  },
  "glassline-identity": {
    format: "Notion + Canva kit",
    title: "Glassline Identity",
    price: "$129",
    description: "Shape a verbal and visual identity with a system your business can keep using.",
    fieldState: "Identity field · 02",
  },
  "release-current": {
    format: "Launch system",
    title: "Release Current",
    price: "$119",
    description: "Coordinate a release across timeline, assets, measurement, and a useful retrospective.",
    fieldState: "Release field · 03",
  },
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const configuredUrls = window.COBALT_CONFIG?.checkout?.urls ?? window.COBALT_CONFIG?.checkoutUrls ?? {};
const offerButtons = [...document.querySelectorAll("[data-offer]")];
const checkoutButton = document.querySelector("[data-checkout-button]");
const checkoutStatus = document.querySelector("[data-checkout-status]");
const checkoutNote = document.querySelector("[data-checkout-note]");
const selectedFormat = document.querySelector("[data-selected-format]");
const selectedTitle = document.querySelector("[data-selected-title]");
const selectedDescription = document.querySelector("[data-selected-description]");
const selectedPrice = document.querySelector("[data-selected-price]");
const fieldState = document.querySelector("[data-field-state]");
let activeOfferKey = "market-premise";
let activeCheckoutUrl = "";

function secureCheckoutUrl(value) {
  if (typeof value !== "string" || value.trim() === "") return "";

  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}

function pulseCheckoutNote() {
  checkoutNote.classList.remove("is-emphasized");
  window.requestAnimationFrame(() => checkoutNote.classList.add("is-emphasized"));
  window.setTimeout(() => checkoutNote.classList.remove("is-emphasized"), 360);
  checkoutNote.focus({ preventScroll: true });
}

function selectOffer(offerKey) {
  const offer = offers[offerKey];
  if (!offer) return;

  activeOfferKey = offerKey;
  activeCheckoutUrl = secureCheckoutUrl(configuredUrls[offerKey]);
  document.body.dataset.activeOffer = offerKey;

  offerButtons.forEach((button) => {
    const selected = button.dataset.offer === offerKey;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  selectedFormat.textContent = offer.format;
  selectedTitle.textContent = offer.title;
  selectedDescription.textContent = offer.description;
  selectedPrice.textContent = offer.price;
  fieldState.textContent = offer.fieldState;

  if (activeCheckoutUrl) {
    checkoutButton.textContent = "Open secure checkout";
    checkoutStatus.textContent = "Secure checkout connected";
    checkoutNote.textContent = "This button opens the provider-hosted checkout in a new tab. Cobalt never handles card details.";
    checkoutButton.dataset.ready = "true";
  } else {
    checkoutButton.textContent = "Checkout link pending";
    checkoutStatus.textContent = "Checkout link pending";
    checkoutNote.textContent = "Add this product’s secure HTTPS payment link in config.js to turn this CTA into a live provider-hosted checkout.";
    checkoutButton.dataset.ready = "false";
  }
}

offerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    selectOffer(button.dataset.offer);
  });
});

checkoutButton.addEventListener("click", () => {
  if (!activeCheckoutUrl) {
    pulseCheckoutNote();
    return;
  }

  window.open(activeCheckoutUrl, "_blank", "noopener,noreferrer");
});

const menuTrigger = document.querySelector("[data-menu-trigger]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

function closeMobileMenu() {
  mobileMenu.hidden = true;
  menuTrigger.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

menuTrigger.addEventListener("click", () => {
  const willOpen = mobileMenu.hidden;
  mobileMenu.hidden = !willOpen;
  menuTrigger.setAttribute("aria-expanded", String(willOpen));
  document.body.classList.toggle("menu-open", willOpen);
});

mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMobileMenu();
});

document.querySelectorAll("[data-scroll-offer]").forEach((link) => {
  link.addEventListener("click", () => {
    const offerKey = link.dataset.scrollOffer;
    if (!offers[offerKey]) return;
    selectOffer(offerKey);
  });
});

if (!prefersReducedMotion) {
  document.documentElement.classList.add("is-ready");
}

selectOffer(activeOfferKey);
