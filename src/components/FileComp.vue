<template>
  <leaf-comp v-bind="$attrs" v-on="$listeners">
    <template v-slot:icon>
      <file-icon />
    </template>
  </leaf-comp>
</template>

<script>
import LeafComp from "./LeafComp.vue";
import FileIcon from "./icons/FileIcon.vue";

export default {
  name: "FileComp",
  components: {
    LeafComp,
    FileIcon,
  },
};
</script>