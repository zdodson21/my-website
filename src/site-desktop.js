import { LitElement, css, html } from 'lit';
import './desktop-environment.js';
import './desktop-taskbar.js';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';
import { Store } from './site-store.js';

// Vercel Analytics
inject();
injectSpeedInsights();

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
    this.theme = Store.theme; // TODO this or properties is NOT setting default value in HTML, look into why.
  }

  static styles = css`
    :host {
      display: block;
    }

    .site-desktop-wrapper {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      position: fixed;
    }

    :host([theme='95']) {
      .site-desktop-wrapper {
        background-color: #007f80;
      }
    }

    :host([theme='xp']) {
      .site-desktop-wrapper {
        background-image: url('./assets/xp-background.png'); /* TODO Doesn't work in build :( */
      }
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
    theme: { type: String, reflect: true },
  };
}

customElements.define('site-desktop', SiteDesktop);
