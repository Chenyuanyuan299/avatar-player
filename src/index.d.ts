import * as vue from 'vue';
import { PropType, CSSProperties } from 'vue';

// 性别
declare type AvatarSex = 'male' | 'female';
// 帽子
declare type HatType = 'none' | 'beanie' | 'turban';
// 头发
declare type HairType = 'normal' | 'thick' | 'mohawk' | 'femaleLong' | 'femaleShort';
// 眉毛
declare type EyeBrowType = 'upMale' | 'upFemale';
// 眼睛
declare type EyesType = 'circle' | 'oval' | 'smile';
// 眼镜
declare type GlassesType = 'none' | 'round' | 'square';
// 耳朵
declare type EarSize = 'small' | 'big';
// 鼻子
declare type NoseType = 'short' | 'long' | 'round';
// 嘴巴
declare type MouthType = 'laugh' | 'smile' | 'peace';
// T恤
declare type ShirtType = 'hoody' | 'short' | 'polo';
// 头像外形
declare type AvatarShape = 'circle' | 'rounded' | 'square';

interface Options<T> {
  avoidList?: T[];
  usually?: T[];
}

interface Configs {
  sex?: AvatarSex;
  hatType?: HatType;
  hatColor?: string;
  hairType?: HairType;
  hairColor?: string;
  eyeBrowType?: EyeBrowType;
  eyeType?: EyesType;
  glassesType?: GlassesType;
  earSize?: EarSize;
  noseType?: NoseType;
  mouthType?: MouthType;
  faceColor?: string;
  shirtType?: ShirtType;
  shirtColor?: string;
  hairColorRandom?: boolean;
  bgColor?: string;
  shape?: AvatarShape;
}
// 随机选取
declare type PickRandomFromList = <T>(data: T[], options?: Options<T>) => T;
// 生成配置
declare type GenConfig = (configs?: Configs) => Configs;
// 生成配置函数
declare const genConfig: GenConfig;

declare const Avatar: vue.DefineComponent<
  {
    id: StringConstructor;
    class: StringConstructor;
    bgColor: StringConstructor;
    hatColor: StringConstructor;
    faceColor: StringConstructor;
    hairColor: StringConstructor;
    shirtColor: StringConstructor;
    hairColorRandom: BooleanConstructor;
    sex: PropType<AvatarSex>;
    style: PropType<CSSProperties>;
    earSize: PropType<EarSize>;
    hatType: PropType<HatType>;
    eyeType: PropType<EyesType>;
    hairType: PropType<HairType>;
    noseType: PropType<NoseType>;
    mouthType: PropType<MouthType>;
    shirtType: PropType<ShirtType>;
    glassesType: PropType<GlassesType>;
    shape: {
      type: PropType<AvatarShape>;
      default: string;
    };
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
      style?: CSSProperties | undefined;
      class?: string | undefined;
      id?: string | undefined;
      bgColor?: string | undefined;
      hatColor?: string | undefined;
      faceColor?: string | undefined;
      hairColor?: string | undefined;
      shirtColor?: string | undefined;
      sex?: AvatarSex | undefined;
      earSize?: EarSize | undefined;
      hatType?: HatType | undefined;
      eyeType?: EyesType | undefined;
      hairType?: HairType | undefined;
      noseType?: NoseType | undefined;
      mouthType?: MouthType | undefined;
      shirtType?: ShirtType | undefined;
      glassesType?: GlassesType | undefined;
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
  AvatarSex,
  AvatarShape,
  Configs,
  EarSize,
  EyeBrowType,
  EyesType,
  GenConfig,
  GlassesType,
  HairType,
  HatType,
  NoseType,
  Options,
  PickRandomFromList,
  ShirtType,
  genConfig,
};
