import React from 'react';
import Component from './index';
import mockData from './mock';
import formatData from './format';

export default {
  title: 'SuperMall/Common/PriceLabel',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Component {...args} />;
const formatedMockData = formatData(mockData.data);

export const Primary = Template.bind({});
Primary.args = {
  price: '649.00',
  size: 52,
  color: 'blue',
};

export const Small = Template.bind({});
Small.args = {
  price: '649.00',
  size: 20,
  color: 'green',
};