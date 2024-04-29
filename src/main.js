// vue pluggins
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';

// vue router
import router from './router';

// vue app
import App from './App.vue';

// vuetify config
import 'vuetify/styles';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import '../public/sass/_vuetifyNormalize.sass'

// create vuetify config
const vuetify = createVuetify({
  components,
  directives,
});

// create pinia state management
const pinia = createPinia();

// create vue app for currency-calculator
createApp(App).use(pinia).use(router).use(vuetify).mount('#app');
