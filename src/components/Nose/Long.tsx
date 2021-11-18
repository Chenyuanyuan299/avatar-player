import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px"
            viewBox="0 0 502 502"
            style={{
                position: 'absolute',
                bottom: '28%',
                left:'-8%'
            }}>
            <path d="M485.13,336.44c1.93,0,1.93-3,0-3C483.2,333.44,483.2,336.44,485.13,336.44L485.13,336.44z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
            ></path>  
            <path d="M276.87,278.36c17.79,2.75,35.86,3.23,53.77,1.34c-0.48-0.37-0.96-0.73-1.45-1.1 c0.56,3.55-2.06,6.85-4.97,8.53c-3.47,1.99-7.61,2.38-11.5,2.79c-9.17,0.97-18.34,1.94-27.51,2.91c-1.9,0.2-1.92,3.2,0,3 c10.18-1.08,20.4-1.95,30.55-3.26c4.27-0.55,8.6-1.49,12.01-4.28c3.13-2.57,4.97-6.44,4.32-10.49c-0.09-0.59-0.85-1.16-1.45-1.1 c-17.62,1.86-35.46,1.47-52.97-1.23C275.78,275.18,274.97,278.07,276.87,278.36L276.87,278.36z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"/>
        </svg>
    );
  },
});
