import { LitElement, html, css } from 'lit';
import { Store } from './site-store.js';

export class TaskbarClock extends LitElement {
  constructor() {
    super();
    this.theme = Store.theme;
    this.time = new Date();
    this.hour = this.time.getHours();
    this.minute = this.time.getMinutes();
    this.second = this.time.getSeconds();

    // TODO any number below 10 should have a leading 0
    // TODO add support for 12 hour clock (am/pm)
    setInterval(() => {
      this.time = new Date();

      this.hour = this.time.getHours();
      this.minute = this.time.getMinutes();
      this.second = this.time.getSeconds();
      this.updateClock();
    }, 500);
  }

  // TODO modify CSS match theme
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <div class="taskbar-clock-wrapper">
        <p class="clock">${this.hour}:${this.minute}</p>
      </div>
    `;
  }

  updateClock() {
    const CLOCK = this.shadowRoot.querySelector('.clock');
    CLOCK.innerHTML = `${this.hour}:${this.minute}`;
  }

  static properties = {
    theme: { type: String, reflect: true },
  };
}

customElements.define('taskbar-clock', TaskbarClock);
