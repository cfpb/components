import { r as registerInstance, a as createEvent, h, e as Host, g as getElement } from './index-6eba28a1.js';
import { g as getSlottedNodes } from './utils-55059291.js';

const cfpbExpandableGroupCss = ":host(){display:block;width:100%;color:gray;--item-border:none;}:host([bordered='true']),:host([bordered='']){--item-border:3px solid var(--color-gray-lightest)}";

const VaAccordion = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.componentLibraryAnalytics = createEvent(this, "component-library-analytics", 7);
    this.expanded = false;
    this.openSingle = false;
    this.disableAnalytics = false;
    this.sectionHeading = null;
  }
  itemToggledHandler(event) {
    var _a;
    const clickedItem = event.target.closest('cfpb-expandable');
    // Usage for slot to provide context to analytics for header and level
    const header = clickedItem.querySelector('[slot="headline"]');
    // using the slot to provide context to analytics for header and level
    let headerText;
    let headerLevel;
    if (header) {
      headerText = header === null || header === void 0 ? void 0 : header.innerHTML;
      headerLevel = parseInt((_a = header === null || header === void 0 ? void 0 : header.tagName) === null || _a === void 0 ? void 0 : _a.toLowerCase().split('')[1]);
    }
    else {
      // using the props to provide context to analytics for header and level
      headerText = clickedItem.header;
      headerLevel = clickedItem.level;
    }
    if (this.openSingle) {
      getSlottedNodes(this.el, 'cfpb-expandable')
        .filter(item => item !== clickedItem)
        .forEach(item => item.setAttribute('open', 'false'));
    }
    const prevAttr = clickedItem.getAttribute('open') === 'true' ? true : false;
    if (!this.disableAnalytics) {
      const detail = {
        componentName: 'cfpb-expandable-group',
        action: prevAttr ? 'collapse' : 'expand',
        details: {
          header: headerText || clickedItem.header,
          level: headerLevel || clickedItem.level,
          sectionHeading: this.sectionHeading,
        },
      };
      this.componentLibraryAnalytics.emit(detail);
    }
    clickedItem.setAttribute('open', !prevAttr ? "true" : "false");
    if (!this.isScrolledIntoView(clickedItem)) {
      clickedItem.scrollIntoView();
    }
    // Check if all accordions are open or closed due to user clicks
    this.accordionsOpened();
  }
  accordionsOpened() {
    // Track user clicks on cfpb-expandable-item within an array to compare if all values are true or false
    let accordionItems = [];
    getSlottedNodes(this.el, 'cfpb-expandable').forEach(item => {
      accordionItems.push(item.getAttribute('open'));
    });
    const allOpen = currentValue => currentValue === 'true';
    const allClosed = currentValue => currentValue === 'false';
    if (accordionItems.every(allOpen)) {
      this.expanded = true;
    }
    if (accordionItems.every(allClosed)) {
      this.expanded = false;
    }
  }
  isScrolledIntoView(el) {
    const elemTop = el === null || el === void 0 ? void 0 : el.getBoundingClientRect().top;
    if (!elemTop && elemTop !== 0) {
      return false;
    }
    // Only partially || completely visible elements return true
    return elemTop >= 0 && elemTop <= window.innerHeight;
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
  get el() { return getElement(this); }
};
VaAccordion.style = cfpbExpandableGroupCss;

export { VaAccordion as cfpb_expandable_group };
