import { defineNuxtConfig } from 'nuxt/config';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  
  modules: ['@nuxtjs/i18n'],
  i18n: { 
    locales: [
        { code: 'en', iso: 'en-US', domain: 'my-website-en.local:3000' },
        { code: 'de', iso: 'de-DE', domain: 'my-website-de.local:3000' }
      ],
      differentDomains: true,
      detectBrowserLanguage: false,
      strategy: 'prefix_except_default',
      defaultLocale: 'en',
      customRoutes: 'config',
      pages: {
        'about': {
          de: '/ueber'
        }
      }
    }
});
  