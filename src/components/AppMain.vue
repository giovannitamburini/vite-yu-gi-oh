<script>

import { store } from "../store.js";
import axios from "axios";

import CardItem from "./CardItem.vue";

export default {
    data() {
        return {

            // listCards: [],

            store,
        }
    },
    components: {
        CardItem,
    },

    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {

            this.store.listCards = res.data.data;
        })
    },
}
</script>

<template>
    <div id="main">
        <div v-if="this.store.listCards.length < 50" id="loading">
            i'm working HARD for you
        </div>

        <div v-else id="cards-list">
            <CardItem v-for="card in store.listCards" :cardYu="card"></CardItem>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#main {
    #cards-list {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        gap: 5px;
    }
}
</style>