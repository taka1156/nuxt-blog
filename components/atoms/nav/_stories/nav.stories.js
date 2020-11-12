import { storiesOf } from '@storybook/vue';
import { boolean } from '@storybook/addon-knobs/vue';
import NavIcon from '../NavIcon.vue';
import NavLogo from '../NavLogo.vue';

storiesOf('Atoms/Nav/NavLogo', module).add(
  'default',
  () => ({
    components: { NavLogo },
    template: '<nav-logo>Text</nav-logo>'
  }),
  {
    info: {
      summary: 'ナビゲーションバーのロゴ表示'
    }
  }
);

storiesOf('Atoms/Nav/NavIcon', module).add(
  'default',
  () => ({
    components: { NavIcon },
    template: '<nav-icon :is-open="isOpen" />',
    props: {
      isOpen: {
        type: Boolean,
        default: boolean('isOpen', false)
      }
    }
  }),
  {
    info: {
      summary: 'ナビゲーションの開閉のアイコン表示'
    }
  }
);
