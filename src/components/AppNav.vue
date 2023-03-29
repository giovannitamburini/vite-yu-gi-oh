<script>

export default {
    data() {
        return {
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
    margin-bottom: 15px;
    border-bottom: 2px solid black;
    box-shadow: 0px 5px 10px black;

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