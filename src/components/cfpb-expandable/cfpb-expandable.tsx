import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  State,
  h,
} from '@stencil/core';
import { getSlottedNodes } from '../../utils/utils';
@Component({
  tag: 'cfpb-expandable',
  styleUrl: 'cfpb-expandable.css',
  shadow: true,
})

export class CfpbExpandable {
  /**
   * Reference to host element
   */
  @Element() el: HTMLElement;

  /**
   * This event is fired so that cfpb-expandable element can manage which items are opened or closed
   */
  @Event({
    composed: true,
    bubbles: true,
  })
  accordionItemToggled: EventEmitter;

  /**
   * The accordion item header text
   */
  @Prop() header?: string;

  /**
   * Optional accordion item subheader text. Default is null.
  */
  @Prop() subheader?: string = null;

  /**
   * True if the item is open
  */
  @Prop() open?: boolean = false;

  /**
   * Header level for button wrapper. Must be between 1 and 6
   */
  @Prop() level?: number = 2;

  /**
   * Whether or not the accordion item will have a border
   */
  @Prop() bordered?: boolean = false;

  /**
   * Whether or not the component will use USWDS v3 styling.
   */
  @Prop() uswds?: boolean = false;

  /**
   * Local State for slot=headline replacement of props (header).
   * Provides context of the header text to the Accordion Item
   */
  @State() slotHeader: string = null;

  /**
   * Local State for slot=headline replacement of props (level).
   * Provides context of the level to the Accordion Item
   */
  @State() slotTag: string = null;

  /**
   * Toggle button reference
   */
  private expandButton: HTMLButtonElement = null;

  private toggleOpen(e: MouseEvent): void {
    this.accordionItemToggled.emit(e);
  }

  // Using onSlotChange to fire event on inital load
  // Data access from slot html element is being perfomed by this function
  // Function allows us to provide context to state
  // State is then being digested by the Header Function below
  private populateStateValues() {
    getSlottedNodes(this.el, null).forEach((node: HTMLSlotElement) => {
      this.slotHeader = node.innerHTML;
      this.slotTag = node.tagName.toLowerCase();
    });
  }

  componentDidLoad() {
    // auto-expand accordion if the window hash matches the ID
    if (this.el.id && this.el.id === window.location.hash.slice(1)) {
      const currentTarget = this.expandButton;

      if (currentTarget) {
        this.open = true;
        this.el.setAttribute('open', 'true');
        this.el.scrollIntoView();
      }
    }
  }

  render() {
    const Header = () => {
      const headline = this.el.querySelector('[slot="headline"]');

      const Tag = (headline && headline.tagName.includes("H"))
        ? headline.tagName.toLowerCase()
        : `h${this.level}`;

      return (
        <Tag>
          <button
            ref={el => {
              this.expandButton = el;
            }}
            onClick={this.toggleOpen.bind(this)}
            aria-expanded={this.open ? 'true' : 'false'}
            aria-controls="content"
            part="accordion-header"
          >
            <h3 class='h4 o-expandable_label'>{this.header}</h3>
            <span class='o-expandable_link'>
              <span class='o-expandable_cue o-expandable_cue-open'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 19" class="cf-icon-svg cf-icon-svg__plus-round"><path d="M16.416 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0Zm-2.958.01a.792.792 0 0 0-.792-.792H9.284V5.42a.792.792 0 1 0-1.583 0V8.8H4.32a.792.792 0 0 0 0 1.584H7.7v3.382a.792.792 0 1 0 1.583 0v-3.382h3.382a.792.792 0 0 0 .792-.791Z"></path></svg>
              </span>
              <span class='o-expandable_cue o-expandable_cue-close'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 19" class="cf-icon-svg cf-icon-svg__minus-round"><path d="M16.416 9.583a7.916 7.916 0 1 1-15.833 0 7.916 7.916 0 0 1 15.833 0Zm-2.958.01a.792.792 0 0 0-.792-.792H4.32a.792.792 0 0 0 0 1.583h8.346a.792.792 0 0 0 .792-.791Z"></path></svg>
              </span>
            </span>
          </button>
        </Tag >
      );
    }
    return (
      <Host>
        <Header />
        <slot name="headline" onSlotchange={() => this.populateStateValues()} />
        <div id="content">
          <slot />
        </div>
      </Host>
    );
  }
}
