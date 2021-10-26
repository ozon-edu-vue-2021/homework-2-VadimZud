<template>
  <div
    id="app"
    tabindex="0"
    @keydown.right="openCurrentDir"
    @keydown.left="closeCurrentDir"
    @keydown.down="selectNextFile($event)"
  >
    Выделенный файл: {{ selectedPath }}
    <dir-component :item="rootDir" @select="select" />
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
    select(comp) {
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
    openCurrentDir() {
      let comp = this.selectedComponent;
      if (comp && comp.item.type === "directory") {
        comp.opened = true;
      }
    },
    closeCurrentDir() {
      let comp = this.selectedComponent;
      if (!comp) {
        return;
      }
      if (comp.item.type !== "directory" || !comp.item.opened) {
        if (comp.$parent != this && comp.$parent.item.type == "directory") {
          comp = comp.$parent;
        }
      }

      if (comp.item.type === "directory") {
        comp.opened = false;
        this.select(comp);
      }
    },
    selectNextFile(event) {
      event.preventDefault();
      let comp = this.selectedComponent;

      if (
        comp.item.type === "directory" &&
        comp.opened &&
        comp.$refs.childs &&
        comp.$refs.childs.length
      ) {
        this.select(comp.$refs.childs[0]);
        return;
      }

      let parent = comp.$parent;

      while (parent !== this) {
        let index = parent.$refs.childs.indexOf(comp);
        if (index < parent.$refs.childs.length - 1) {
          this.select(parent.$refs.childs[index + 1]);
          return;
        }
        comp = parent;
        parent = comp.$parent;
      }
    },
  },
  components: {
    DirComponent,
  },
};
</script>
