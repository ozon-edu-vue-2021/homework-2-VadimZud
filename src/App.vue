<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <file-icon stroke="#999" />
    <link-icon></link-icon>
    <dir-icon></dir-icon>
    <file-component name="test" selected/>
    <link-component name="link" target="tg/tg/tg" ></link-component>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FileIcon from './components/icons/FileIcon.vue'
import LinkIcon from './components/icons/LinkIcon.vue'
import DirIcon from './components/icons/DirIcon.vue'
import FileComponent from './components/FileComponent.vue'
import LinkComponent from './components/LinkComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    FileIcon,
    LinkIcon,
    DirIcon,
    FileComponent,
    LinkComponent,
  }
}
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
