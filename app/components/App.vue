<template>
    <Page>
        <ActionBar title="Home"/>
        <Label text="Welcome" class="h3">
        <TabView androidTabsPosition='bottom'>
            <TabViewItem title="ProductList" class="h2">
                <ProductList @addProduct="addToCart" />
            </TabViewItem>
            <TabViewItem title="Checkout" class="h2">
                <Checkout :cart="cart" @removeProduct="removeFromCart" />
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
import ProductList from './ProductList.vue'
import Checkout from './Form.vue'

export default {
    components: {ProductList, Checkout},
    data () {
        return {
        };
    },
    method: {
     addToCart(product) {
            this.cart.push(product);
            alert("Added to cart: " + product.name);
        },
        removeFromCart(lesson) {
            for (let i=0; i<this.cart.length; i++) {
                if (this.cart[i] == lesson) this.cart.splice(i,1)
            }
        },   
    }
}
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>
