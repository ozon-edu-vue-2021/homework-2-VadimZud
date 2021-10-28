<template>
  <component v-bind="$attrs" v-on="$listeners" :is="$options.typeMap[type]" />
</template>

<script>
import FileComp from "./FileComp.vue";
import LinkComp from "./LinkComp.vue";

export default {
  name: "DynamicComp",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  components: {
    FileComp,
    LinkComp,
  },
  typeMap: {
    file: FileComp,
    link: LinkComp,
  },
};
</script>