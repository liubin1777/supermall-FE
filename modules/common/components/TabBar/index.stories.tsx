import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from './index';
import mockData from './mock';
import formatData from './format';

export default {
  title: 'SuperMall/TabBar',
  component: Component,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />;
const formatedMockData = formatData(mockData.data);

export const Primary = Template.bind({});
Primary.args = {
  data: formatedMockData,
};