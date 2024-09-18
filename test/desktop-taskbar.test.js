import { html} from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/desktop-taskbar.js';
import '../src/taskbar-clock.js';
import '../src/taskbar-start.js';
import '../src/taskbar-item.js';

// TODO check if this test works
describe('DesktopTaskbar', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<desktop-taskbar></desktop-taskbar>`);
  });
  
  it('renders a taskbar-clock', () => {
    const taskbarClock = element.shadowRoot.querySelector('taskbar-clock');
    expect(taskbarClock).to.exist;
  });

  it('renders a taskbar-start', () => {
    const taskbarStart = element.shadowRoot.querySelector('taskbar-start');
    expect(taskbarStart).to.exist;
  });

  it('renders a taskbar-item', () => {
    const taskbarItem = element.shadowRoot.querySelector('taskbar-item');
    expect(taskbarItem).to.exist;
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});