import { defineComponent } from 'vue';

// Components
import Oval from './Oval';
import Smile from './Smile';
import Circle from './Circle';
import Cry from './Cry';
import Shining from './Shining';

// Types
import type { PropType } from 'vue';
export type EyesStyle = 'circle' | 'oval' | 'smile'| 'cry' | 'shining';

export default defineComponent({
  name: 'AvatarEyes',

  props: {
    type: String as PropType<EyesStyle>,
  },

  setup(props) {
    const renderEyes = () => {
      switch (props.type) {
        case 'cry' :
          return <Cry />;
        case 'shining':
          return <Shining />;
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
