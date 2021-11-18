import * as vue from 'vue';
import { PropType, CSSProperties } from 'vue';

// Types
declare type EarStyle = 'small' | 'big';
declare type EyebrowStyle = 'upMale' | 'upFemale';
declare type EyesStyle = 'circle' | 'oval' | 'smile';
declare type GlassesStyle = 'none' | 'round' | 'square';
declare type HairStyle = 'normal' | 'thick' | 'mohawk' | 'femaleLong' | 'femaleShort';
declare type HatStyle = 'none' | 'beanie' | 'turban';
declare type MouthStyle = 'laugh' | 'smile' | 'peace';
declare type NoseStyle = 'short' | 'long' | 'round';
declare type ShirtStyle = 'hoody' | 'short' | 'polo';
declare type AvatarShape = 'circle' | 'rounded' | 'square';
declare type AvatarSex = 'male' | 'female';

interface Options<T> {
  avoidList?: T[];
  usually?: T[];
}

interface Configs {
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

declare type PickRandomFromList = <T>(data: T[], options?: Options<T>) => T;
declare type GenConfig = (configs?: Configs) => Configs;
declare const genConfig: GenConfig;

declare const Avatar: vue.DefineComponent<{
  id: StringConstructor;
  class: StringConstructor;
  style: PropType<CSSProperties>;
  faceColor: StringConstructor;
  hairColor: StringConstructor;
  hatColor: StringConstructor;
  shirtColor: StringConstructor;
  bgColor: StringConstructor;
  hairColorRandom: BooleanConstructor;
  earStyle: PropType<EarStyle>;
  eyesStyle: PropType<EyesStyle>;
  glassesStyle: PropType<GlassesStyle>;
  hairStyle: PropType<HairStyle>;
  hatStyle: PropType<HatStyle>;
  mouthStyle: PropType<MouthStyle>;
  noseStyle: PropType<NoseStyle>;
  shirtStyle: PropType<ShirtStyle>;
  shape: {
    type: PropType<AvatarShape>;
    default: string;
  };
  sex: PropType<AvatarSex>;
},
  () => JSX.Element,
  unknown,
  {},
  {},
  vue.ComponentOptionsMixin,
  vue.ComponentOptionsMixin,
  Record<string, any>,
  string,
  vue.VNodeProps & vue.AllowedComponentProps & vue.ComponentCustomProps,
  Readonly<
    {
      hairColorRandom: boolean;
      shape: AvatarShape;
    } & {
      id?: string | undefined;
      class?: string | undefined;
      style?: CSSProperties | undefined;
      faceColor?: string | undefined;
      hairColor?: string | undefined;
      hatColor?: string | undefined;
      shirtColor?: string | undefined;
      bgColor?: string | undefined;
      earStyle?: EarStyle | undefined;
      eyesStyle?: EyesStyle | undefined;
      glassesStyle?: GlassesStyle | undefined;
      hairStyle?: HairStyle | undefined;
      hatStyle?: HatStyle | undefined;
      mouthStyle?: MouthStyle | undefined;
      noseStyle?: NoseStyle | undefined;
      shirtStyle?: ShirtStyle | undefined;
      sex?: AvatarSex | undefined;
    }
  >,
  {
    hairColorRandom: boolean;
    shape: AvatarShape;
  }
>;

type WithInstall = {
  install: (app: vue.App) => void;
};
declare const _default: WithInstall;
export default _default;

export {
  WithInstall,
  Avatar,
  Options,
  Configs,
  PickRandomFromList,
  GenConfig,
  genConfig,
  AvatarShape,
  AvatarSex,
  EarStyle,
  EyebrowStyle,
  EyesStyle,
  GlassesStyle,
  HairStyle,
  HatStyle,
  MouthStyle,
  NoseStyle,
  ShirtStyle,
};
