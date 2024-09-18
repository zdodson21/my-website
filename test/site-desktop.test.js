import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/site-desktop.js';
import '../src/desktop-environment.js';
import '../src/desktop-taskbar.js';
// import { Store } from '../src/site-store.js';

describe('SiteDesktop', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<site-desktop></site-desktop>`);
  });

  it('renders a desktop-environment', () => {
    const desktopEnvironment = element.shadowRoot.querySelector(
      'desktop-environment',
    );
    expect(desktopEnvironment).to.exist;
  });

  it('renders a desktop-taskbar', () => {
    const desktopTaskbar = element.shadowRoot.querySelector('desktop-taskbar');
    expect(desktopTaskbar).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
