import React from 'react';
import Component from './index';
import mockData from './mock';
import formatData from './format';

export default {
  title: 'SuperMall/GoodsDetailPage/PictureDetail',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Component {...args} />;
const formatedMockData = formatData(mockData.data);
export const Primary = Template.bind({});
Primary.args = {
  data: formatedMockData,
};