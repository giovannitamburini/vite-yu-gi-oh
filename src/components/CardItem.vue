<script>
export default {
    data() {
        return {
        }
    },

    // dichiaro le props per comunicare dal genitore al figlio
    props: {
        // devo dichiarare il tipo di variabile, in questo caso è un oggetto;
        cardYu: Object,
    },
}
</script>

<template>
    <div class="card-yugioh-container">
        <!-- tutte le proprietà sono ottenute tramte la props 'cardYu'  -->
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
                    <li><strong>price cardmarket: </strong><em>{{ cardYu.card_prices[0].cardmarket_price }}</em></li>
                    <li><strong>price tcgplayer: </strong><em>{{ cardYu.card_prices[0].tcgplayer_price }}</em></li>
                    <li><strong>price ebay: </strong><em>{{ cardYu.card_prices[0].ebay_price }}</em></li>
                    <li><strong>price amazon: </strong><em>{{ cardYu.card_prices[0].amazon_price }}</em></li>
                    <li><strong>price coolstuffinc: </strong><em>{{ cardYu.card_prices[0].coolstuffinc_price }}</em></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-yugioh-container {
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    gap: 5px;
    padding: 5px;
    border: 2px solid black;
    width: 400px;
    font-size: 0.9em;

    img {
        width: 155px;

        &:hover {
            transform: scale(1.8);
            transform-origin: left;
            transition-duration: 1s;
            border: 1px solid black;
            box-shadow: 5px 5px 10px black;
        }
    }

    .prices {
        ul {
            padding: 0;
            list-style-type: none;
        }
    }
}
</style>