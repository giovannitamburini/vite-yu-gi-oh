import { reactive } from 'vue';

export const store = reactive({
    listCards: [],
    loading: Boolean,
});