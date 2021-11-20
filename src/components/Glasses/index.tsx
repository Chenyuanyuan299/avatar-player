import { defineComponent } from 'vue';

// Components
import Round from './Round';
import Square from './Square';
import RoundLens from './RoundLens';
import SquareLens from './SquareLens';
import Star from './Star';
import Flower from './Flower'

// Types
import type { PropType } from 'vue';
export type GlassesStyle = 'round' | 'square' | 'none' | 'roundlens' | 'squarelens' | 'star' | 'flower';

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
        case 'flower': 
          return <Flower />
        case 'star':
          return <Star />
        default:
          return;
      }
    };

    return () => <>{renderGlasses()}</>;
  },
});
