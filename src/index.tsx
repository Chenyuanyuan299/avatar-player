import withInstall from './utils/withInstall';
import Avatar, { genConfig } from './Avatar';

export default withInstall(Avatar);
export { Avatar, genConfig };
export type { WithInstall } from './utils/withInstall';
export type { EarStyle } from './components/Ear';
export type { EyesStyle } from './components/Eyes';
export type { GlassesStyle } from './components/Glasses';
export type { HairStyle } from './components/Hair';
export type { HatStyle } from './components/Hat';
export type { MouthStyle } from './components/Mouth';
export type { NoseStyle } from './components/Nose';
export type { ShirtStyle } from './components/Shirt';
export type {
  AvatarShape,
  AvatarSex,
  Options,
  Configs,
  PickRandomFromList,
  GenConfig,
} from './Avatar';
