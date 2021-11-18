import { defineComponent } from 'vue';

// Components
import UpMale from './UpMale';
import UpFemale from './UpFemale';
import Human from './Human';

// Utils
import createName from '@/utils/createName';

// Types
import type { PropType } from 'vue';


export type EyebrowStyle = 'upMale' | 'upFemale' | 'human';

export default defineComponent({
  name: createName('avatar', 'eye', 'brow'),

  props: {
    type: String as PropType<EyebrowStyle>,
  },

  setup(props) {
    const renderEyeBrow = () => {
      switch (props.type) {
        case 'upMale':
          return <UpMale />;
        case 'upFemale':
          return <UpFemale />;
        case 'human':
          return <Human />
        default:
          return <UpMale />;
      }
    };

    return () => <>{renderEyeBrow()}</>;
  },
});
