<template>
  <header class="page-header">
      <div>
          <language-switcher/>
      </div>
  </header>
</template>

<script>
import { useLocalePath, useRoute, watch } from '#imports';
export default {
  name: 'PageHeader',

  setup() {
    const route = useRoute();
    const localePath = useLocalePath();

    watch(
      () => route.path,
      () => {
        handleLanguageSwitcher();
      }
    );

    handleLanguageSwitcher();

    return {
      localePath
    };
  }
};
</script>
