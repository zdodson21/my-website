// TODO lit boiler plate
// TODO create movable window that can hold iFrames of content, or another component.

import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';

export class EnvironmentWindow extends LitElement {
  constructor() {
    super();
    this.theme = Store.theme;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html` <div class="environment-window-wrapper"></div> `;
  }

  static properties = {
    theme: { type: String },
  };
}

customElements.define('environment-window', EnvironmentWindow);
