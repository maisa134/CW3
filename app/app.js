import Vue from 'nativescript-vue';

import App from './components/App.vue';

// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <App />
        </Frame>`,

    components: {
        App
    }
}).$start();