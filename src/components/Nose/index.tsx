import { defineComponent } from 'vue';

// Components
import Long from './Long';
import Round from './Round';
import Short from './Short';
import Straight from './Straight';

// Utils
import createName from '@/utils/createName';

// Types
import type { PropType } from 'vue';
import { type } from 'os';

export type NoseStyle = 'short' | 'long' | 'round' | 'straight';

export default defineComponent({
  name: createName('avatar', 'nose'),

  props: {
    type: String as PropType<NoseStyle>,
  },

  setup(props) {
    const renderNose = () => {
      switch (props.type) {
        case 'short':
          return <Short />;
        case 'long':
          return <Long />;
        case 'round':
          return <Round />;
        case 'straight':
          return <Straight />;
        default:
          return <Short />;
      }
    };

    return () => <>{renderNose()}</>;
  },
});
