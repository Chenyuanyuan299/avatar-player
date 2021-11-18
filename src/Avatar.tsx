import { defineComponent } from 'vue';

// Components
import Ear from './components/Ear';
import Eyebrow from './components/Eyebrow';
import Eyes from './components/Eyes';
import Face from './components/Face';
import Glasses from './components/Glasses';
import Hair from './components/Hair';
import Hat from './components/Hat';
import Mouth from './components/Mouth';
import Nose from './components/Nose';
import Shirt from './components/Shirt';

// Types
import type { PropType, CSSProperties } from 'vue';
import type { EarStyle } from './components/Ear';
import type { EyebrowStyle } from './components/Eyebrow';
import type { EyesStyle } from './components/Eyes';
import type { GlassesStyle } from './components/Glasses';
import type { HairStyle } from './components/Hair';
import type { HatStyle } from './components/Hat';
import type { MouthStyle } from './components/Mouth';
import type { NoseStyle } from './components/Nose';
import type { ShirtStyle } from './components/Shirt';
export type AvatarShape = 'circle' | 'rounded' | 'square';
export type AvatarSex = 'male' | 'female';
export interface Options<T> {
  avoidList?: T[];
  usually?: T[];
}
export interface Configs {
  faceColor?: string;
  hairColor?: string;
  hatColor?: string;
  shirtColor?: string;
  bgColor?: string;
  hairColorRandom?: boolean;
  earStyle?: EarStyle;
  eyebrowStyle?: EyebrowStyle;
  eyesStyle?: EyesStyle;
  glassesStyle?: GlassesStyle;
  hairStyle?: HairStyle;
  hatStyle?: HatStyle;
  mouthStyle?: MouthStyle;
  noseStyle?: NoseStyle;
  shirtStyle?: ShirtStyle;
  shape?: AvatarShape;
  sex?: AvatarSex;
}

export type PickRandomFromList = <T>(data: T[], options?: Options<T>) => T;
export type GenConfig = (configs?: Configs) => Configs;

const faceColor = ['#f9c9b6', '#ac6651'];
const hairColor = ['#000', '#fff', '#77311d',
  '#fc909f', '#d2eff3', '#506af4', '#f48150',
];
const hatColor = ['#000', '#fff', '#77311d',
  '#fc909f', '#d2eff3', '#506af4', '#f48150',
];
const shirtColor = ['#9287ff', '#6bd9e9', '#fc909f', '#f4d150', '#77311d'];
const bgColor = ['#9287ff', '#6bd9e9', '#fc909f', '#f4d150', '#e0ddff',
  '#d2eff3', '#ffedef', '#ffeba4', '#506af4', '#f48150', '#74d153',
];
const earStyle: EarStyle[] = ['small', 'big'];
const eyebrowFemale: EyebrowStyle[] = ['upMale', 'upFemale','human'];
const eyesStyle: EyesStyle[] = ['circle', 'oval', 'smile'];
const glassesStyle: GlassesStyle[] = ['round', 'square', 'none'];
const hairStyleMale: HairStyle[] = ['normal', 'thick', 'mohawk', 'beanie', 'turban'];
const hairStyleFemale: HairStyle[] = ['normal', 'femaleLong', 'femaleShort', 'beanie', 'turban'];
const hatStyle: HatStyle[] = ['none','butterfly','cap'];
const mouthStyle: MouthStyle[] = ['laugh', 'smile', 'peace'];
const noseStyle: NoseStyle[] = ['short', 'long', 'round','straight'];
const shirtStyle: ShirtStyle[] = ['hoody', 'short', 'polo'];
const sex: AvatarSex[] = ['male', 'female'];

const pickRandomFromList: PickRandomFromList = (
  data,
  { avoidList = [], usually = [] } = {},
) => {
  const avoidSet = new Set(avoidList.filter((item) => Boolean(item)));
  let myData = data.filter((item) => !avoidSet.has(item));

  const usuallyData = usually
    .filter(Boolean)
    .reduce(
      (acc, cur) => acc.concat(new Array(15).fill(cur)),
      [] as any[],
    );
  myData = myData.concat(usuallyData);

  const amount = myData.length;
  const randomIdx = Math.floor(Math.random() * amount);
  return myData[randomIdx];
};

