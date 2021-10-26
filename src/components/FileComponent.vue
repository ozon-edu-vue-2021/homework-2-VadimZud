<template>
  <span class="file" :class="{ selected }" @click="select" ref="record">
    <file-icon />
    {{ item.name }}
  </span>
</template>

<script>
import FileIcon from "./icons/FileIcon.vue";

export default {
  name: "FileComponent",
  props: {
    item: {
      type: Object,
      required: true,
    },
    base: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    selected: false,
  }),
  computed: {
    fullPath() {
      if (this.base) {
        return `${this.base}/${this.item.name}`;
      } else {
        return this.item.name;
      }
    },
  },
  methods: {
    select() {
      this.$emit("select", this);
    },
  },
  components: {
    FileIcon,
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