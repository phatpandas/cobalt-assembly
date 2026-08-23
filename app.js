document.documentElement.classList.add("js");

const pathways = {
  validate: {
    intent: "Validate an idea",
    entry: "Market Premise · $39 workbook",
    system: "Market Frame · $89 offer workspace",
    tool: "Market Lens · from $19/mo",
    target: "#market-premise",
    resultTitle: "Start with Market Premise.",
    resultCopy: "Turn a promising idea into a commercial boundary before you build anything larger.",
  },
  shape: {
    intent: "Shape an offer",
    entry: "Digital Poise · $29 ebook",
    system: "Glassline Identity · $129 identity kit",
    tool: "Message Foundry · from $29/mo",
    target: "#glassline-identity",
    resultTitle: "Start with Digital Poise.",
    resultCopy: "Create a high-trust AI-native business foundation, then translate it into an identity system.",
  },
  release: {
    intent: "Release a product",
    entry: "Release Strategy · $79 workshop",
    system: "Release Current · $119 launch system",
    tool: "Release Choreography · from $29/mo",
    target: "#release-current",
    resultTitle: "Start with Release Strategy.",
    resultCopy: "Clarify the market entry before coordinating the release across assets, timing, and measurement.",
  },
  grow: {
    intent: "Grow an audience",
    entry: "Editorial Gravity · $49 guide",
    system: "Editorial Rail · $99 strategy workspace",
    tool: "Content Weave · from $29/mo",
    target: "#catalog",
    resultTitle: "Start with Editorial Gravity.",
    resultCopy: "Develop durable themes before adding a system for cadence, production, and performance review.",
  },
  deliver: {
    intent: "Elevate client delivery",
    entry: "Client Ritual · $89 course",
    system: "Contract Canvas · $69 proposal kit",
    tool: "Contract Studio · from $29/mo",
    target: "#catalog",
    resultTitle: "Start with Client Ritual.",
    resultCopy: "Clarify the client experience first, then build the proposal and delivery systems that preserve it.",
  },
  teach: {
    intent: "Build a learning offer",
    entry: "Research Clarity · $29 guide",
    system: "Learning Scaffold · $99 curriculum workspace",
    tool: "Learning Composer · from $29/mo",
    target: "#catalog",
    resultTitle: "Start with Research Clarity.",
    resultCopy: "Structure the evidence and point of view before turning expertise into a repeatable learning product.",
  },
  lead: {
    intent: "Lead with clarity",
    entry: "Strategic Judgment · $49 playbook",
    system: "Command Grid · $149 operating workspace",
    tool: "Metric Current · from $39/mo",
    target: "#catalog",
    resultTitle: "Start with Strategic Judgment.",
    resultCopy: "Create a disciplined decision practice before adding the executive systems that make priorities visible.",
  },
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const workbench = document.querySelector(".path-workbench");
const routeIntent = document.querySelector("[data-route-intent]");
const routeEntry = document.querySelector("[data-route-entry]");
const routeSystem = document.querySelector("[data-route-system]");
const routeTool = document.querySelector("[data-route-tool]");
const routeLink = document.querySelector("[data-route-link]");
const pathChoices = [...document.querySelectorAll("[data-path]")];

function setPathway(pathKey) {
  const pathway = pathways[pathKey];
  if (!pathway) return;

  pathChoices.forEach((button) => {
    const selected = button.dataset.path === pathKey;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });

  routeIntent.textContent = pathway.intent;
  routeEntry.textContent = pathway.entry;
  routeSystem.textContent = pathway.system;
  routeTool.textContent = pathway.tool;
  routeLink.href = pathway.target;

  workbench.classList.remove("is-changing");
  window.requestAnimationFrame(() => workbench.classList.add("is-changing"));
  window.setTimeout(() => workbench.classList.remove("is-changing"), 240);
}

pathChoices.forEach((button) => {
  button.addEventListener("click", () => setPathway(button.dataset.path));
});

const diagnosticForm = document.querySelector("#diagnostic-form");
const diagnosticResult = document.querySelector("#diagnostic-result");
const resultTitle = document.querySelector("[data-result-title]");
const resultCopy = document.querySelector("[data-result-copy]");
const resultLink = document.querySelector("[data-result-link]");

diagnosticForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selection = new FormData(diagnosticForm).get("priority");
  const pathway = pathways[selection];
  if (!pathway) return;

  setPathway(selection);
  resultTitle.textContent = pathway.resultTitle;
  resultCopy.textContent = pathway.resultCopy;
  resultLink.href = pathway.target;
  diagnosticResult.hidden = false;
  resultTitle.setAttribute("tabindex", "-1");
  resultTitle.focus({ preventScroll: true });
});

