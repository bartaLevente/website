import './assets/scss/styles.scss';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vue3-toastify/dist/index.css';
import vSelect from 'vue-select'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// Create the app
const app = createApp(App);

// V-select
app.component('v-select', vSelect);
import 'vue-select/dist/vue-select.css';

app.use(vuetify);
app.use(router);

// Mount the app
app.mount('#app');
