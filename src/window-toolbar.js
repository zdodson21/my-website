// Files, Edit, Selection, View, whatever the top bar options need to be.
import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';

export class WindowToolbar extends LitElement {
  constructor() {
    super();
    this.theme = Store.theme;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  static properties = {
    theme: { type: String },
  };

  render() {
    return html` <div class="window-toolbar-wrapper"></div> `;
  }
}

customElements.define('window-toolbar', WindowToolbar);
