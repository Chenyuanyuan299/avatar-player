import { defineComponent } from 'vue';

// Components
import Beanie from './Beanie';
import Turban from './Turban';
import Butterfly from './Butterfly';
import Cap from './Cap';

// Types
import type { PropType } from 'vue';
export type HatStyle = 'beanie' | 'turban' | 'butterfly' | 'cap' | 'none';

export default defineComponent({
  name: 'AvatarHat',

  props: {
    color: String,
    type: String as PropType<HatStyle>,
  },

  setup(props) {
    const renderHat = () => {
      switch (props.type) {
        case 'none':
          return;
        case 'beanie':
          return <Beanie color={props.color} />;
        case 'turban':
          return <Turban color={props.color} />;
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
