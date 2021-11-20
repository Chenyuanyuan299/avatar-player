import { defineComponent } from 'vue';
import { Avatar, genConfig } from 'avatar-player';

import './index.css'

export default defineComponent({
  name: 'App',
  setup() {
    let config = genConfig({glassesStyle:'square'})
    console.log(config.sex)
    const faceColor = ['#f9c9b6', '#ac6651'];
    const hairColor = ['#000', '#fff', '#77311d', '#fc909f', '#d2eff3', '#506af4', '#f48150'];
    const hatColor = ['#000', '#fff', '#77311d', '#fc909f', '#d2eff3', '#506af4', '#f48150'];
    const shirtColor = ['#9287ff', '#6bd9e9', '#fc909f', '#f4d150', '#77311d'];
    const bgColor = ['#9287ff', '#6bd9e9', '#fc909f', '#f4d150', '#e0ddff', '#d2eff3', '#ffedef', '#ffeba4', '#506af4', '#f48150', '#74d153'];
    
    // const eyebrowFemale: EyebrowStyle[] = ['upMale', 'upFemale', 'human'];
    // const glassesStyle: GlassesStyle[] = ['round', 'square', 'roundlens', 'squarelens', 'none'];
    // const hairStyleMale: HairStyle[] = ['normal', 'thick', 'mohawk', 'boyshort', 
    //   'doublelong', 'doubleshort', 'straightshort', 'straightlong'];
    // const hairStyleFemale: HairStyle[] = ['normal', 'femaleLong', 'femaleShort'];
    // const hatStyle: HatStyle[] = ['beanie', 'turban', 'butterfly', 'cap', 'none'];
    // const mouthStyle: MouthStyle[] = ['laugh', 'smile', 'peace', 'bobo', 'kid'];
    // const noseStyle: NoseStyle[] = ['short', 'long', 'round', 'straight'];
    // const shirtStyle: ShirtStyle[] = ['hoody', 'short', 'polo', 'squareneck', 'turtleneck'];
    // const sex: AvatarSex[] = ['male', 'female'];

    // const facial = [ Hat, Hair, Eyebrow, Eyes, Glasses, Ear, Nose, Mouth, Shirt ];
    return () => (
      <section id="demo-container">
        <div id="pullMenu" onClick={() => document.getElementById("menu").style.marginRight = "0px"}>MENU</div>
        <div id="avatar-container">
          <Avatar id="avatar" {...config} />
          <div id="getIt">
            !Get It!
          </div>
        </div>
        <div id="info">
          <h1>Avatar Player</h1>
          <p>Pull the menu to choose the style</p>
          <p>View change by refresh.</p>
          <p>Get your profile randomly</p>
          <p>Let's et start!</p>
        </div>
        <span id="back-circle"></span>
        <section id="menu">
          <div id="back" style="cursor:pointer;" onClick={() => document.getElementById("menu").style.marginRight = "-550px"}>
            Back
          </div>
        </section>
      </section>
    );
  },
});
