import { transform } from 'lodash';
import { defineComponent } from 'vue';

export default defineComponent({
props: {
color: String,
},

setup(props) {
        const color = props.color ?? 'black';
return () => (
<svg 
    style={{
            position: 'absolute' , 
            width: '180%' , 
            height: '180%' ,
            top:'-12%',
            right:'-55%',
    }}
    height="500" width="500"  
     version="1.1" 
     viewBox="0 0 500 800">

<path fill={color} stroke="#000000" stroke-width="8.73275" d="M170.474+83.204C164.191+79.7128+157.583+57.2119+148.378+49.775C133.356+37.6369+114.645+40.8788+103.129+48.5583C73.7531+68.1464+71.3972+101.226+61.8927+132.914C55.6891+153.598+45.8363+170.226+19.5622+167.792C11.0176+167.001+35.3139+218.597+41.4573+224.571C84.8393+266.757+121.765+198.752+151.663+156.031C159.674+144.584+179.034+175.646+179.034+161.143" stroke-linecap="butt" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="8.73275" d="M167.753+87.0364C171.848+77.9345+177.188+62.7468+181.586+56.6695C194.001+39.5146+209.483+38.8844+217.713+39.2305C229.129+39.7105+245.182+56.799+252.745+72.4863C262.433+92.581+282.776+136.23+293.616+143.459C308.213+153.192+337.041+151.57+337.041+151.57C337.041+151.57+328.506+185.528+312.227+207.537C296.656+228.588+263.683+227.271+254.205+223.76C241.082+218.898+223.552+192.532+208.225+154.003C201.357+136.738+186.206+140.85+177.717+164.436"  stroke-linecap="butt" opacity="1" stroke-linejoin="round"/>
<path fill={color} d="M171.344+107.719C172.979+116.071+174.169+124.488+174.5+133C174.742+139.22+174.515+145.408+174.344+151.625C174.243+155.284+174.213+158.966+174.156+162.625C174.157+163.885+175.178+164.907+176.438+164.906C177.697+164.906+178.719+163.885+178.719+162.625C178.536+151.184+177.837+139.781+176.031+128.469C174.91+121.449+173.278+114.556+171.344+107.719Z" opacity="1"/>
<path fill={color} stroke="#000000" stroke-width="5.63965" d="M20.8877+182.674C60.6749+196.159+89.4327+164.915+97.8017+142.222"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="5.63965" d="M156.731+88.2943C142.648+49.045+114.223+111.919+107.573+127.459"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="5.63965" d="M161.498+119.56C143.28+92.2331+122.693+141.642+120.728+151.466"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="5.63965" d="M111.87+168.608C95.3138+201.721+75.0485+214.105+39.7841+214.105"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="5.63965" d="M183.872+96.791C211.215+42.1052+230.896+68.6087+248.422+103.994C261.953+131.314+271.583+166.547+298.774+157.483" stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="5.63965" d="M192.676+119.25C198.257+93.5882+217.904+98.2433+228.654+118.593C246.522+152.415+259.365+217.73+285.811+172.136" stroke-linecap="round" opacity="1" stroke-linejoin="round"/>

</svg>
);
},
});
