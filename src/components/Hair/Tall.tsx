import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        color: String
    },

    setup(props) {
        return () => (
          <svg id="图层_1" 
            style={{
              position: 'absolute',
              bottom: '35%',
              left: '-1%',
              width: '94%',
              height: '71%',
            }} 
            data-name="图层 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 247.84 316.02">
            <path 
              fill={props.color} 
              d="M162.23,286.3c-7.08-35.4,152.64-25.37,205.43-53.78a19.52,19.52,0,0,0,8-26c-20.34-40.09-44.75-91-75.41-99.2-49.51-13.18-84.43,40.92-117,88-19.64,28.4-51.69,40.09-48,73,5,44.24,25.19,99.09,62,140C197.23,408.3,170.23,326.3,162.23,286.3Z" 
              transform="translate(-132.43 -102.79)" 
              style="stroke:#333;stroke-miterlimit:10;stroke-width:5px"
            />
          </svg>
        );
    },
});
