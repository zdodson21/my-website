import { LitElement, css, html } from 'lit';
import './desktop-environment.js';
import './desktop-taskbar.js';
import { Store } from './site-store.js';

/**
 * @customElement site-desktop
 * @extends LitElement
 * @tag site-desktop
 * @author Zach Dodson
 * @description Highest layer overhead component for Windows themed website project.
 */
export class SiteDesktop extends LitElement {
  constructor() {
    super();
    this.theme = Store.theme;
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
        <desktop-environment></desktop-environment>
        <desktop-taskbar></desktop-taskbar>
      </div>
    `;
  }

  // TODO figure out why attribute isn't there...
  static properties = {
    theme: { type: String },
  };
}

customElements.define('site-desktop', SiteDesktop);
