import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        color: String,
        lightColor: String,
    },

    setup(props) {
        return () => (
            <svg style={{
                position: 'absolute',
                bottom: '-2%',
                width: '98%',
                height: '26%',
              }} 
              fill="none"
              id="图层_1" data-name="图层 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280.6 78.56">
            <path 
            fill={props.color}
            d="M182.58,24.05h.28c46.13,3.8,73.79,24.29,93.86,52.51H3.4C19.7,47.21,42.88,28.56,80.47,20c16-3.65,31.56,7.79,53.45,7.79,9.45,0,19.92-11.82,26.9-9.92,2.59.71,5.19,1.5,7.85,2.31C173.07,21.52,177.64,22.91,182.58,24.05Z" transform="translate(0 0)" style="stroke:#000;stroke-width:4px"/>
            <path 
            fill={props.lightColor}
            d="M73,13.53,78.11,2.58a1,1,0,0,1,1.25-.52C128.8,26.8,156.8,18.67,183.8,5.64a1,1,0,0,1,1.08.37l6.68,9.14c25.14,15.55-7.72,50.92-15.46,50.14-21.16,5.16-83.62-16-97.2-38.28C78.05,20.94,70.4,19.09,73,13.53Z" transform="translate(0 0)" style="stroke:#000;stroke-width:4px"/>
            </svg>
        );
    },
});
