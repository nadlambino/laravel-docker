require('./bootstrap');
require('alpinejs');
import { createApp, provide } from "vue";
import { createStore } from "vuex";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import TaskDashboard from "./components/tasks/TaskDashboard";
import store from "./store/store";

// Create the apollo client
const apolloClient = new ApolloClient({
    uri   : 'http://laravel-docker.local.com/graphql',
    cache : new InMemoryCache()
})

// Create the vue app
const app = createApp({
    setup () {
        provide(DefaultApolloClient, apolloClient)
    },
    components: {
        TaskDashboard
    }
});

const appStore = createStore(store);

// Includes app components then mount the app
app.components = {
    TaskDashboard
};
app.use(appStore);
app.mount('#app');
