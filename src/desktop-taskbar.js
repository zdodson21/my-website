import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';

export class DesktopTaskbar extends LitElement {

  constructor() {
    super();
    this.theme = Store.theme;
  }

  static styles = css`
    :host {
      display: block;
    }

    .desktop-taskbar-wrapper {
      width: 100%;
      height: 5%;
      background-color: #c5c5c5;
      bottom: 0;
      left: 0;
      position: fixed;
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
          <!-- <taskbar-clock></taskbar-clock> -->
        </div>
      </div>
    `;
  }

  static properties = {
    theme: { type: String },
  }
}
customElements.define('desktop-taskbar', DesktopTaskbar);
