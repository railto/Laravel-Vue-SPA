import {ref} from 'vue';
import {useRouter} from 'vue-router';

export default function usePosts() {
    const posts = ref({});
    const router = useRouter();

    const getPosts = async (page = 1, category = '', orderColumn = 'created_at', orderDirection = 'desc') => {
        axios.get('/api/posts?page=' + page + '&category=' + category + '&order_column=' + orderColumn + '&order_direction=' + orderDirection)
            .then(response => {
                posts.value = response.data;
            });
    };

    const storePost = async (post) => {
        axios.post('/api/posts', post)
            .then(response => {
                router.push({name: 'posts.index'});
            });
    };

    return {posts, getPosts, storePost};
}
