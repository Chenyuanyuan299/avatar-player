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
              xmlns="http://www.w3.org/2000/svg" id="图层_1" data-name="图层 1" viewBox="0 0 280.6 78.59">
                <path class="cls-1" d="M297.78,240.25l.14,0h.14c46.13,3.8,73.79,24.29,93.86,52.51H118.6c16.3-29.35,39.48-48,77.07-56.59,16-3.65,31.56,7.79,53.45,7.79,9.45,0,19.92-11.82,26.9-9.92,2.59.71,5.19,1.5,7.85,2.31C288.27,237.72,292.84,239.11,297.78,240.25Z" transform="translate(-115.2 -216.2)" />
                <path class="cls-2" d="M188.2,229.73l5.11-10.95a1,1,0,0,1,1.25-.52C244,243,272,234.87,299,221.84a1,1,0,0,1,1.08.37l6.68,9.14c45.65,24.65-6.72,17.78-15.89,20.32C242,265.2,203,307,194.1,243.21,193.25,237.14,185.6,235.29,188.2,229.73Z" transform="translate(-115.2 -216.2)" />
            </svg>
        );
    },
});
