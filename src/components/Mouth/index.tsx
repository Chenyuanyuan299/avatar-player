import { defineComponent } from 'vue';

// Components
import Laugh from './Laugh';
import Smile from './Smile';
import Peace from './Peace';

// Types
import type { PropType } from 'vue';

export type MouthStyle = 'laugh' | 'smile' | 'peace';

export default defineComponent({
  name: 'AvatarMouth',

  props: {
    type: String as PropType<MouthStyle>,
  },

  setup(props) {
    const renderMouth = () => {
      switch (props.type) {
        case 'laugh':
          return <Laugh />;
        case 'smile':
          return <Smile />;
        case 'peace':
          return <Peace />;
        default:
          return <Peace />;
      }
    };

    return () => <>{renderMouth()}</>;
  },
});
