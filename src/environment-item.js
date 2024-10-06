import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';

// TODO lit boiler plate
// TODO item types = [folder, app]
// The desktop app icon that the user has to double click to open an 'environment-window'

export class EnvironmentItem extends LitElement {
  constructor() {
    super();
    this.theme = Store.theme;
    this.isOpen = false;
    this.iconSRC = this.open
      ? 'https://github.com/zdodson21/my-website/blob/main/assets/icons/95/folder-open.png?raw=true'
      : 'https://github.com/zdodson21/my-website/blob/main/assets/icons/95/folder-closed.png?raw=true'; // TODO figure out if I can do this locally or not. Would prefer local image storage
    this.altText = 'Environment Item';
  }

  static styles = css`
    :host {
      display: block;
    }

    :host([theme='95']) {
      .environment-item-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .environment-item-icon {
        width: 24px;
      }
    }
  `;

  render() {
    return html`
      <div class="environment-item-wrapper">
        <img
          class="environment-item-icon"
          src="${this.iconSRC}"
          alt="${this.altText}"
        />
        <p class="environment-item-name">${this.altText}</p>
      </div>
    `;
  }

  static properties = {
    theme: {
      type: String,
      reflect: true,
    },
    iconSRC: {
      type: URL,
      attribute: 'icon-src',
      reflect: true,
    },
    altText: {
      type: String,
      attribute: 'alt-text',
      reflect: true,
    },
    isOpen: {
      type: Boolean,
      attribute: 'is-open',
      reflect: true,
    },
  };
}

customElements.define('environment-item', EnvironmentItem);
