import { reactive } from 'vue';

export const store = reactive({
    listCards: [],
    loading: true,

    APICall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',

    newAPICall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',

    APIrange: '?num=',

    rangeValue: '50',

    APIstart: '&offset=',

    startValue: '0',

    APIquery: '&fname=',

    searchInput: '',

    contatore: Number,

});