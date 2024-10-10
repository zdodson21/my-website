import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';

export class BrowserPage extends LitElement {
  constructor() {
    super();
    this.theme = Store.theme;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html` <div class="browser-page-wrapper"></div> `;
  }

  static properties = {
    theme: { type: String },
  };
}

customElements.define('browser-page', BrowserPage);
