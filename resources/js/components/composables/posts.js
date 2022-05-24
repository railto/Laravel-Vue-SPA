import {ref} from 'vue';

export default function usePosts() {
    const posts = ref({});

    const getPosts = async (page = 1, category = '', orderColumn = 'created_at', orderDirection = 'desc') => {
        axios.get('/api/posts?page=' + page + '&category=' + category + '&order_column=' + orderColumn + '&order_direction=' + orderDirection)
            .then(response => {
                posts.value = response.data;
            });
    }

    return {posts, getPosts};
}
