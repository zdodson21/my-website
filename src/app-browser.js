// Browser app, will display tabs which can be used to display different "websites", which will display slotted content as a website
import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';

export class AppBrowser extends LitElement {
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
    return html``;
  }

  static properties = {
    theme: { type: String },
  };
}

customElements.define('app-browser', AppBrowser);
