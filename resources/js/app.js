require('./bootstrap');

import {createApp} from 'vue';
import LaravelVuePagination from "laravel-vue-pagination";
import {createRouter, createWebHistory} from "vue-router";

import App from './layouts/App'
import PostsIndex from './components/Posts/Index';
import PostsCreate from './components/Posts/Create';

const routes = [
    {path: '/', component: PostsIndex},
    {path: '/posts/create', component: PostsCreate},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App);
app.use(router);
app.component('Pagination', LaravelVuePagination);
app.mount('#app');
