<template>
  <div id="app">
    <div>
      <button>
        <router-link to="/">Home</router-link>
      </button>
      <button>
        <router-link to="/react">React App</router-link>
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
</script>
