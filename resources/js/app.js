require('./bootstrap');

import {createApp, onMounted} from 'vue';
import LaravelVuePagination from "laravel-vue-pagination";
import VueSweetalert2 from "vue-sweetalert2";

import router from './routes/index';
import useAuth from "./components/composables/auth";

const app = createApp({
    setup() {
        const {getUser} = useAuth();
        onMounted(getUser);
    }
});

app.use(router);
app.use(VueSweetalert2);
app.component('Pagination', LaravelVuePagination);
app.mount('#app');
