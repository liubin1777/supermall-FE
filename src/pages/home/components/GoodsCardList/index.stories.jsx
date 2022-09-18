import React from 'react';
import Component from './index';
import mockData from './mock';
import formatData from '../GoodsCard/format';

export default {
  title: 'SuperMall/HomePage/GoodsCardList',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Component {...args} />;
const formatedMockData = formatData(mockData);

export const Primary = Template.bind({});
Primary.args = {
  mockData: formatedMockData,
};