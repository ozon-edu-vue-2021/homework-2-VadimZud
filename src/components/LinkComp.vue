<template>
  <leaf-comp :title="target" v-bind="$attrs" v-on="$listeners">
    <template v-slot:icon>
      <link-icon />
    </template>
  </leaf-comp>
</template>

<script>
import LeafComp from "./LeafComp.vue";
import LinkIcon from "./icons/LinkIcon.vue";

export default {
  name: "LinkComp",
  props: {
    target: {
      type: String,
      default: "",
    },
  },
  components: {
    LeafComp,
    LinkIcon,
  },
};
</script>