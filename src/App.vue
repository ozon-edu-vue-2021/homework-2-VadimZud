<template>
  <div
    id="app"
    tabindex="0"
    @keydown.right="openCurrentDir"
    @keydown.left="closeCurrentDir"
    @keydown.down="selectNextFile"
  >
    Выделенный файл: {{ selectedPath }}
    <dir-component :item="rootDir" @select="onselect" />
  </div>
</template>

<script>
import DirComponent from "./components/DirComponent.vue";

export default {
  name: "App",
  data: function () {
    return {
      rootDir: {},
      selectedComponent: null,
    };
  },
  beforeMount() {
    fetch("static/node_modules.json")
      .then((response) => response.json())
      .then((newRoot) => {
        this.rootDir = newRoot;
      });
  },
  computed: {
    selectedPath() {
      return this.selectedComponent ? this.selectedComponent.fullPath : "";
    },
  },
  methods: {
    onselect(comp) {
      if (this.selectedComponent) {
        this.selectedComponent.selected = false;
      }
      comp.selected = true;
      comp.$refs.record.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
      this.selectedComponent = comp;
    },
    addParentInfo(item, parent) {
      item.parent = parent;
      if (item.type === "directory") {
        for (let child of item.contents) {
          this.addParentInfo(child, item);
        }
      }
    },
    onkeydown(event) {
      switch (event.code) {
        case "ArrowRight":
          this.openCurrentDir();
          break;
        case "ArrowLeft":
          this.closeCurrentDir();
          break;
      }
    },
    openCurrentDir() {
      if (
        this.selectedComponent &&
        this.selectedComponent.item.type === "directory"
      ) {
        this.selectedComponent.opened = true;
      }
    },
    closeCurrentDir() {
      let comp = this.selectedComponent;
      if (!comp) {
        return;
      }
      if (comp.item.type !== "directory" || !comp.item.opened) {
        if (comp.$parent != this && comp.$parent.item.type == "directory") {
          this.selectedComponent = comp.$parent;
        }
      }

      if (this.selectedComponent.item.type === "directory") {
        this.selectedComponent.opened = false;
        this.selectedComponent.selected = true;
      }
    },
    selectNextFile() {
      this.selectedComponent.selected = false;

      let comp = this.selectedComponent;
      if (
        comp.item.type === "directory" &&
        comp.opened &&
        comp.$refs.childs &&
        comp.$refs.childs.length
      ) {
        this.selectedComponent = comp.$refs.childs[0];
        this.selectedComponent.selected = true;
        return;
      }

      let parent = comp.$parent;

      if (parent !== this) {
        let index = parent.$refs.childs.indexOf(comp);
        if (index < parent.$refs.childs.length - 1) {
          this.selectedComponent = parent.$refs.childs[index + 1];
          this.selectedComponent.selected = true;
          return;
        }
      }
    },
  },
  components: {
    DirComponent,
  },
};
</script>
