import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';
import './environment-item.js';

export class DesktopEnvironment extends LitElement {
  constructor() {
    super();
    this.theme = Store.theme;
  }

  static styles = css`
    :host {
      display: block;
    }

    .desktop-environment-wrapper {
      width: 100%;
      height: 95%;
      top: 0;
      left: 0;
      position: fixed;
    }
  `;

  render() {
    return html`
      <div class="desktop-environment-wrapper">
        <div class="environment-item-grid">
          <environment-item
            item-name="My Computer"
            icon-store-name="folderOpenIcon95"
          ></environment-item>
          <environment-item></environment-item>
          <environment-item></environment-item>
        </div>
      </div>
    `;
  }

  static properties = {
    theme: { type: String, reflect: true },
  };
}

customElements.define('desktop-environment', DesktopEnvironment);
