const SELECTOR = {
  DARK_MODE_TOGGLE: "button#dark-mode-toggle",
};

const DATASET = {
  DARK_MODE: "data-darkmode",
};

const TOGGLE_STATE = {
  OFF: "0",
  ON: "1",
};

/**
 * @type {HTMLButtonElement}
 */
const darkModeToggle = document.querySelector(SELECTOR.DARK_MODE_TOGGLE);
darkModeToggle.setAttribute(DATASET.DARK_MODE, TOGGLE_STATE.OFF);

/**
 * @param {Event} event
 */
const toggleCallback = (event) => {
  const toggle = event.target;
  const state = toggle.getAttribute(DATASET.DARK_MODE);
  if (state === TOGGLE_STATE.OFF) {
    toggle.setAttribute(DATASET.DARK_MODE, TOGGLE_STATE.ON);
  } else {
    toggle.setAttribute(DATASET.DARK_MODE, TOGGLE_STATE.OFF);
  }
};

darkModeToggle.addEventListener("click", toggleCallback);
