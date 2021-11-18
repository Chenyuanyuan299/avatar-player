import { defineComponent } from 'vue';

// Components
import Big from './Big';
import Small from './Small';

// Types
import type { PropType } from 'vue';
export type EarStyle = 'small' | 'big';

export default defineComponent({
  name: 'AvatarEar',

  props: {
    color: String,
    style: String as PropType<EarStyle>,
  },

  setup(props) {
    const renderEar = () => {
      switch (props.style) {
        case 'big':
          return <Big color={props.color} />;
        case 'small':
          return <Small color={props.color} />;
        default:
          return <Small color={props.color} />;
      }
    };

    return () => <>{renderEar()}</>
  }
})