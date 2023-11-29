import { html } from 'lit';
import '../src/polaris-mychip.js';

export default {
  title: 'PolarisMychip',
  component: 'polaris-mychip',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <polaris-mychip
      style="--polaris-mychip-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </polaris-mychip>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
