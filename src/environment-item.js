import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';

// TODO lit boiler plate
// TODO item types = [folder, app]
// The desktop app icon that the user has to double click to open an 'environment-window'

export class EnvironmentItem extends LitElement {
  constructor() {
    super();
    this.theme = Store.theme;
    this.isFolder = false;
    this.altText = 'Environment Item';
    this.isOpen = false; // TODO if folder is opened, then icon needs to change to open folder
    this.itemName = 'Environment Item';
    this.iconStoreName = null;
    // TODO this is always returning as null, even when attribute set in HTML???

    if (this.isFolder) {
      this.icon = Store.folderClosedIcon95;
    } else {
      switch (this.iconStoreName) {
        case 'blankWindowIcon95':
          this.icon = Store.blankWindowIcon95;
          break;
        case 'folderOpenIcon95':
          this.icon = Store.folderOpenIcon95;
          break;
        case 'folderClosedIcon95':
          this.icon = Store.folderClosedIcon95;
          break;
        default:
          this.icon = Store.blankWindowIcon95;
      }
    }
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
          src="${this.icon}"
          alt="${this.altText}"
        />
        <p class="environment-item-name">${this.itemName}</p>
      </div>
    `;
  }

  static properties = {
    theme: {
      type: String,
      reflect: true,
    },
    isFolder: {
      type: Boolean,
      attribute: 'is-folder',
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
    itemName: {
      type: String,
      attribute: 'item-name',
      reflect: true,
    },
    iconStoreName: {
      type: String,
      attribute: 'icon-store-name',
      reflect: true,
    },
  };
}

customElements.define('environment-item', EnvironmentItem);
