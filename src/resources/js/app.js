require('./bootstrap');
require('alpinejs');
import { createApp } from "vue";
import TaskDashboard from "./components/tasks/TaskDashboard";

createApp({
    components : {
        TaskDashboard
    }
}).mount('#app');
