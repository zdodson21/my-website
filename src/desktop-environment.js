import { LitElement, html, css } from 'lit';
import { siteStore } from './site-store.js';

export class DesktopEnvironment extends LitElement {
  
  constructor() {
    super();
    this.theme = siteStore.theme;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <div class="desktop-environment-wrapper">
        
      </div>
    `;
  }

  static properties = {
    theme: { type: String },
  }
}
customElements.define('desktop-environment', DesktopEnvironment);
