import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Listen,
  Prop,
  State,
  h,
} from '@stencil/core';
import { getSlottedNodes } from '../../utils/utils';

/**
 * Accordions are a list of headers that can be clicked to hide or reveal additional content.
 *
 * ## Usability
 * ### When to use
 * - Users only need a few specific pieces of content within a page.
 * - Information needs to be displayed in a small space.
 *
 * ### When to consider something else
 * - If visitors need to see most or all of the information on a page. Use well-formatted text instead.
 * - If there is not enough content to warrant condensing. Accordions increase cognitive load and interaction cost, as users have to make decisions about what headers to click on.
 *
 * ### Guidance
 *
 * - Allow users to click anywhere in the header area to expand or collapse the content; a larger target is easier to manipulate.
 * - Make sure interactive elements within the collapsible region are far enough from the headers that users don’t accidentally trigger a collapse. (The exact distance depends on the device.
 */

/**
 * @componentName Accordion
 * @accordionItemToggled This event is fired when an accordion item is opened or closed
 * @maturityCategory use
 * @maturityLevel best_practice
 * @translations English
 * @translations Spanish
 * @translations Tagalog
 */
@Component({
  tag: 'cfpb-expandable-group',
  styleUrl: 'cfpb-expandable-group.css',
  shadow: true,
})
export class VaAccordion {
  @Element() el!: any;
  accordionContainer: HTMLDivElement;
  expandCollapseBtn!: HTMLButtonElement;

  @State() expanded = false;

  /**
   * True if only a single item can be opened at once
   */
  @Prop() openSingle?: boolean = false;

  /**
   * If `true`, doesn't fire the CustomEvent which can be used for analytics tracking.
   */
  @Prop() disableAnalytics?: boolean = false;

  /**
   * Optional accordion section heading text. Only used in analytics event. Default is null.
   */
  @Prop() sectionHeading?: string = null;

  /**
   * The event used to track usage of the component. This is emitted when an
   * accordion item is toggled and disableAnalytics is not true.
   */
  @Event({
    eventName: 'component-library-analytics',
    composed: true,
    bubbles: true,
  })
  componentLibraryAnalytics: EventEmitter;

  @Listen('accordionItemToggled')
  itemToggledHandler(event: CustomEvent) {
      const clickedItem = (event.target as HTMLElement).closest('cfpb-expandable');
      // Usage for slot to provide context to analytics for header and level
      const header = clickedItem.querySelector('[slot="headline"]');
      // using the slot to provide context to analytics for header and level
      let headerText
      let headerLevel
      if (header) {
        headerText = header?.innerHTML
        headerLevel = parseInt(header?.tagName?.toLowerCase().split('')[1]);
      } else {
        // using the props to provide context to analytics for header and level
        headerText = clickedItem.header
        headerLevel = clickedItem.level
      }

      if (this.openSingle) {
        getSlottedNodes(this.el, 'cfpb-expandable')
          .filter(item => item !== clickedItem)
          .forEach(item => (item as Element).setAttribute('open', 'false'));
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

  private accordionsOpened() {
    // Track user clicks on cfpb-expandable-item within an array to compare if all values are true or false
    let accordionItems = [];
    getSlottedNodes(this.el, 'cfpb-expandable').forEach(item => {
      accordionItems.push((item as Element).getAttribute('open'));
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

  isScrolledIntoView(el: Element) {
    const elemTop = el?.getBoundingClientRect().top;

    if (!elemTop && elemTop !== 0) {
      return false;
    }

    // Only partially || completely visible elements return true
    return elemTop >= 0 && elemTop <= window.innerHeight;
  }

  render() {
    return (
      <Host>
        <slot />
      </Host>
    );
  }
}
