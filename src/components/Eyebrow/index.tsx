import { defineComponent } from 'vue';

// Components
import UpMale from './UpMale';
import UpFemale from './UpFemale';

// Types
import type { PropType } from 'vue';

export type EyebrowStyle = 'upMale' | 'upFemale';

export default defineComponent({
  name: 'AvatarEyebrow',

  props: {
    type: String as PropType<EyebrowStyle>,
  },

  setup(props) {
    const renderEyebrow = () => {
      switch (props.type) {
        case 'upMale':
          return <UpMale />;
        case 'upFemale':
          return <UpFemale />;
        default:
          return <UpMale />;
      }
    };

    return () => <>{renderEyebrow()}</>;
  },
});
