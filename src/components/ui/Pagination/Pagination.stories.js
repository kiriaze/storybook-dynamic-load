import React from 'react';
import { Pagination } from './Pagination';

// pagination data example
const data = [
  {
      id: 0,
      title: 'Home',
      content: 'Home content'
  },
  {
      id: 1,
      title: 'About',
      content: 'About content'
  },
  {
      id: 2,
      title: 'Portfolio',
      content: 'Portfolio content'
  },
  {
    id: 3,
    title: 'Contact Us',
    content: 'Contact content'
  }
]
//

export default {
  title: 'UI/Pagination',
  component: Pagination
};

const Template = (args) => {
  return (  
    <Pagination {...args} />
  )
}

export const Default = Template.bind({});
Default.args = {
  label: 'Pagination',
  data: data
};