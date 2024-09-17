import { LitElement, html, css } from "lit";

class SiteDesktop extends LitElement {

  constructor() {
    super();
    this.theme = '95'
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

      </div>
    `;
  }

  static properties = {
    theme: { type: String },
  }
}

customElements.define('site-desktop', SiteDesktop);