import { LitElement, html, css } from "lit";
import { siteStore } from './site-store.js';

/**
 * @customElement site-desktop
 * @extends LitElement
 * @tag site-desktop
 * @author Zach Dodson
 * @description Highest layer overhead component for Windows themed website project.
 */
class SiteDesktop extends LitElement {

  constructor() {
    super();
    this.theme = siteStore.theme;
  }

  static styles = css`
    :host {
      display: block;
    }

    .site-desktop-wrapper {
      width: 100%;
      height: 100%;
      background-color: #007f80;
      top: 0;
      left: 0;
      position: fixed;
    }
  `;

  render() {
    return html`
      <div class="site-desktop-wrapper">
        <p>${this.theme}</p>
      </div>
    `;
  }

  static properties = {
    theme: { type: String },
  }
}

customElements.define('site-desktop', SiteDesktop);