const checkoutUrls = window.COBALT_CONFIG?.checkoutUrls ?? {};
document.querySelectorAll("[data-checkout-product]").forEach((link) => {
  const checkoutUrl = checkoutUrls[link.dataset.checkoutProduct];
  if (typeof checkoutUrl === "string" && /^https:\/\//.test(checkoutUrl)) {
    link.href = checkoutUrl;
    link.firstChild.textContent = "Get the offer ";
  }
});

const nav = document.querySelector(".site-nav");
let scrollTicking = false;
window.addEventListener(
  "scroll",
  () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(() => {
      nav.classList.toggle("is-scrolled", window.scrollY > 20);
      scrollTicking = false;
    });
  },
  { passive: true },
);

const menuTrigger = document.querySelector(".menu-trigger");
const mobileMenu = document.querySelector("#mobile-menu");

function closeMobileMenu() {
  mobileMenu.hidden = true;
  menuTrigger.setAttribute("aria-expanded", "false");
}

menuTrigger.addEventListener("click", () => {
  const willOpen = mobileMenu.hidden;
  mobileMenu.hidden = !willOpen;
  menuTrigger.setAttribute("aria-expanded", String(willOpen));
});

mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileMenu));

const commandPalette = document.querySelector("#command-palette");
const commandSearch = document.querySelector("#command-search");
const commandButtons = [...document.querySelectorAll("[data-command-target]")];
let activeCommandIndex = 0;

function renderCommandSelection() {
  const visibleButtons = commandButtons.filter((button) => !button.hidden);
  if (visibleButtons.length === 0) return;
  activeCommandIndex = Math.min(activeCommandIndex, visibleButtons.length - 1);
  visibleButtons.forEach((button, index) => button.classList.toggle("is-selected", index === activeCommandIndex));
}

function openCommandPalette() {
  if (!commandPalette.open) commandPalette.showModal();
  commandSearch.value = "";
  commandButtons.forEach((button) => (button.hidden = false));
  activeCommandIndex = 0;
  renderCommandSelection();
  commandSearch.focus();
}

function closeCommandPalette() {
  if (commandPalette.open) commandPalette.close();
}

document.querySelectorAll("[data-open-command]").forEach((trigger) => trigger.addEventListener("click", openCommandPalette));
document.querySelector("[data-close-command]").addEventListener("click", closeCommandPalette);

commandPalette.addEventListener("click", (event) => {
  if (event.target === commandPalette) closeCommandPalette();
});

commandSearch.addEventListener("input", () => {
  const query = commandSearch.value.trim().toLowerCase();
  commandButtons.forEach((button) => {
    button.hidden = !button.textContent.toLowerCase().includes(query);
  });
  activeCommandIndex = 0;
  renderCommandSelection();
});

commandSearch.addEventListener("keydown", (event) => {
  const visibleButtons = commandButtons.filter((button) => !button.hidden);
  if (event.key === "ArrowDown" && visibleButtons.length) {
    event.preventDefault();
    activeCommandIndex = (activeCommandIndex + 1) % visibleButtons.length;
    renderCommandSelection();
  }
  if (event.key === "ArrowUp" && visibleButtons.length) {
    event.preventDefault();
    activeCommandIndex = (activeCommandIndex - 1 + visibleButtons.length) % visibleButtons.length;
    renderCommandSelection();
  }
  if (event.key === "Enter" && visibleButtons.length) {
    event.preventDefault();
    visibleButtons[activeCommandIndex].click();
  }
});

commandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.dataset.commandTarget;
    closeCommandPalette();
    document.querySelector(target)?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  });
});

window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    openCommandPalette();
  }
  if (event.key === "Escape") {
    closeMobileMenu();
  }
});

const revealTargets = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 },
  );
  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-in"));
}
