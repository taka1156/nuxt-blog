import ClassficationTitle from '../ClassficationTitle.vue';
import { dummyClassfication } from '@/testdata/testdata.js';

export default {
  title: 'Organisns/Nav/ClassficationTitle',
  component: ClassficationTitle,
  parameters: {
    notes: {
      summary: '分類リストページタイトル'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassficationTitle },
  template:
    '<classfication-title v-bind="$props">ダミー : ダミータグ</classfication-title>'
});

export const Default = Template.bind({});
Default.args = {
  imgUrl: dummyClassfication[0].img.url
};
