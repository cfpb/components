/**
 * Get all of the slotted children in the root element that match `nodeName`
 * If nodeName is null we still want all children to be accessible
 */
export function getSlottedNodes(
  root: HTMLElement,
  nodeName: string | null,
): Array<Node> {
  // This will only get the first slot on a component
  const children = root.shadowRoot.querySelector('slot').assignedNodes()

  return nodeName !== null ? Array.from(children).filter(
        item => item.nodeName.toLowerCase() === nodeName,
  ) : Array.from(children);
}
