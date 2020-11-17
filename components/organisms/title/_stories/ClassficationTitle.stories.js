import ClassificationTitle from '../ClassificationTitle.vue';
import {
  dummyClassificationTag,
  dummyClassificationCategory
} from '@/__testdata__/testdata.js';

export default {
  title: 'Organisns/Title/ClassificationTitle',
  component: ClassificationTitle,
  parameters: {
    notes: {
      summary: '分類リストページタイトル'
    }
  }
};

const Template1 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationTitle },
  template:
    '<classification-title v-bind="$props">ダミー : ダミータグ</classification-title>'
});

const Template2 = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { ClassificationTitle },
  template:
    '<classification-title v-bind="$props">ダミー : ダミ-カテゴリー</classification-title>'
});

export const Tag = Template1.bind({});
Tag.args = {
  imgUrl: dummyClassificationTag[0].img.url
};

export const Category = Template2.bind({});
Category.args = {
  imgUrl: dummyClassificationCategory[0].img.url
};