export const genConfig: GenConfig = (userConfig = {}) => {
  const response: Configs = {};
  response.faceColor = userConfig.faceColor || pickRandomFromList(faceColor);
  response.earStyle = userConfig.earStyle || pickRandomFromList(earStyle);
  response.eyesStyle = userConfig.eyesStyle || pickRandomFromList(eyesStyle);
  response.glassesStyle = userConfig.glassesStyle || pickRandomFromList(glassesStyle, { usually: ['none'] });
  response.mouthStyle = userConfig.mouthStyle || pickRandomFromList(mouthStyle);
  response.noseStyle = userConfig.noseStyle || pickRandomFromList(noseStyle);
  response.shirtStyle = userConfig.shirtStyle || pickRandomFromList(shirtStyle);
  response.sex = userConfig.sex || pickRandomFromList(sex);

  // Hair
  let hairColorAvoidList: string[] = [];
  let hairColorUsually: string[] = [];
  if (!userConfig.hairColor) {
    switch (response.sex) {
      case 'female': {
        hairColorAvoidList = response.faceColor === faceColor[1] && ['#77311d'] || [];
        break;
      }
      case 'male': {
        hairColorUsually = ['#000'];
      }
    }
  }
  response.hairColor =
    userConfig.hairColor ||
    pickRandomFromList(hairColor, {
      avoidList: hairColorAvoidList,
      usually: hairColorUsually,
    });

  let myHairStyle = userConfig.hairStyle;
  if (!myHairStyle) {
    switch (response.sex) {
      case 'male': {
        myHairStyle = pickRandomFromList(hairStyleMale, { usually: ['normal', 'thick'] });
        break;
      }
      case 'female': {
        myHairStyle = pickRandomFromList(hairStyleFemale);
        break;
      }
    }
  }
  response.hairStyle = myHairStyle;

  // Hat
  response.hatStyle = userConfig.hatStyle || pickRandomFromList(hatStyle);
  response.hatColor = userConfig.hatColor || pickRandomFromList(hatColor, { avoidList: [response.hairColor] });

  // Eyebrow
  let myEyebrowStyle: EyebrowStyle = userConfig.eyebrowStyle || 'upMale';
  if (!userConfig.eyebrowStyle && response.sex === 'female') {
    myEyebrowStyle = pickRandomFromList(eyebrowFemale);
  }
  response.eyebrowStyle = myEyebrowStyle;

  // Shirt Color
  response.shirtColor =
    userConfig.shirtColor ||
    pickRandomFromList(shirtColor, { avoidList: [response.hairColor, response.hatColor] });

  // Background Color
  response.bgColor =
    userConfig.bgColor ||
    pickRandomFromList(bgColor, {
      avoidList: [response.hairColor, response.hatColor, response.shirtColor],
    });

  return response;
};

export default defineComponent({
  name: 'Avatar',

  props: {
    id: String,
    class: String,
    style: Object as PropType<CSSProperties>,
    faceColor: String,
    hairColor: String,
    hatColor: String,
    shirtColor: String,
    bgColor: String,
    hairColorRandom: Boolean,
    earStyle: String as PropType<EarStyle>,
    eyesStyle: String as PropType<EyesStyle>,
    glassesStyle: String as PropType<GlassesStyle>,
    hairStyle: String as PropType<HairStyle>,
    hatStyle: String as PropType<HatStyle>,
    mouthStyle: String as PropType<MouthStyle>,
    noseStyle: String as PropType<NoseStyle>,
    shirtStyle: String as PropType<ShirtStyle>,
    shape: {
      type: String as PropType<AvatarShape>,
      default: 'circle',
    },
    sex: String as PropType<AvatarSex>
  },

  setup(props) {
    const config = genConfig(props);

    // Background shape
    let borderRadius: string;
    switch (props.shape) {
      case 'circle': {
        borderRadius = '100%';
        break;
      }
      case 'rounded': {
        borderRadius = '6px';
        break;
      }
      case 'square': {
        borderRadius = '0';
        break;
      }
    }

    return () => (
      <div
        id={props.id}
        class={props.class}
        style={{
          background: config.bgColor,
          overflow: 'hidden',
          borderRadius,
          ...props.style,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '90%',
            }}
          >
            {
              config.hairStyle !== 'beanie' &&
              <Hat color={config.hatColor} type={config.hatStyle} />
            }
            <Hair color={config.hairColor} type={config.hairStyle} colorRandom={props.hairColorRandom} />
            <Face color={config.faceColor as string} />
            <div
              style={{
                position: 'absolute',
                right: '-3%',
                top: '30%',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Eyebrow type={config.eyebrowStyle} />
              <Eyes type={config.eyesStyle} />
              <Glasses type={config.glassesStyle} />
              <Ear color={config.faceColor} style={config.earStyle} />
              <Nose type={config.noseStyle} />
              <Mouth type={config.mouthStyle} />
            </div>
            <Shirt color={config.shirtColor} type={config.shirtStyle} />
          </div>
        </div>
      </div>
    );
  },
});
