import ClassificationTitle from '../ClassificationTitle.vue';
import { dummyClassfication } from '@/testdata/testdata.js';

export default {
  title: 'Organisns/Title/ClassificationTitle',
  component: ClassificationTitle,
  parameters: {
    notes: {
      summary: '分類リストページタイトル'
    }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationTitle },
  template:
    '<classification-title v-bind="$props">ダミー : ダミータグ</classification-title>'
});

export const Default = Template.bind({});
Default.args = {
  imgUrl: dummyClassfication[0].img.url
};
