// the content of an app.
import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';

export class WindowApp extends LitElement {
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
    return html` <div class="window-app-wrapper"></div> `;
  }

  static properties = {
    theme: { type: String },
  };
}

customElements.define('window-app', WindowApp);
