require('./bootstrap');

import {createApp} from 'vue';
import LaravelVuePagination from "laravel-vue-pagination";
import VueSweetalert2 from "vue-sweetalert2";

import router from './routes/index';

const app = createApp({});

app.use(router);
app.use(VueSweetalert2);
app.component('Pagination', LaravelVuePagination);
app.mount('#app');
