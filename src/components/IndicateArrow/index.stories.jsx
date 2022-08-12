import React from 'react';
import Component from './index';
import mockData from './mock';
import formatData from './format';

export default {
  title: 'SuperMall/Common/IndicateArrow',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Component {...args} />;
const formatedMockData = formatData(mockData.data);

export const Primary = Template.bind({});
Primary.args = {
  desc: '去领券',
  size: 50,
  color: '#E61F00'
};

export const OnlyArrow = Template.bind({});
OnlyArrow.args = {
  size: 50,
};