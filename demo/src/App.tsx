import { defineComponent } from 'vue';
import { Avatar, genConfig } from 'avatar-player';

import './index.css'
import { wrap } from 'module';

export default defineComponent({
  name: 'App',
  setup() {
    let config = genConfig()
    const handlePullMenu = () => {
      document.getElementById("menu").style.marginRight = "0px"
    }
    const handlePushMenu = () => {
      document.getElementById("menu").style.marginRight = "-550px"
    }
  // const shape = ['circle', 'rounded', 'square'];
  // const sex = ['male', 'female'];
  // const faceColor = ['#f9c9b6', '#ac6651', '#FAEBD7', '#FFEFD5', 
  //   '#FFEBCD','#FFE4C4','#FFDAB9','#FFDEAD','#FFE4B5'
  // ];
  // const hairColor = ['#000', '#fff', '#77311d', '#fc909f', '#d2eff3', '#506af4', '#f48150'];
  // const hatColor = ['#000', '#fff', '#77311d', '#fc909f', '#d2eff3', '#506af4', '#f48150'];
  // const shirtColor = ['#9287ff', '#6bd9e9', '#fc909f', '#f4d150', '#77311d'];
  // const bgColor = ['#9287ff', '#6bd9e9', '#fc909f', '#f4d150', '#e0ddff',
  //   '#d2eff3', '#ffedef', '#ffeba4', '#506af4', '#f48150', '#74d153',];
  // const earStyle: EarStyle[] = ['small', 'big'];
  // const eyebrowFemale: EyebrowStyle[] = ['upMale', 'upFemale', 'human'];
  // const eyebrowMale: EyebrowStyle[] = ['upMale', 'human'];
  // const eyesStyle: EyesStyle[] = ['circle', 'oval', 'smile', 'cry', 'shining'];
  // const glassesStyle: GlassesStyle[] = ['round', 'square', 'roundlens', 'squarelens', 'flower', 'star', 'none'];
  // const hairStyleMale: HairStyle[] = ['normal', 'thick', 'mohawk', 'boyshort', 'tall' ]
  // const hairStyleFemale: HairStyle[] = ['normal', 'femaleLong', 'femaleShort', 
  //     'doublelong', 'doubleshort', 'straightlong'];
  // const hatStyle: HatStyle[] = ['beanie', 'turban', 'butterfly', 'cap', 'none'];
  // const mouthStyle: MouthStyle[] = ['laugh', 'smile', 'peace', 'bobo', 'kid'];
  // const noseStyle: NoseStyle[] = ['short', 'long', 'round', 'straight'];
  // const shirtStyle: ShirtStyle[] = ['hoody', 'short', 'polo', 'squareneck', 'turtleneck'];
  // const sex: AvatarSex[] = ['male', 'female'];

    // const facial = [ Hat, Hair, Eyebrow, Eyes, Glasses, Ear, Nose, Mouth, Shirt ];
    return () => (
      <section id="demo-container">
        <div id="pullMenu" onClick={handlePullMenu}>MENU</div>
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
          <p>Let's get start!</p>
        </div>
        <span id="back-circle"></span>
        <section id="menu">
          <div style={{margin: "80px 30px"}}>
            <div id="back" style="cursor:pointer;" onClick={handlePushMenu}>
              Back
            </div>

            <div style={{display: 'flex', height: '80px', width: 'full', margin: '40px 20px', justifyContent: 'center'}}>
              <div>
                <div style={{width: '60px', height: '60px',margin: '10px', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>shape</span>
              </div>
              <div>
                <div style={{width: '60px', height: '60px',margin: '10px', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>sex</span>
              </div>
            </div>

            <div style={{display: 'flex', height: '80px', width: 'full', margin: '40px 20px', justifyContent: 'center'}}>
              <div>
                <div style={{width: '60px', height: '60px',margin: '10px', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>faceColor</span>
              </div>
              <div>
                <div style={{width: '60px', height: '60px',margin: '10px', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>hairColor</span>
              </div>
              <div>
                <div style={{width: '60px', height: '60px',margin: '10px', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>hatColor</span>
              </div>
              <div>
                <div style={{width: '60px', height: '60px',margin: '10px', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>shirtColor</span>
              </div>
              <div>
                <div style={{width: '60px', height: '60px',margin: '10px', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>bgColor</span>
              </div>
            </div>

            <div style={{display: 'flex', height: '80px', width: 'full', margin: '60px 20px', justifyContent: 'center', flexWrap: 'wrap'}}>
              <div style={{flex: '0 0 25%', margin: '20px 10px'}}>
                <div style={{width: '60px', height: '60px',margin: 'auto', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>Hat</span>
              </div>
              <div style={{flex: '0 0 25%', margin: '20px 10px'}}>
                <div style={{width: '60px', height: '60px',margin: 'auto', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>Hair</span>
              </div>
              <div style={{flex: '0 0 25%', margin: '20px 10px'}}>
                <div style={{width: '60px', height: '60px',margin: 'auto', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>Eyebrow</span>
              </div>
              <div style={{flex: '0 0 25%', margin: '20px 10px'}}>
                <div style={{width: '60px', height: '60px',margin: 'auto', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>Eyes</span>
              </div>
              <div style={{flex: '0 0 25%', margin: '20px 10px'}}>
                <div style={{width: '60px', height: '60px',margin: 'auto', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>Glasses</span>
              </div>
              <div style={{flex: '0 0 25%', margin: '20px 10px'}}> 
                <div style={{width: '60px', height: '60px',margin: 'auto', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>Ear</span>
              </div>
              <div style={{flex: '0 0 25%', margin: '20px 10px'}}>
                <div style={{width: '60px', height: '60px',margin: 'auto', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>Nose</span>
              </div>
              <div style={{flex: '0 0 25%', margin: '20px 10px'}}>
                <div style={{width: '60px', height: '60px',margin: 'auto', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>Mouth</span>
              </div>
              <div style={{flex: '0 0 25%', margin: '20px 10px'}}>
                <div style={{width: '60px', height: '60px',margin: 'auto', borderRadius: '9999px', backgroundColor: 'black'}} ></div>
                <span>sex</span>
              </div>
            </div>

          </div>
        </section>
      </section>
    );
  },
});
