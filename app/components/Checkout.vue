<template>
    <StackLayout>
    <Label class="h2 text-center" text="Shopping Cart" />
    <Label class="h2 text-center" text="(Tap a lesson to remove it)" />
    <ListView for="lesson in cart" @itemTap='onItemTap '>
    <v-template>
    <StackLayout>
        <Label :text="product.name" />
        <Label :text="`cost: ${product.cost}`" />
        <Label :text="`spaces: ${product.spaces}`" />
        </StackLayout>
    </v-template>
    </ListView>
    <TextField hint='Name' v-model='name'/>
    <TextField hint='Number' v-model='number'/>
    <Button @tap='submitOrder' text='Submit Order'/>
    </StackLayout>
</template>

<script>
export default {
    props: ['cart'],
    methods: {
        onItemTap(event) {
        this.$emit("removeProduct", event.item);
        },
        submitOrder() {
            alert('An order is placed by ' + this.name + " at " + this.number)
        }
    },
};
</script>