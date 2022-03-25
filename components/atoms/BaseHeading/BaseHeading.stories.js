import BaseHeading from './BaseHeading.vue';

export default {
  title: 'atoms/BaseHeading',
  component: BaseHeading
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BaseHeading },
  template: '<base-heading v-bind="$props">ダミーテキスト</base-heading>'
});

export const Default = Template.bind({});
Default.args = { hLv: '1' };
