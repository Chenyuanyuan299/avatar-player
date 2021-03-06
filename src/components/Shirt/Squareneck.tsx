import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    color: String,
    lightColor: String,
  },

  setup(props) {
    return () => (
      <svg 
        id="图层_1" 
        data-name="图层 1" 
        xmlns="http://www.w3.org/2000/svg" 
        style={{
          position:"absolute",
          top: "50%",
          width: "90%",
          height: "90%",
          left: "5%",
        }} 
        viewBox="0 0 280.62 60.8"
      >
        <path 
          d="M258,270.58l1.23-1.58L258,270.58l1.72,1.34,1.19-1.83h0l0-.06,0-.06a2.12,2.12,0,0,1,.13-.2c.15-.22.37-.56.67-1,.58-.85,1.45-2.07,2.54-3.52a111.55,111.55,0,0,1,9-10.53,59.87,59.87,0,0,1,12.12-9.93c4.32-2.53,8.58-3.84,12.54-3.31C340.39,247.2,371.62,266,391.89,294H118.59c16.3-29.34,39.48-48,77.07-56.59a15.21,15.21,0,0,1,6.5.38,53,53,0,0,1,9.08,3.19,166.29,166.29,0,0,1,21,11.56c6.94,4.39,13.39,8.9,18.1,12.32,2.36,1.71,4.28,3.14,5.61,4.14l1.53,1.17.4.31.1.07,0,0Z" 
          transform="translate(-115.19 -235.2)" 
          style="fill:#f4d150;stroke:#000;stroke-width:4px"
        />
      </svg>
    );
  },
});
