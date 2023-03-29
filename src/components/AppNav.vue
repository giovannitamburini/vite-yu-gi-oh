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
    <div id="nav">
        <img src="/background.png" alt="">

        <h1><em>Yu-gi-oh</em></h1>

    </div>
</template>

<style lang="scss" scoped>
#nav {
    display: flex;
    align-items: center;
    height: 180px;
    background-color: #103188;


    img {
        height: 100%;
    }

    h1 {
        padding-left: 50px;
        color: red;
        font-size: 4em;
        text-shadow: 2px 2px 8px black;
    }

}
</style>