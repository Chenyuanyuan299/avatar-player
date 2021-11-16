import { defineComponent } from 'vue';

// Components
import UpMale from './UpMale';
import UpFemale from './UpFemale';

// Utils
import createName from '@/utils/createName';

// Types
import type { PropType } from 'vue';

export type EyeBrowStyle = 'upMale' | 'upFemale';

export default defineComponent({
  name: createName('avatar', 'eye', 'brow'),

  props: {
    type: String as PropType<EyeBrowStyle>,
  },

  setup(props) {
    const renderEyeBrow = () => {
      switch (props.type) {
        case 'upMale':
          return <UpMale />;
        case 'upFemale':
          return <UpFemale />;
        default:
          return <UpMale />;
      }
    };

    return () => <>{renderEyeBrow()}</>;
  },
});
