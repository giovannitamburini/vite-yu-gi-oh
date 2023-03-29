import { reactive } from 'vue';

export const store = reactive({
    // inizzializzo un array vuoto in cui inserirò l'output della chiamata all' API
    listCards: [],
    // inizzializzo una booleana per 
    loading: true,

    // link chiamata API originale
    APICall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',

    // nuivo link: è una chiamata senza filtri e darebbe un risultato troppo grande.
    // ci attaccherò le stringhe che seguono
    newAPICall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    //stringa necessaria per applicare un filtro
    APIrange: '?num=',
    // +
    rangeValue: '50',
    // + (stringa per decidere, numericamente, il punto di partenza della ricerca)
    APIstart: '&offset=',
    // +
    startValue: '0',
    // + (filtro per la proprietà nome della carta)
    APIquery: '&fname=',

    // gli attribuisco il valore tramite il v-model dell'input text nella componente CardSearch.vue
    searchInput: '',

    // gli attribuisco un valore numerico pari al numero di carte risultanti dalla ricerca (è uguale alla lunghezza dell'array che ci restituisce l'API: res.data.data.length)
    contatore: Number,

});