<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <dir-icon />
    <file-icon />
    <link-icon />
    <file-comp name="test" />
    <file-comp name="test" focus-after-mount />
    <link-comp name="test" target="123" />
    <dynamic-comp name="file" type="file" />
    <dynamic-comp name="link" type="link" target="target" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import DirIcon from "./components/icons/DirIcon.vue";
import FileIcon from "./components/icons/FileIcon.vue";
import LinkIcon from "./components/icons/LinkIcon.vue";
import FileComp from "./components/FileComp.vue";
import LinkComp from "./components/LinkComp.vue";
import DynamicComp from "./components/DynamicComp.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    DirIcon,
    FileIcon,
    LinkIcon,
    FileComp,
    LinkComp,
    DynamicComp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
