import React from 'react';
import { Tabs } from './Tabs';

// tabs example
const data = [
  {
      id: 0,
      title: 'Tab 1',
      content: 'Tab content 1'
  },
  {
      id: 1,
      title: 'Tab 2',
      content: 'Tab content 2'
  },
  {
      id: 2,
      title: 'Tab 3',
      content: 'Tab content 3'
  },
  {
    id: 3,
    title: 'Tab 4',
    content: 'Tab content 4'
  }
]

export default {
  title: 'UI/Tabs',
  component: Tabs
};

const Template = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Tabs',
  data: data
};