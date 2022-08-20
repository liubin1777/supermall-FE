import React from 'react';
import Component from './index';

export default {
  title: 'SuperMall/Common/Loading',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Component {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};
