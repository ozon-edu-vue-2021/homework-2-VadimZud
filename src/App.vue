<template>
  <div id="app">
    Выделенный файл: {{ selectedPath }}
    <dir-component
      v-bind="rootDir"
      :selectedPath="selectedChild"
      :selected="selected"
      @select="onselect"
    />
  </div>
</template>

<script>
import DirComponent from "./components/DirComponent.vue";

export default {
  name: "App",
  data: () => ({
    rootDir: {},
    selectedPath: "",
  }),
  beforeMount() {
    fetch("static/node_modules.json")
      .then((response) => response.json())
      .then((newRoot) => {
        this.rootDir = newRoot;
      });
  },
  computed: {
    selectedChild() {
      return this.selectedPath.split("/").slice(1).join("/");
    },
    selected() {
      return (
        this.selectedPath !== "" && this.selectedPath.split("/").length === 1
      );
    },
  },
  methods: {
    onselect(path) {
      this.selectedPath = path;
    },
  },
  components: {
    DirComponent,
  },
};
</script>
