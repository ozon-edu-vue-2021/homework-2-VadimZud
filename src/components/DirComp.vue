<template>
  <div>
    <div
      class="dir-comp"
      tabindex="1"
      @click="focus, toogleOpen"
      @keydown.enter="toogleOpen"
      @keydown.up="focusPrev"
      @keydows.down="focusNext"
      @keydown.left="focusUp"
    >
      <dir-icon />
      {{ name }}
    </div>
    <list-comp
      class="contents"
      :class="{ opened }"
      :focus-after-mount="$options.focusChildAfterMount"
    />
  </div>
</template>

<script>
import BaseComp from "./BaseComp";
import DirIcon from "./icons/DirIcon.vue";

export default {
  name: "DirComp",
  extends: BaseComp,
  focusChildAfterMount: false,
  data() {
    return {
      opened: false,
    };
  },
  components: {
    ListComp: import("./ListComp.vue"),
    DirIcon,
  },
};
</script>