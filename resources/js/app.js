import Vue from "vue";
import router from "./router";
import Index from "./components";
import store from "./components/store";

require('./bootstrap');

const app = new Vue({
    el: '#app',
    components: {
        Index
    },

    store,
    router
});
