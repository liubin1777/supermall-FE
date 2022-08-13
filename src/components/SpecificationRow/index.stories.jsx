import React from 'react';
import Component from './index';
import mockData from './mock';
import formatData from './format';

export default {
  title: 'SuperMall/Common/SpecificationRow',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Component {...args} />;
const formatedMockData = formatData(mockData.data);

export const Primary = Template.bind({});
Primary.args = {
  data: {
    title: '可选',
    desc: '颜色分类 | 尺码表',
    arrow: {
      size: '18',
      color: '#7F7F7F'
    }
  },
};
