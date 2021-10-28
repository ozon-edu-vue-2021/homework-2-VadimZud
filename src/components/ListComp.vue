<template>
  <div>
    <template v-if="contents.length">
      <dynamic-comp
        ref="childs"
        v-for="(item, i) in contents"
        :key="item.name"
        v-bind="item"
        @focus-prev="focus(i - 1)"
        @focus-next="focus(i + 1)"
        @focus-up="onfocusUp"
        @selected="onselected($event, i)"
        @deselected="ondeselected(i)"
      />
    </template>
    <div v-else>Пусто</div>
  </div>
</template>

<script>
import DynamicComp from "./DynamicComp.vue";

export default {
  name: "ListComp",
  props: {
    contents: {
      type: Array,
      required: true,
    },
    focusAfterMount: {
      type: Boolean,
      default: false,
    },
  },
  selectedIndex: null,
  methods: {
    focus(i = 0) {
      if (i > 0 && i < this.contents.length - 1) {
        this.$refs.childs[i].focus();
      }
    },
    deselect() {
      let i = this.$options.selectedIndex;
      if (i !== null) {
        this.$refs.childs[i].deselect();
        this.$options.selectedIndex = null;
        this.$emit("deselected");
      }
    },

    onfocusUp() {
      this.$emit("focusUp");
    },
    onselected(path, i) {
      if (i === this.$options.selectedIndex) {
        return;
      }
      this.deselect();
      this.$options.selectedIndex = i;
      this.$emit("selected", path);
    },
    ondeselected(i) {
      if (i === this.selectedIndex) {
        this.deselect();
      }
    },
  },
  components: {
    DynamicComp,
  },
  mounted() {
    if (this.focusAfterMount) {
      this.focus();
    }
  },
  emits: ["selected", "deselected", "focusUp"],
};
</script>