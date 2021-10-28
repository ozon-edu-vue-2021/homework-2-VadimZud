<template>
  <div
    class="leaf-comp"
    :class="classes"
    tabindex="1"
    @focus="onfocus"
    @blur="onblur"
    @click="toogleActivate"
    @keydown.enter="toogleActivate"
    @keydown.up="focusPrev"
    @keydows.down="focusNext"
    @keydown.left="focusUp"
  >
    <slot name="icon"></slot>
    {{ name }}
    <slot></slot>
  </div>
</template>

<script>
import BaseComp from "./BaseComp";

export default {
  name: "LeafComp",
  extends: BaseComp,
  computed: {
    classes() {
      return {
        selected: this.active,
      };
    },
  },
};
</script>

<style scoped>
.leaf-comp {
  padding: 5px;
  width: fit-content;
}

.selected {
  background-color: aquamarine;
}

:focus {
  border: 1px solid aqua;
}
</style>