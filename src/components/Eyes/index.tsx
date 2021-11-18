import { defineComponent } from 'vue';

// Components
import Oval from './Oval';
import Smile from './Smile';
import Circle from './Circle';

// Types
import type { PropType } from 'vue';

export type EyesStyle = 'circle' | 'oval' | 'smile';

export default defineComponent({
  name: 'AvatarEyes',

  props: {
    type: String as PropType<EyesStyle>,
  },

  setup(props) {
    const renderEyes = () => {
      switch (props.type) {
        case 'circle':
          return <Circle />;
        case 'oval':
          return <Oval />;
        case 'smile':
          return <Smile />;
        default:
          return <Oval />;
      }
    };

    return () => <>{renderEyes()}</>;
  },
});
