import { defineComponent } from 'vue';

// Components
import Thick from './Thick';
import Mohawk from './Mohawk';
import Normal from './Normal';
import FemaleLong from './FemaleLong';
import FemaleShort from './FemaleShort';
import BoyShort from './BoyShort';
import DoubleLong from './DoubleLong';
import DoubleShort from './DoubleShort';
import StraightShort from './StraightShort';
import StraightLong from './StraightLong';

// Types
import type { PropType } from 'vue';
export type HairStyle = 'normal' | 'thick' | 'mohawk' | 'femaleLong' | 'femaleShort'| 'boyshort' | 'doublelong' | 'doubleshort' | 'straightshort' | 'straightlong' ;

export default defineComponent({
  name: 'AvatarHair',

  props: {
    color: String,
    colorRandom: Boolean,
    type: String as PropType<HairStyle>,
  },

  setup(props) {
    const renderHair = () => {
      switch (props.type) {
        case 'normal':
          return <Normal color={props.color} />;
        case 'thick':
          return <Thick color={props.color} colorRandom={props.colorRandom} />;
        case 'mohawk':
          return <Mohawk color={props.color} colorRandom={props.colorRandom} />;
        case 'femaleLong':
          return <FemaleLong color={props.color} />;
        case 'femaleShort':
          return <FemaleShort color={props.color} />;
        case 'boyshort' :
            return <BoyShort color={props.color} />;
        case 'doublelong' :
            return <DoubleLong color={props.color} />;
        case 'doubleshort' :
            return <DoubleShort color={props.color} />;
        case 'straightshort' :
            return <StraightShort color={props.color} />;
        case 'straightlong' :
            return <StraightLong color={props.color} />;
        default:
          return <Normal color={props.color} />;
        
      }
    };

    return () => <>{renderHair()}</>;
  },
});
