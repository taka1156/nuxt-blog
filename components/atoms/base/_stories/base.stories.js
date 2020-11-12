import { storiesOf } from '@storybook/vue';
import { object } from '@storybook/addon-knobs';
import BaseBtn from '../BaseBtn.vue';
import BaseText from '../BaseText.vue';
import BaseImg from '../BaseImg.vue';
import { dummyImg } from '@/testdata/testdata.js';

storiesOf('Atoms/Base/BaseBtn', module).add(
  'default',
  () => ({
    components: { BaseBtn },
    template: '<base-btn>Button</base-btn>'
  }),
  {
    info: {
      summary: 'ボタン'
    }
  }
);

storiesOf('Atoms/Base/BaseImg', module)
  .add(
    'base-img--sm',
    () => ({
      components: { BaseImg },
      template:
        '<base-img class="base-img--sm" :img-url="navItem.img" :img-alt="navItem.imgAlt" />',
      props: {
        navItem: {
          type: object,
          default: object('navItem', dummyImg)
        }
      }
    }),
    {
      info: {
        summary: '画像'
      }
    }
  )
  .add(
    'base-img--lg',
    () => ({
      components: { BaseImg },
      template:
        '<base-img class="base-img--lg" :img-url="navItem.img" :img-alt="navItem.imgAlt" />',
      props: {
        navItem: {
          type: object,
          default: object('navItem', {
            img: 'http://placehold.jp/150x150.png',
            imgAlt: 'ダミーの画像'
          })
        }
      }
    }),
    {
      info: {
        summary: '画像'
      }
    }
  );

storiesOf('Atoms/Base/BaseText', module)
  .add(
    'base-text--white',
    () => ({
      components: { BaseText },
      template: '<base-text class="base-text--white">Text</base-text>'
    }),
    {
      info: {
        summary: 'テキスト'
      }
    }
  )
  .add(
    'base-text--green',
    () => ({
      components: { BaseText },
      template: '<base-text class="base-text--green">Text</base-text>'
    }),
    {
      info: {
        summary: 'テキスト'
      }
    }
  )
  .add(
    'base-text--badge',
    () => ({
      components: { BaseText },
      template: '<base-text class="base-text--badge">Text</base-text>'
    }),
    {
      info: {
        summary: 'テキスト'
      }
    }
  )
  .add(
    'base-text--pagenation',
    () => ({
      components: { BaseText },
      template: '<base-text class="base-text--pagenation">Text</base-text>'
    }),
    {
      info: {
        summary: 'テキスト'
      }
    }
  );
