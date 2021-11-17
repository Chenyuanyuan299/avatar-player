import { defineComponent,reactive } from 'vue';
import { Avatar, genConfig } from 'avatar-player';
// import { Homepage} from 'homepage';
import './demo.css'
export default defineComponent({
  name: 'App',
  setup() {
    // var menu=true;
    const config = genConfig();
    const user=reactive({menu:true})
    const choices = ['Hat', 'Hair', 'Eyebrow', 'Glasses', 'Eyes', 'Nose', 'Mouth', 'Tshirt', 'Face'];
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
        {
          user.menu?<section id="menu">
              <div id="back" style="cursor:pointer;" onClick={()=>document.getElementById("menu").style.marginRight="-550px"}>Back</div>
              {choices.map(pro => {
                return (
                  <div id="" class="choice-container">
                    <div class="choices"></div>
                    <div style='margin-top:15px;'>
                      <span class="sweep-right"></span>{pro}<span class="sweep-left"></span>
                    </div>
                  </div>
                )
              })}
          </section> : null
        }
      </section>
    );
  },
});
