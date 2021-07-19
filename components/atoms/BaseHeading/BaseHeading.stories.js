import BaseHeading from './BaseHeading.vue';

export default {
  title: 'atoms/BaseHeading',
  component: BaseHeading,
  argTypes: {
    hLv: {
      control: {
        type: 'inline-radio',
        options: ['1', '2', '3', '4', '5', '6']
      }
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseHeading },
  template: '<base-heading v-bind="$props">ダミーテキスト</base-heading>'
});

export const Default = Template.bind({});
Default.args = { hLv: '1' };
