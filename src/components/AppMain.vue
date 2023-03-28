<script>

import { store } from "../store.js";
import axios from "axios";

export default {
    data() {
        return {

            listCards: [],

            store,
        }
    },
    created() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {

            console.log(res.data.data);
            this.store.listCards = res.data.data
        })
    },
}
</script>

<template>
    <div id="cards-list">

    </div>
</template>

<style lang="scss" scoped></style>