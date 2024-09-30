import { LitElement, html, css } from 'lit';
import { Store } from './site-store.js';

export class TaskbarClock extends LitElement {
  constructor() {
    super();
    this.theme = Store.theme;

    setInterval(() => {
      this.time = new Date();
      this.halfOfDay = 'AM';

      this.hour = this.time.getHours();
      if (this.hour > 12) {
        this.hour -= 12;
        this.halfOfDay = 'PM';
      }

      this.minute = this.time.getMinutes();
      if (this.minute < 10) this.minute = `0${this.minute}`;

      this.second = this.time.getSeconds();

      this.clock = `${this.hour}:${this.minute}${this.halfOfDay}`;

      this.requestUpdate();
    }, 100);
  }

  static styles = css`
    :host {
      display: block;
      --border-black: #353535;
      --border-white: #e6e6e6;
    }

    :host([theme='95']) {
      .clock {
        border-style: inset;
        border-top-color: var(--border-black);
        border-left-color: var(--border-black);
        border-bottom-color: var(--border-white);
        border-right-color: var(--border-white);
        border-width: 2px;
        padding: 2px 4px;
      }
    }

    .clock {
      /* Prevent highlighting of clock text */
      user-select: none;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
    }
  `;

  render() {
    return html`
      <div class="taskbar-clock-wrapper">
        <p class="clock">${this.clock}</p>
      </div>
    `;
  }

  static properties = {
    theme: { type: String, reflect: true },
    time: { type: Date },
    hour: { type: Number },
    minute: { type: Number },
    second: { type: Number },
    halfOfDay: { type: String },
    clock: { type: String },
  };
}

customElements.define('taskbar-clock', TaskbarClock);
