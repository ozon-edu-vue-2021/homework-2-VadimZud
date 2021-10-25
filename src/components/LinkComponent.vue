<template>
  <file-component :title="target" v-bind="$attrs">
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
      default: '',
    },
  },
  components: {
    LinkIcon,
    FileComponent,
  },
};
</script>
