import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';
import './taskbar-clock.js';

export class DesktopTaskbar extends LitElement {
  constructor() {
    super();
    this.theme = Store.theme;
  }

  static styles = css`
    :host {
      display: block;
    }

    :host([theme='95']) .desktop-taskbar-wrapper {
      background-color: #c5c5c5;
    }

    :host([theme='xp']) .desktop-taskbar-wrapper {
      background-color: #2059d8;
    }

    .desktop-taskbar-wrapper {
      width: 100%;
      height: 5%;
      bottom: 0;
      left: 0;
      position: fixed;
      display: grid;
      grid-template-columns: 5% 90% 5%;
    }

    .right {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  render() {
    return html`
      <div class="desktop-taskbar-wrapper">
        <div class="left">
          <!-- <taskbar-start></taskbar-start> -->
        </div>
        <div class="middle">
          <!-- taskbar-items will go here -->
        </div>
        <div class="right">
          <taskbar-clock></taskbar-clock>
        </div>
      </div>
    `;
  }

  static properties = {
    theme: { type: String, reflect: true },
  };
}

customElements.define('desktop-taskbar', DesktopTaskbar);
