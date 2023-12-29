// scrollFunctions.js

import { handleFooterScroll } from "./footer.js";
import { handleSectionScroll } from "../pages/index.js";

// Attach each function to the scroll event separately
window.onscroll = function () {
  handleFooterScroll();
  handleSectionScroll();
};
