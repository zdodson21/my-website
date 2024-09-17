import { LitElement, html, css } from 'lit';
import { siteStore } from './site-store.js';

export class DesktopTaskbar extends LitElement {

  constructor() {
    super();
    this.theme = siteStore.theme;
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

      </div>
    `;
  }
}
customElements.define('desktop-taskbar', DesktopTaskbar);
