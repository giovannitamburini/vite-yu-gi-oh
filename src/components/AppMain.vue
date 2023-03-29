<script>

import { store } from "../store.js";
import axios from "axios";

import CardItem from "./CardItem.vue";
import CardSearch from "./CardSearch.vue";

export default {
    data() {
        return {

            store,

        }
    },
    components: {
        CardItem,
        CardSearch,
    },

    created() {
        axios.get(this.store.APICall).then((res) => {

            this.store.listCards = res.data.data;

            this.store.loading = false;

            this.store.contatore = res.data.data.length;
        })
    },

    methods: {
        search() {

            let newApi = this.store.newAPICall + this.store.APIrange + this.store.rangeValue + this.store.APIstart + this.store.startValue + this.store.APIquery + this.store.searchInput;

            axios.get(newApi).then((res) => {

                console.log(res.data.data);

                this.store.listCards = res.data.data;

                this.store.contatore = res.data.data.length;
            }).catch(e => alert("la ricerca non ha prodotto risultati"));
        },
    }

}
</script>

<template>
    <div id="main">
        <div v-if="store.loading" id="loading">
            i'm working HARD for you
        </div>

        <div v-else id="container-loaded-cards">

            <CardSearch @searchCard="search()"></CardSearch>

            <div id="cards-list">
                <CardItem v-for="card in store.listCards" :cardYu="card"></CardItem>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
#main {
    background-color: #103188;

    #loading {
        text-align: center;
        padding-top: 10px;
        font-size: 5em;
        width: 100%;
        height: 100%;
    }

    #container-loaded-cards {

        #filter {
            padding: 15px;
            display: flex;
            gap: 15px;
            margin-bottom: 10px;
            border: 1px 0 solid black;
            box-shadow: 0px 2px 8px black;

            h2 {
                text-shadow: 5px 5px 10px black;
            }

            input {
                width: 200px;
                padding: 5px;
                border: 1px solid black;
                box-shadow: 2px 2px 5px black;
                color: white;

            }

            button {
                padding: 2px 8px;
                border: 1px solid black;
                cursor: pointer;
                box-shadow: 2px 2px 5px black;

                &:active {
                    transform: scale(0.9);
                }
            }
        }

        #cards-list {
            display: flex;
            flex-flow: row wrap;
            justify-content: center;
            gap: 5px;
        }
    }

}
</style>