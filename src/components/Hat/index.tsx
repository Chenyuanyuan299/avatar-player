import { defineComponent } from 'vue';

// Components
import Butterfly from './Butterfly';
import Cap from './Cap';


// Utils
import createName from '@/utils/createName';

// Types
import type { PropType } from 'vue';

export type HatStyle = 'none' |'butterfly' | 'cap';

export default defineComponent({
  name: createName('avatar', 'hat'),

  props: {
    color: String,
    type: String as PropType<HatStyle>,
  },

  setup(props) {
    const renderHat = () => {
      switch (props.type) {
        case 'none':
          return;
        case 'butterfly':
          return <Butterfly />
        case 'cap':
          return <Cap />
        default:
          return;
      }
    };

    return () => <>{renderHat()}</>;
  },
});
