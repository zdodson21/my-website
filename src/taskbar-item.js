import { LitElement, css, html } from 'lit';
import { Store } from './site-store.js';

export class TaskbarItem extends LitElement {
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
    return html` <div class="taskbar-item-wrapper"></div> `;
  }

  static properties = {
    theme: { type: String },
  };
}
customElements.define('taskbar-item', TaskbarItem);
