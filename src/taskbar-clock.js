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

    setInterval(() => {
      this.time = new Date();
      
      this.hour = this.time.getHours();
      this.minute = this.time.getMinutes();
      this.second = this.time.getSeconds();
      this.updateClock();
    }, 500);
  }

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
    theme: { type: String },
  }
}

customElements.define('taskbar-clock', TaskbarClock);