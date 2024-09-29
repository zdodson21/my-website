import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/taskbar-clock.js';

describe('TaskbarClock', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<taskbar-clock></taskbar-clock>`);
  });

  it('renders a p', () => {
    const p = element.shadowRoot.querySelector('p');
    expect(p).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
