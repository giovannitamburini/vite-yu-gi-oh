<script>

// importo lo store
import { store } from "../store.js";
// importo axios per poter effettuare una API call
import axios from "axios";
// importo le componenti aagiuntive:
// -carta singola in cui sono inserite l'immagine e le info
import CardItem from "./CardItem.vue";
// -componente in cui imposto i filtri di ricerca(cioè i filtri alla API call)
import CardSearch from "./CardSearch.vue";

export default {
    data() {
        return {
            // nomenclatura obbligatoria per importare i dati dello store.js
            store,
        }
    },

    // devo dichiarare le componenti che ho importato
    components: {
        CardItem,
        CardSearch,
    },

    // creo una API call 
    created() {

        // sostituisco il link con la stringa contenuta nella proprietà dello store.js
        axios.get(this.store.APICall).then((res) => {
            // associo all'array listCards dello store.js il risultato della chiamata
            this.store.listCards = res.data.data;
            // cambio il valore della booleana che utilizzo per visualizzare le carte solo quando è stata completata la chiamata
            this.store.loading = false;
            // contatore uguale alla lunghezza dell array che ci restituisce la chiamata
            this.store.contatore = res.data.data.length;
        })
    },

    methods: {
        // funzione che si attiva al click del bottone contenuto nella componente CardSearch, e glielo passo tramite '$emit ('searchCard')'
        search() {
            // creo una variabile che sarà uguale alla concatenazione delle seguenti stringhe contenute nello store.js
            let newApi = this.store.newAPICall + this.store.APIrange + this.store.rangeValue + this.store.APIstart + this.store.startValue + this.store.APIquery + this.store.searchInput;

            // faccio una API call al nuovo link  
            axios.get(newApi).then((res) => {

                // stampo in console l'output della API call
                console.log(res.data.data);
                // cambio il contenuto dell'array con il nuovo output della chiamata
                this.store.listCards = res.data.data;
                // cambio il numero del contatore con la nuovo lunghezza dell'array ottenuto dalla chiamata
                this.store.contatore = res.data.data.length;

                // creo un alert nel caso in cui l'output della API call sia vuoto(crea un 'errore 400: Bad Request')
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
                <!-- attribuisco alla props 'cardYu' un valore uguale alla card singola ciclata nell'array listCards tramite v-for -->
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