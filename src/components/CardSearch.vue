<script>

// importo lo store in cui sono inseriti i dati condivisi
import { store } from "../store.js";
// importo la componente in cui è inserito il contatore delle carte ottenute dalla ricerca
import CardNumber from "./CardNumber.vue";

export default {
    data() {
        return {

            store,
        }
    },

    components: {
        CardNumber,
    },

}
</script>

<template>
    <div>

        <div id="filter">
            <h2>Filtra carte:</h2>

            <!-- tramite emit passo dei dati dall'elemento padre al figlio, in questo caso passo una funzione contenuta in AppMain -->
            <input v-model="store.searchInput" @keyup.enter="$emit('searchCard')" type="text"
                placeholder="digita il nome di una carta">

            <div id="selected-range">
                <label for="range-selected">Scegli un range di ricerca: </label>

                <!-- faccio un v-model che passo all'elemento dello store.js che mi serve per creare la nuova API call, filtrata dai paramentri di ricerca -->
                <select v-model="store.rangeValue" name="range" id="range-selected">
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="150">150</option>
                    <option value="200">200</option>
                </select>
            </div>

            <div id="selected-start">
                <label for="start-selected">Scegli un indice di partenza: </label>

                <!-- faccio un v-model che passo all'elemento store.js che mi serve per creare la nuova API call, filtrata dai parametri di ricerca -->
                <select v-model="store.startValue" name="range" id="start-selected">
                    <option value="0">0</option>
                    <option value="500">500</option>
                    <option value="1000">1000</option>
                    <option value="1500">1500</option>
                    <option value="2000">2000</option>
                    <option value="2500">2500</option>
                    <option value="3000">3000</option>
                </select>
            </div>

            <!-- tramite emit passo dei dati dall'elemento padre al figlio, in questo caso passo una funzione contenuta in AppMain -->
            <button @click="$emit('searchCard')">Cerca</button>

            <CardNumber></CardNumber>

        </div>
    </div>
</template>

<style lang="scss" scoped>
#filter {
    padding: 15px;
    display: flex;
    flex-flow: row wrap;
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

    #selected-range,
    #selected-start {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 5px 7px;
        border: 1px solid black;
        color: white;
        box-shadow: 2px 2px 5px black;
        background-color: #081d56;

        select {
            background-color: #081d56;
            padding: 3px;
            border: 1px solid black;
        }
    }

    button {
        padding: 6px 8px;
        border: 1px solid black;
        cursor: pointer;
        box-shadow: 2px 2px 5px black;
        background-color: #560c08;


        &:active {
            transform: scale(0.9);
        }
    }
}
</style>