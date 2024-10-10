import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';

export class TaskbarStart extends LitElement {
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
    return html``;
  }

  static properties = {
    theme: { type: String },
  };
}

customElements.define('taskbar-start', TaskbarStart);
