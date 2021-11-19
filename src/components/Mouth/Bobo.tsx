import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        return () => (
            <svg
                style={{
                width: '25%',
                height: '10%',
                position: 'absolute',
                top: '28%',
                right: '33%'
                }}
                width="67"
                height="64"
                viewBox="0 0 67 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                d="M10.5 15C 55.5 -10 60.5 40.5 20 35.5C55.5 30 55.5 72 10.5 55"
                stroke="black"
                stroke-width="5"
                />
            </svg>
        );
    },
});
