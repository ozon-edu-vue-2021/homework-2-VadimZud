<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="icon">
    <slot></slot>
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
};
</script>

<style scoped>
.icon {
  height: 24px;
  width: 24px;
  fill: none;
  stroke: currentColor;
  stroke-width: 1px;
  stroke-linejoin: round;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  stroke-dasharray: none;
  stroke-opacity: 1;
}
</style>