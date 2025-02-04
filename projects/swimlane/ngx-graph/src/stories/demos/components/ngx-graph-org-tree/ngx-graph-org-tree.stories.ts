import type { Meta, StoryObj } from '@storybook/angular';
// import { fn } from '@storybook/test';

import { NgxGraphOrgTreeComponent } from './ngx-graph-org-tree.component';

const meta: Meta<NgxGraphOrgTreeComponent> = {
  title: 'Example/NgxGraphOrgTreeComponent',
  component: NgxGraphOrgTreeComponent,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  args: {}
};

export default meta;
type Story = StoryObj<NgxGraphOrgTreeComponent>;

export const OrgChart: Story = {
  args: {}
};
