import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';

export class DesktopEnvironment extends LitElement {
  
  constructor() {
    super();
    this.theme = Store.theme;
  }

  static styles = css`
    :host {
      display: block;
    }

    .desktop-environment-wrapper {
      width: 100%;
      height: 95%;
      top: 0;
      left: 0;
      position: fixed;
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
