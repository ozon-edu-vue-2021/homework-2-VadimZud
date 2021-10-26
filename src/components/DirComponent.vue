<template>
  <div>
    <div>
      <file-component
        :name="name"
        v-bind="$attrs"
        @select="onselect"
        @click.native="toogleOpened"
      >
        <template v-slot:icon>
          <dir-icon />
        </template>
      </file-component>
    </div>
    <div class="contents" v-if="opened">
      <template v-for="item in contents">
        <dir-component
          v-if="item.type === 'directory'"
          v-bind:key="item.name"
          v-bind="item"
          :selected-path="selectedChild(item)"
          :selected="isSelected(item)"
          @select="onChildSelect"
        />
        <div v-else v-bind:key="item.name">
          <component
            :is="componentMap[item.type]"
            v-bind="item"
            :selected="isSelected(item)"
            @select="onChildSelect"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import DirIcon from "./icons/DirIcon.vue";
import FileComponent from "./FileComponent.vue";
import LinkComponent from "./LinkComponent.vue";

export default {
  name: "DirComponent",
  inheritAttrs: false,
  props: {
    contents: {
      type: Array,
      default: () => [],
    },
    selectedPath: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    opened: false,
    componentMap: {
      file: FileComponent,
      link: LinkComponent,
    },
  }),
  computed: {
    selectedPathComponents() {
      return this.selectedPath.split("/");
    },
    selectedChildPath() {
      return this.selectedPathComponents.slice(1).join("/");
    },
  },
  methods: {
    isSelected(item) {
      return (
        this.selectedPathComponents.length === 1 &&
        item.name === this.selectedPathComponents[0]
      );
    },
    selectedChild(item) {
      if (
        this.selectedPathComponents.length > 1 &&
        item.name === this.selectedPathComponents[0]
      ) {
        return this.selectedChildPath;
      } else {
        return "";
      }
    },
    onselect(fileName) {
      this.$emit("select", fileName);
    },
    onChildSelect(filePath) {
      this.$emit("select", `${this.name}/${filePath}`);
    },
    toogleOpened() {
      this.opened = !this.opened;
    },
  },
  components: {
    DirIcon,
    FileComponent,
    LinkComponent,
  },
};
</script>

<style scoped>
.contents {
  margin-left: 20px;
  border-left: 1px solid #000;
}
</style>