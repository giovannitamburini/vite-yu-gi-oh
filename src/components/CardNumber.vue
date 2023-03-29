<script>

import { store } from "../store.js";


export default {
    data() {
        return {

            store,

        }
    },

}
</script>

<template>
    <div id="contatore">
        numero di carte trovate: {{ store.contatore }}
    </div>
</template>

<style lang="scss" scoped>
#contatore {
    background-color: #06652a;
    padding: 3px;
    border: 1px solid black;
    box-shadow: 2px 2px 5px black;
}
</style>