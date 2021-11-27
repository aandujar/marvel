<template>
  <svg class="svg" :style="getStyle">
    <use :xlink:href="require('@/assets/icons.svg') + `#${icon}`"></use>
  </svg>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Toolbar",
  props: {
    icon: { type: String, required: true },
    height: { type: String, required: false, default: "30px" },
    width: { type: String, required: false, default: "30px" },
    fill: { type: String, required: false, default: "none" },
    stroke: { type: String, required: false, default: "#202020" },
    strokeWidth: { type: Number, required: false, default: 2 },
  },
  setup(props) {
    const getStyle = computed(() => {
      console.log(props.stroke)
      return {
        height: props.height,
        width: props.width,
        fill: props.fill,
        stroke: props.stroke,
        color: props.stroke,
        strokeWidth: props.strokeWidth,
      };
    });

    return { getStyle };
  },
});
</script>

<style lang="scss" scoped>
.svg {
  stroke-dasharray: 320;
    stroke-dashoffset: 0;
    animation: dash 1s linear;
  
  @keyframes dash {
    from {
      stroke-dashoffset: 320;
    }
    to {
      stroke-dashoffset: 0;
    }
  }
}
</style>