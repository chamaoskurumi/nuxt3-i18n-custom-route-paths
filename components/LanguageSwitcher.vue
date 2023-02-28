<template>
  <ul>
    <li>
      <a :href="switchLocalePath('en')"> EN </a>
    </li>
    <li>
      <a :href="switchLocalePath('de')"> DE </a>
    </li>
  </ul>
</template>

<script setup>
  const { locale } = useI18n()
  const switchLocalePath = useSwitchLocalePath();
</script>