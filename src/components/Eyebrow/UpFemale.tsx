import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    return () => (
      <svg
        style={{
          position: 'absolute',
          width: '80%',
          height: '13%',
          top: '0',
        }}
        width="149"
        height="51"
        viewBox="0 0 149 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <path
        d="M99 13.2143C104.667 10.5476 118 8.11427 126 19.7143"
        stroke="black"
        stroke-width="4"
        stroke-linecap="round"
      />
      <path
          d="M23.5791 38.521C25.6497 32.6104 33.2612 21.3959 47.1418 23.8224"
          stroke="black"
          stroke-width="4"
          stroke-linecap="round"
        />
      </svg>
    );
  },
});
