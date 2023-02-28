<template>
  <header class="page-header">
      <div>
          <language-switcher/>
      </div>
      
      <div>
          <a :href="localePath('about')">About</a>
      </div>
  </header>
</template>

<script setup>
const localePath = useLocalePath()
</script>^