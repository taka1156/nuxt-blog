import BaseBtn from '../BaseBtn.vue';

export default {
  title: 'Atoms/Base/BaseBtn',
  component: BaseBtn,
  parameters: {
    notes: {
      summary: 'ボタン'
    }
  }
};

const Template = () => ({
  components: { BaseBtn },
  template: '<base-btn>Button</base-btn>'
});

export const Default = Template.bind({});
