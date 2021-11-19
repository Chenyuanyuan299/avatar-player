import { defineComponent } from 'vue';

export default defineComponent({
props: {
color: String,
},

setup(props) {
const color = props.color ?? 'black';
return () => (
<svg style={{ 
    position: 'absolute' , 
    width: '130%' , 
    height: '130%' , 
    top:'-50%', 
    right:'-38%' ,

}} width="500" height="200"
    viewBox="0 0 740 300">
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M101.272+268.943C85.8345+191.432+115.088+142.665+171.911+124.329C212.801+111.135+254.64+110.118+300.269+129.935C326.726+141.424+346.986+171.868+358.003+196.076C365.814+213.24+366.959+225.819+366.959+249.325"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M140.522+245.962C160.136+304.806+82.5097+279.732+100.725+270.625" stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M141.082+236.433C141.082+288.206+205.542+289.399+205.542+244.841"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M206.102+237.554C201.512+260.508+237.585+286.133+250.383+260.535"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M247.581+243.159C247.581+283.518+289.901+267.82+300.83+245.962" stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M300.83+242.038C309.364+267.64+325.371+261.779+339.506+247.643" stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M338.945+247.643C345.361+273.308+355.321+270.383+365.29+250.446" stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M195.452+117.603C205.817+102.056+186.968+89.5772+172.471+89.5772"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M201.618+116.482C197.759+108.763+209.023+100.227+215.631+100.227"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M195.452+117.043C190.986+112.576+187.259+111.998+180.879+111.998"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M121.952+148.401C144.046+106.402+83.9147+87.0939+67.0081+125.134C60.4909+139.798+67.6064+163.154+84.9491+166.622C92.7071+168.174+98.036+165.799+105.133+164.38C107.814+163.844+113.16+162.52+115.224+160.455C118.77+156.909+119.533+153.001+121.952+148.401Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M70.9327+165.781C61.8323+157.828+51.0928+161.793+43.4605+169.426C33.2307+179.656+34.6121+199.458+45.1425+208.672C70.9057+231.214+97.7567+207.2+90.5556+178.396C88.4252+169.874+76.0788+170.279+70.9327+165.781Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M41.4982+216.521C36.3452+215.85+27.1817+221.032+25.5195+223.249C14.0971+238.479+27.604+262.118+46.2638+260.252C82.0817+256.67+74.6039+220.83+41.4982+216.521Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M44.0212+265.858C43.7084+266.815+42.1181+266.53+41.2179+266.98C39.1653+268.006+36.2747+269.606+34.49+270.904C28.2953+275.41+26.2326+281.714+25.5195+288.845C22.4789+319.252+72.1083+320.983+75.9786+293.891C77.7834+281.257+67.7661+271.157+56.9163+267.54C54.4333+266.713+45.1533+262.397+44.0212+265.858Z" stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M53.5523+317.439C51.4077+317.312+49.1398+317.927+47.9458+319.121C32.6903+334.376+36.4499+367.548+64.2048+360.609C96.0584+352.646+77.6956+318.866+53.5523+317.439Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M54.3933+367.337C30.8598+375.897+51.7163+386.708+44.5818+400.977C43.6665+402.807+30.0048+408.578+30.0048+405.462C30.0048+402.798+46.4842+412.525+47.3851+412.75C53.5602+414.294+61.9622+400.416+61.9622+400.416C61.9622+400.416+61.4015+403.769+61.4015+405.462C61.4015+412.364+54.7527+418.477+68.6901+414.993C104.239+406.106+90.986+354.028+54.3933+367.337Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M315.939+96.5404C300.694+115.005+311.787+154.402+338.926+140.832C348.638+135.976+363.642+116.413+354.625+104.39C348.182+95.7992+336.01+92.0551+326.031+92.0551C323.699+92.0551+317.427+94.7391+315.939+96.5404Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M384.9+125.414C357.851+111.647+338.576+157.31+366.398+167.744C398.129+179.643+409.611+137.991+384.9+125.414Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M387.703+171.949C383.564+173.162+382.455+179.146+382.097+180.078C378.937+188.293+376.902+195.462+382.097+203.626C390.805+217.31+409.221+218.227+420.782+208.111C443.783+187.985+410.066+165.395+387.703+171.949Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M401.439+220.726C373.313+222.889+372.026+273.502+406.766+270.344C440.329+267.293+437.331+217.965+401.439+220.726Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M407.607+277.072C366.13+281.287+372.225+335.978+407.887+332.016C443.999+328.003+443.422+273.431+407.607+277.072Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M389.946+333.137C383.218+336.501+381.806+349.156+385.461+355.003C406.877+389.269+439.873+344.365+418.539+333.698"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M406.485+375.747C358.701+383.371+388.365+402.443+364.156+420.6C362.395+421.92+360.959+422.884+358.549+422.281C356.699+421.819+357.363+421.484+358.549+421.721C372.852+424.581+380.433+417.236+389.946+417.236C390.164+417.236+388.301+433.824+403.962+430.691C433.059+424.872+446.785+369.317+406.485+375.747Z"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M206.459+238.824C203.608+241.727+207.288+227.246+207.557+225.97C209.281+217.779+217.192+201.86+225.674+199.701"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M291.831+222.688C296.175+227.032+300.89+241.013+297.998+246.796"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path fill={color} stroke="#000000" stroke-width="7.1862" d="M142.136+238.947C139.463+230.929+146.672+214.007+150.546+207.55"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="7.1862" d="M112.702+124.293C92.1382+127.304+105.934+168.624+131.484+143.075C142.865+131.694+125.445+122.427+112.702+124.293Z" fill="#f5df21" stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="7.1862" d="M317.902+111.117C301.964+109.432+305.613+142.449+324.91+138.59C343.529+134.866+335.034+112.929+317.902+111.117Z" fill="#f5df21" stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="7.1862" d="M52.7114+358.367C36.2582+367.914+60.7276+391.559+73.736+378.55C89.566+362.72+68.7654+349.051+52.7114+358.367Z" fill="#f5df21" stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="7.1862" d="M396.674+360.609C378.344+369.246+399.306+413.211+421.903+384.157C435.146+367.13+414.425+352.245+396.674+360.609Z" fill="#f5df21" stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="5.63965" d="M86.2609+138.046C78.9314+142.932+74.4004+156.983+82.834+162.606"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="5.63965" d="M52.5623+242.569C52.5623+252.91+51.5195+256.02+41.7102+262.559"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="5.63965" d="M40.5679+292.26C34.7493+300.988+41.715+309.804+50.2777+312.25"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="5.63965" d="M394.689+193.449C394.689+204.833+399.933+210.047+410.11+213.439"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="5.63965" d="M392.975+250.565C388.298+259.921+392.503+268.842+403.256+268.842"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="5.63965" d="M412.966+308.252C421.476+316.762+413.143+325.888+404.399+329.385"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="5.63965" d="M394.118+401.923C394.118+408.255+391.017+416.61+384.979+419.629"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>
<path stroke="#000000" stroke-width="5.63965" d="M63.9856+389.357C66.4272+396.682+61.9322+403.138+57.7028+408.777"  stroke-linecap="round" opacity="1" stroke-linejoin="round"/>

</svg>
);
},
});