<template>
  <div>
    <div>
      <span class="dir" :class="{ selected }" @click="select" ref="record">
        <dir-icon />
        {{ item.name }}
      </span>
    </div>
    <div class="contents" v-if="opened">
      <template v-for="child in item.contents">
        <dir-component
          v-if="child.type === 'directory'"
          :key="child.name"
          :item="child"
          :base="fullPath"
          @select="selectChild"
          ref="childs"
        />
        <div v-else :key="child.name">
          <component
            :is="componentMap[child.type]"
            :item="child"
            :base="fullPath"
            @select="selectChild"
            ref="childs"
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
    opened: false,
    componentMap: {
      file: FileComponent,
      link: LinkComponent,
    },
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
      this.opened = !this.opened;
    },
    selectChild(comp) {
      this.$emit("select", comp);
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
.dir {
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

.contents {
  margin-left: 20px;
  border-left: 1px solid #000;
}
</style>