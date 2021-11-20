import { defineComponent } from 'vue';

// Components
import Round from './Round';
import Square from './Square';
import RoundLens from './RoundLens';
import SquareLens from './SquareLens';

// Types
import type { PropType } from 'vue';
export type GlassesStyle = 'round' | 'square' | 'none' | 'roundlens' | 'squarelens';

export default defineComponent({
  name: 'AvatarGlasses',

  props: {
    type: String as PropType<GlassesStyle>,
  },

  setup(props) {
    const renderGlasses = () => {
      switch (props.type) {
        case 'none':
          return;
        case 'round':
          return <Round />;
        case 'square':
          return <Square />;
        case 'roundlens':
          return <RoundLens />;
        case 'squarelens':
          return <SquareLens />;
        default:
          return;
      }
    };

    return () => <>{renderGlasses()}</>;
  },
});
