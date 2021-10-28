<template>
  <span class="link" :class="{ selected }" @click="select" ref="record">
    <link-icon />
    {{ item.name }}
  </span>
</template>

<script>
import LinkIcon from "./icons/LinkIcon.vue";

export default {
  name: "LinkComponent",
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
    LinkIcon,
  },
};
</script>

<style scoped>
.link {
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