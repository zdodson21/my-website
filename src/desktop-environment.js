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
            icon-src="https://github.com/zdodson21/my-website/blob/main/assets/icons/95/my-computer.png?raw=true"
            alt-text="My Computer"
          ></environment-item>
          <environment-item
            icon-src="https://github.com/zdodson21/my-website/blob/main/assets/icons/95/recycle-bin.png?raw=true"
            alt-text="Recycle Bin"
          ></environment-item>
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
