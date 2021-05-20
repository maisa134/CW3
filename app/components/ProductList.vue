<template>
    <ListView for='product in products' @itemTap='onItemTap'> 
    <v-template>
        <StackLayout>
        <Label :text='product.topic'/>
        <Label :text="`price: ${product.cost}`"/>
        <Label :text="`spaces: ${product.spaces}`"/>
        <Label :text="`location: ${product.location}`"/>
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
                { topic: "French", cost: 7, spaces: 10, location: "NW1" },
                { topic: "Latin", cost: 9, spaces: 10, location: "NW1" },
                { topic: "Spanish", cost: 10, spaces: 10, location: "NW1" },
                { topic: "Chinese", cost: 20, spaces: 10, location: "NW1" }
            ],
       };
    },
    methods: {
        onItemTap(event) {
            alert("Added to cart: " + event.item.name);
            this.$emit('addProduct', event.item);
        }
    }
}
</script>