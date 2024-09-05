import { html } from 'lit';
import '../src/my-website.js';

export default {
  title: 'MyWebsite',
  component: 'my-website',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <my-website
      style="--my-website-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </my-website>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
