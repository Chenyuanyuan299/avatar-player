import { defineComponent } from 'vue';

import Ear from './components/Ear';

import type { CSSProperties, PropType } from 'vue';
import type { EarSize } from './components/Ear';


export type AvatarShape = 'circle' | 'rounded' | 'square';
export type AvatarSex = 'male' | 'female';
export interface Options<T> {
  avoidList?: T[];
  usually?: T[];
}
export interface Configs {
  bgColor?: string;
  hatColor?: string;
  faceColor?: string;
  hairColor?: string;
  shirtColor?: string;
  hairColorRandom?: boolean;
  sex?: AvatarSex;
  earSize?: EarSize;
}
export type PickRandomFromList = <T>(data: T[], options?: Options<T>) => T;
export type GenConfig = (configs?: Configs) => Configs;

const ARRAY_LENGTH = 15;
const FACE_COLOR_INDEX = 1;

const sex: AvatarSex[] = ['male', 'female'];
const faceColor = ['#f9c9b6', '#ac6651'];
const earSize: EarSize[] = ['small', 'big'];
const hairColor = ['#000', '#fff', '#77311d', '#fc909f', '#d2eff3', '#506af4', '#f48150'];
const hatColor = ['#000', '#fff', '#77311d', '#fc909f', '#d2eff3', '#506af4', '#f48150'];
const shirtColor = ['#9287ff', '#6bd9e9', '#fc909f', '#f4d150', '#77311d'];
const bgColor = ['#9287ff', '#6bd9e9', '#fc909f', '#f4d150', '#e0ddff', '#d2eff3', '#ffedef', '#ffeba4', '#506af4', '#f48150', '#74d153'];

const _pickRandomFromList: PickRandomFromList = (
  data,
  { avoidList = [], usually = [] } = {},
) => {
  const avoidSet = new Set(avoidList.filter(Boolean));
  let myData = data.filter((item) => !avoidSet.has(item));
  // eslint-disable-next-line
  const usuallyData = usually
    .filter(Boolean)
    .reduce<any[]>(
      (acc, cur) => acc.concat(new Array(ARRAY_LENGTH).fill(cur)),
      [],
    );
  myData = myData.concat(usuallyData);
  myData = myData.concat(usuallyData);
  const amount = myData.length;
  const randomIdx = Math.floor(Math.random() * amount);
  return myData[randomIdx];
};

export const genConfig: GenConfig = (userConfig = {}) => {
  const response: Configs = {};

  response.sex = userConfig.sex || _pickRandomFromList(sex);
  response.faceColor = userConfig.faceColor || _pickRandomFromList(faceColor);
  response.earSize = userConfig.earSize || _pickRandomFromList(earSize);

  // Hair
  let hairColorAvoidList: string[] = [];
  let hairColorUsually: string[] = [];
  if (!userConfig.hairColor) {
    switch (response.sex) {
      case 'female': {
        hairColorAvoidList =
          (response.faceColor === faceColor[FACE_COLOR_INDEX] && ['#77311d']) ||
          [];
        break;
      }
      case 'male': {
        hairColorUsually = ['#000'];
      }
    }
  }
  response.hairColor =
    userConfig.hairColor ||
    _pickRandomFromList(hairColor, {
      avoidList: hairColorAvoidList,
      usually: hairColorUsually,
    });
  return response;
};

export default defineComponent({
  // name: createName('avatar'),

  props: {
    id: String,
    class: String,
    bgColor: String,
    hatColor: String,
    faceColor: String,
    hairColor: String,
    shirtColor: String,
    hairColorRandom: Boolean,
    sex: String as PropType<AvatarSex>,
    style: Object as PropType<CSSProperties>,
    earSize: String as PropType<EarSize>,
    shape: {
      type: String as PropType<AvatarShape>,
      default: 'circle',
    },
  },

  setup(props) {
    const config = genConfig(props);

    // 背景形状
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
            

            {/* Face Detail */}
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
            </div>
          </div>
        </div>
      </div>
    );
  },
});
