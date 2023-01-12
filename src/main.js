import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { IonicVue } from '@ionic/vue';
import App from './App.vue';
import router from './router/router';

const app = createApp(App);

// app.use(createPinia()).use(IonicVue).mount('#app');

app.use(createPinia());
app.use(IonicVue);

// app.mount('#app');

router.isReady().then(() => {
	app.mount('#app');
});
