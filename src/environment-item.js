import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';
import folderClosed95 from './assets/icons/95/folder-closed.png';
import folderOpen95 from './assets/icons/95/folder-open.png';

// TODO lit boiler plate
// TODO item types = [folder, app]
// The desktop app icon that the user has to double click to open an 'environment-window'

export class EnvironmentItem extends LitElement {
  constructor() {
    super();
    this.theme = Store.theme;
    this.isOpen = false;
    this.iconSRC = this.open ? folderOpen95 : folderClosed95;
    this.itemText = 'Environment Item';
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

    .environment-item-name {
      /* Prevent text highlighting */
      user-select: none;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
    }
  `;

  render() {
    return html`
      <div class="environment-item-wrapper">
        <img
          class="environment-item-icon"
          src="${this.iconSRC}"
          alt="${this.itemText}"
        />
        <p class="environment-item-name">${this.itemText}</p>
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
    itemText: {
      type: String,
      attribute: 'item-text',
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
