<template>
  <div
    class="leaf-comp"
    :class="{ selected }"
    tabindex="1"
    @click="focus, toogleSelect"
    @keydown.enter="toogleSelect"
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
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    select() {
      this.selected = true;
      this.$emit("selected", this.name);
    },
    deselect() {
      this.selected = false;
      this.$emit("deselected");
    },
    toogleSelect() {
      if (this.selected) {
        this.deselect();
      } else {
        this.select();
      }
    },
  },
  unmounted() {
    if (this.selected) {
      this.$emit("deselected");
    }
  },
  emits: ["selected", "deselected"],
};
</script>

<style scoped>
.leaf-comp {
  padding: 5px;
  width: fit-content;
  display: flex;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
}

.selected {
  background-color: aquamarine;
}

.leaf-comp:focus {
  border-color: aqua;
  outline: none;
}
</style>