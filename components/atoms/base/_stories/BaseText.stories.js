import BaseText from '../BaseText.vue';

export default {
  title: 'Atoms/Base/BaseText',
  component: BaseText,
  parameters: {
    notes: {
      summary: 'テキスト'
    }
  }
};

const Template1 = () => ({
  components: { BaseText },
  template: '<base-text class="base-text--white">Text</base-text>'
});

const Template2 = () => ({
  components: { BaseText },
  template: '<base-text class="base-text--green">Text</base-text>'
});

const Template3 = () => ({
  components: { BaseText },
  template: '<base-text class="base-text--badge">Text</base-text>'
});

const Template4 = () => ({
  components: { BaseText },
  template: '<base-text class="base-text--nav">Text</base-text>'
});

export const BaseTextWhite = Template1.bind({});
BaseTextWhite.parameters = {
  backgrounds: {
    default: 'dark'
  }
};
export const BaseTextGreen = Template2.bind({});
export const BaseTextBadge = Template3.bind({});
export const BaseTextNav = Template4.bind({});
