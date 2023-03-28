<script>

export default {
    data() {
        return {

        }
    },

    props: {
        cardYu: Object,
    },

}
</script>

<template>
    <div class="card-yugioh-container">
        <img :src="cardYu.card_images[0].image_url" alt="Yu-gi-oh card">
        <div class="description-card">
            <div>
                <strong>name: </strong><em>{{ cardYu.name }}</em>
            </div>
            <div>
                <strong>race: </strong><em>{{ cardYu.race }}</em>
            </div>
            <div>
                <strong>archetype: </strong><em>{{ cardYu.archetype }}</em>
            </div>
            <div>
                <strong>id: </strong><em>{{ cardYu.card_images[0].id }}</em>
            </div>
            <div class="prices">
                <ul>
                    <strong>PRICE:</strong>
                    <li><strong>cardmarket: </strong><em>{{ cardYu.card_prices[0].cardmarket_price }}</em></li>
                    <li><strong>tcgplayer: </strong><em>{{ cardYu.card_prices[0].tcgplayer_price }}</em></li>
                    <li><strong>ebay: </strong><em>{{ cardYu.card_prices[0].ebay_price }}</em></li>
                    <li><strong>amazon: </strong><em>{{ cardYu.card_prices[0].amazon_price }}</em></li>
                    <li><strong>coolstuffinc: </strong><em>{{ cardYu.card_prices[0].coolstuffinc_price }}</em></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-yugioh-container {
    display: flex;
    flex-flow: row nowrap;
    gap: 5px;
    padding: 5px;
    border: 2px solid black;
    width: 380px;

    img {
        width: 150px;
    }

    .prices {
        ul {
            padding: 0;
            list-style-type: none;
        }
    }
}
</style>