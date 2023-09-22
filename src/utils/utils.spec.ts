import { getSlottedNodes } from './utils';

describe('getSlottedNodes()', () => {
  class CustomElement extends window.HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `<div>ABC</div><slot name="headline">Updated Test Headline</slot><p>GHI</p>`;
    }
  }

  it('gathers slot nodes in the shadow DOM if slot is used', async () => {
    const mockObject = {
      assignedNodes: () => {
        return ['h2', 'a', 'a'];
      },
    };
    window.customElements.define('custom-element', CustomElement);

    const defaultElement = document.createElement('custom-element');

    const defElement_shadowRoot_querySelector =
      defaultElement.shadowRoot.querySelector;

    const mockedShadowRoot =
      defElement_shadowRoot_querySelector as jest.Mock<Function>;

    jest.spyOn(defaultElement.shadowRoot, 'querySelector');
    mockedShadowRoot.mockImplementation((selector) => {
      if (selector === 'slot') {
        return mockObject;
      }
      return defElement_shadowRoot_querySelector(selector);
    });

    const slottedNodes = getSlottedNodes(defaultElement, null);
    expect(slottedNodes).toEqual(['h2', 'a', 'a']);
  });

  it('gathers specific slot nodes in the shadow DOM if slot is used and nodeName is specified', async () => {
    const mockObject = {
      assignedNodes: () => {
        return [{ nodeName: 'DIV' }, { nodeName: 'A' }, { nodeName: 'P' }];
      },
    };
    window.customElements.define('custom-element', CustomElement);

    const defaultElement = document.createElement('custom-element');

    const defElement_shadowRoot_querySelector =
      defaultElement.shadowRoot.querySelector;

    const mockedShadowRoot =
      defElement_shadowRoot_querySelector as jest.Mock<Function>;

    jest.spyOn(defaultElement.shadowRoot, 'querySelector');

    mockedShadowRoot.mockImplementation((selector) => {
      if (selector === 'slot') {
        return mockObject;
      }
      return defElement_shadowRoot_querySelector(selector);
    });

    const slottedNodes = getSlottedNodes(defaultElement, 'a');
    expect(slottedNodes).toEqual([{ nodeName: 'A' }]);
  });
});
