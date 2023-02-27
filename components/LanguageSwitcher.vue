<template>
  <ul>
    <li>
      <a :href="switchLocalePath('en')" :class="{ 'router-link-active': locale == 'en' }"> <span> EN </span> </a>
    </li>
    <li>
      <a :href="switchLocalePath('de')" :class="{ 'router-link-active': locale == 'de' }"> <span> DE </span> </a>
    </li>
  </ul>
</template>

<script>
import { useSwitchLocalePath } from '#imports';

export default {
  setup() {
    const switchLocalePath = useSwitchLocalePath();

    return {
      switchLocalePath
    };
  }
};
</script>

