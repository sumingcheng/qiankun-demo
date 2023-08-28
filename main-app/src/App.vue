<template>
  <div class="main">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <div>
      <div id="subapp-container"></div>
    </div>
  </div>

</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
.main {
  display: flex;
  justify-content: space-around;
}
</style>
