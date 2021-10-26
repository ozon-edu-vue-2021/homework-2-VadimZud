<template>
  <file-component :title="target" v-bind="$attrs" @select="onselect">
    <template v-slot:icon>
      <link-icon />
    </template>
  </file-component>
</template>

<script>
import LinkIcon from "./icons/LinkIcon.vue";
import FileComponent from "./FileComponent.vue";

export default {
  name: "LinkComponent",
  inheritAttrs: false,
  props: {
    target: {
      type: String,
      default: "",
    },
  },
  components: {
    LinkIcon,
    FileComponent,
  },
  methods: {
    onselect(fileName) {
      this.$emit("select", fileName);
    },
  },
};
</script>
