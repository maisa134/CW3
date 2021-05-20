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
                { topic: "English", cost: 5, spaces: 10, location: "NW1" },
                { topic: "French", cost: 12, spaces: 2 ,location: "N12" },
                { topic: "Dance", cost: 20, spaces: 12, location: "WC6"  }
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

