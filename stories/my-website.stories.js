import { html } from 'lit';
import '../src/site-desktop.js';

export default {
  title: 'SiteDesktop',
  component: 'site-desktop',
};

function Template() {
  return html` <site-desktop></site-desktop> `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
