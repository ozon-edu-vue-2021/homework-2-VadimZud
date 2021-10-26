<template>
  <span class="file" :class="{ selected }" @click="onclick" ref="fileElem">
    <slot name="icon">
      <file-icon />
    </slot>
    {{ name }}
  </span>
</template>

<script>
import FileIcon from "./icons/FileIcon.vue";

export default {
  name: "FileComponent",
  props: {
    name: {
      type: String,
      default: "",
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onclick() {
      this.$emit("select", this.name);
    },
  },
  components: {
    FileIcon,
  },
  updated() {
    if (this.selected) {
      this.$refs.fileElem.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  },
};
</script>

<style scoped>
.file {
  display: inline-flex;
  align-items: center;
  padding: 5px;
  border-radius: 3px;
  cursor: pointer;
}

.selected {
  background-color: blue;
  color: white;
}
</style>