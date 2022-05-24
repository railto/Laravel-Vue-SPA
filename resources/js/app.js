require('./bootstrap');

import {createApp} from 'vue';
import LaravelVuePagination from "laravel-vue-pagination";
import PostsIndex from './components/Posts/Index';

const app = createApp({});
app.component('posts-index', PostsIndex);
app.component('Pagination', LaravelVuePagination);
app.mount('#app');
