<template>
    <ListView for='product in products' @itemTap='onItemTap'> 
    <v-template>
        <StackLayout>
        <Label :text='product.topic'/>
        <Label :text="`price: ${product.cost}`"/>
        </StackLayout>
    </v-template>
    </ListView>
</template>

<script>
export default {
    data() {
       return {
            products: [
                { topic: "English", cost: 5, spaces: 10, location: "NW1" }
            ],
       };
    },
    methods: {
        onItemTap(event) {
            alert("Added to cart: " + event.item.topic);
            this.$emit('addProduct', event.item);
        }
    }
}

