<script>

import { store } from "../store.js";


export default {
    data() {
        return {

            store,

            searchString: '',

        }
    },

}
</script>

<template>
    <div>
        <div id="filter">
            <h2>filtra carte</h2>

            <input v-model="store.searchInput" @keyup.enter="$emit('searchCard')" type="text"
                placeholder="digita il nome di una carta">

            <button @click="$emit('searchCard')">Cerca</button>

        </div>
    </div>
</template>

<style lang="scss" scoped>
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
        background-color: #081d56;


    }

    button {
        padding: 2px 8px;
        border: 1px solid black;
        cursor: pointer;
        box-shadow: 2px 2px 5px black;
        background-color: #081d56;


        &:active {
            transform: scale(0.9);
        }
    }
}
</style>