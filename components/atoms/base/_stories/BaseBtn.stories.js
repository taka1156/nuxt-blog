import BaseBtn from '../BaseBtn.vue';

export default {
  title: 'Atoms/Base/BaseBtn',
  component: BaseBtn,
  argTypes: { btnClick: { action: 'clicked' } },
  parameters: {
    notes: {
      summary: 'ボタン'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseBtn },
  template: '<base-btn @btn-click="btnClick">Button</base-btn>'
});

export const Default = Template.bind({});
