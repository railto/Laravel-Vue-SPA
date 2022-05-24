import {ref} from 'vue';
import {useRouter} from 'vue-router';

export default function usePosts() {
    const posts = ref({});
    const router = useRouter();
    const validationErrors = ref({});
    const isLoading = ref(false);

    const getPosts = async (page = 1, category = '', orderColumn = 'created_at', orderDirection = 'desc') => {
        axios.get('/api/posts?page=' + page + '&category=' + category + '&order_column=' + orderColumn + '&order_direction=' + orderDirection)
            .then(response => {
                posts.value = response.data;
            });
    };

    const storePost = async (post) => {
        if (isLoading.value) return;

        isLoading.value = true;
        validationErrors.value = {};

        let serializedPost = new FormData();

        for (let item in post) {
            if (post.hasOwnProperty(item)) {
                serializedPost.append(item, post[item]);
            }
        }

        axios.post('/api/posts', serializedPost)
            .then(response => {
                router.push({name: 'posts.index'});
            })
            .catch(error => {
                if (error.response?.data) {
                    validationErrors.value = error.response.data.errors;
                }
            })
            .finally(() => isLoading.value = false);
    };

    return {posts, getPosts, storePost, validationErrors, isLoading};
}
