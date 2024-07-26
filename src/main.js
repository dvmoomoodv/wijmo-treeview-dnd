const { createApp } = require('vue');
import App from './App.vue';
import { registerCore } from '@mescius/wijmo.vue2.core';
import { registerNav } from '@mescius/wijmo.vue2.nav';
const app = createApp(App);

registerCore(app);
registerNav(app);
app.mount('#app');
