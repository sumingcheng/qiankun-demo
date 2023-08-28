<template>
  <div class="main">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>

</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

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
  justify-content: center;
  align-items: center;
}
</style>
