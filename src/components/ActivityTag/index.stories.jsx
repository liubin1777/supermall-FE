import React from 'react';
import Component from './index';
import mockData from './mock';
import formatData from './format';

export default {
  title: 'SuperMall/Common/ActivityTag',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Component {...args} />;
const formatedMockData = formatData(mockData.data);

export const Primary = Template.bind({});
Primary.args = {
  desc: '店铺券满100减50',
  size: 52,
};

export const Small = Template.bind({});
Small.args = {
  desc: '跨店满200减30',
  size: 20,
};