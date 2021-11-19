import { defineComponent,reactive } from 'vue';
import { Avatar, genConfig } from 'avatar-player';
import Face from "avatar-player/components/Face/index"
import Hair from "avatar-player/components/Hair/index"
import Hat from "avatar-player/components/Hat/index"
import Eyebrow from 'avatar-player/components/Eyebrow/index';
import Eyes from "avatar-player/components/Eyes/index"
import Glasses from "avatar-player/components/Glasses/index"
import Ear from "avatar-player/components/Ear/index"
import Nose from "avatar-player/components/Nose/index"
import Mouth from "avatar-player/components/Mouth/index"
import Shirt from "avatar-player/components/Shirt/index"
import './index.css'


export default defineComponent({
  name: 'App',
  setup() {
    // var menu=true;
    const config = genConfig();
    const user=reactive({menu:true})

    const faceColor = ['#f9c9b6', '#ac6651'];
    const hairColor = ['#000', '#fff', '#77311d', '#fc909f', '#d2eff3', '#506af4', '#f48150'];
    const hatColor = ['#000', '#fff', '#77311d', '#fc909f', '#d2eff3', '#506af4', '#f48150'];
    const shirtColor = ['#9287ff', '#6bd9e9', '#fc909f', '#f4d150', '#77311d'];
    const bgColor = ['#9287ff', '#6bd9e9', '#fc909f', '#f4d150', '#e0ddff', '#d2eff3', '#ffedef', '#ffeba4', '#506af4', '#f48150', '#74d153'];
    
    const earStyle = ['small', 'big'];
    const eyebrowFemale = ['upMale', 'upFemale'];
    const eyesStyle = ['circle', 'oval', 'smile'];
    const glassesStyle = ['round', 'square', 'none'];
    const hairStyleMale = ['normal', 'thick', 'mohawk'];
    const hairStyleFemale = ['normal', 'femaleLong', 'femaleShort'];
    const hatStyle = ['none', 'beanie', 'turban'];
    const mouthStyle = ['laugh', 'smile', 'peace'];
    const noseStyle = ['short', 'long', 'round'];
    const shirtStyle = ['hoody', 'short', 'polo'];
    const sex = ['male', 'female'];

    // const facial = [ Hat, Hair, Eyebrow, Eyes, Glasses, Ear, Nose, Mouth, Shirt ];
    return () => (
      <section id="demo-container">
        <div id="pullMenu" onClick={()=>document.getElementById("menu").style.marginRight="0px"}>MENU</div>
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
        { user.menu ? (
            <section id="menu">
              <div id="back" style="cursor:pointer;" onClick={()=>document.getElementById("menu").style.marginRight="-550px"}>
                Back
              </div>
              <div class="choice-container">
                <div class="choices">
                  <Hair type='mohawk' />
                </div>
                <div style={{marginTop: '15px'}}>
                  <span class="sweep-right" />
                  <span>Hair</span>
                  <span class="sweep-left"/>
                </div>
              </div>
              <div class="choice-container">
                <div class="choices">

                </div>
                <div style='margin-top:15px;'>
                  <span class="sweep-right" />

                  <span class="sweep-left"/>
                </div>
              </div>
              <div class="choice-container">
                <div class="choices">
                </div>
                <div style='margin-top:15px;'>
                  <span class="sweep-right" />

                  <span class="sweep-left"/>
                </div>
              </div>
              <div class="choice-container">
                <div class="choices">
                </div>
                <div style='margin-top:15px;'>
                  <span class="sweep-right" />

                  <span class="sweep-left"/>
                </div>
              </div>
              <div class="choice-container">
                <div class="choices">
                </div>
                <div style='margin-top:15px;'>
                  <span class="sweep-right" />

                  <span class="sweep-left"/>
                </div>
              </div>
              <div class="choice-container">
                <div class="choices">
                </div>
                <div style='margin-top:15px;'>
                  <span class="sweep-right" />

                  <span class="sweep-left"/>
                </div>
              </div>
            </section>
          ) : null
        }
      </section>
    );
  },
});
