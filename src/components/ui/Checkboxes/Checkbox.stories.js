import React from 'react';

import { Checkbox } from './Checkbox';

export default {
  title: 'UI/Checkbox',
  component: Checkbox
};

const Template = (args) => (
  <form>
    <Checkbox {...args} />
  </form>
)

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Checked',
  defaultChecked: true
};