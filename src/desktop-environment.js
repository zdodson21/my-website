import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';
import './environment-item.js';
import myComputer95 from './assets/icons/95/my-computer.png';
import recycleBin95 from './assets/icons/95/recycle-bin.png';

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
            icon-src="${myComputer95}"
            item-text="My Computer"
          ></environment-item>
          <environment-item
            icon-src="${recycleBin95}"
            item-text="Recycle Bin"
          ></environment-item>
          <environment-item item-text="Folder"></environment-item>
        </div>
      </div>
    `;
  }

  static properties = {
    theme: { type: String, reflect: true },
  };
}

customElements.define('desktop-environment', DesktopEnvironment);
