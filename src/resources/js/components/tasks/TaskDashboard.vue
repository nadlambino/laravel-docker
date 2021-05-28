<template>
    <fragment>
        <teleport to="#alert-container" disabled>
            <Alert :messages="messages" />
        </teleport>
        <Container>
            <template #main>
                <div class="container">
                    <form name="task_form" @submit.prevent="validateTask">
                        <div class="mb-4">
                            <label for="task" class="text-gray-600 font-bold">Task</label>
                            <input 
                                id="task"
                                type="text" 
                                placeholder="What are you planning to do?"
                                class="
                                    h-8  
                                    border-gray-300 
                                    w-full text-sm 
                                    text-gray-700
                                    p-2"
                                autofocus
                                v-model="taskFormValue.title"
                            />
                        </div>
                        <div class="container md:flex">
                            <div class="mb-4 md:flex-1 md:mr-1">
                                <label for="date_from" class="text-gray-600 font-bold">When to start?</label>
                                <input 
                                    id="date_from"
                                    type="date" 
                                    class="
                                        h-8  
                                        border-gray-300 
                                        w-full text-sm 
                                        text-gray-700
                                        p-2"
                                    v-model="taskFormValue.date_from"
                                />
                            </div>
                            <div class="mb-4 md:flex-1 md:ml-1">
                                <label for="date_to" class="text-gray-600 font-bold">When to finish?</label>
                                <input 
                                    id="date_to"
                                    type="date" 
                                    class="
                                        h-8  
                                        border-gray-300 
                                        w-full text-sm 
                                        text-gray-700
                                        p-2"
                                    v-model="taskFormValue.date_to"
                                />
                            </div>
                        </div>
                        <div class="mb-4">
                            <label for="description" class="text-gray-600 font-bold">Description</label>
                            <textarea 
                                id="description"
                                placeholder="What is this task all about?"
                                class="
                                    h-300  
                                    border-gray-300 
                                    w-full text-sm 
                                    text-gray-700
                                    p-2"
                                v-model="taskFormValue.description"
                            ></textarea>
                        </div>
                        <div class="mb-4">
                            <input
                                @submit.prevent="validateTask"
                                type="submit" 
                                id="task_submit"
                                value="Create Task"
                                class="
                                    h-300 
                                    border-gray-300 
                                    w-full text-sm 
                                    text-white
                                    p-2 bg-green-900 hover:bg-green-800"
                            />
                        </div>
                    </form>
                </div>
            </template>
        </Container>
    </fragment>
</template>

<script>
    import { ref } from "vue";
    import { useStore } from "vuex";
    import { validator } from "./../../mixins/validator";
    import Container from "../reusables/Container";
    import Alert from '../reusables/Alert.vue';

    export default {
        name: 'TaskDashboard',
        mixins: [validator],
        components: { Container, Alert },
        setup() {
            const store = useStore();
            const { methods } = validator;
            const dateNow = store.state.date_time.now().toISODate();
            const messages = ref([]);
            const taskFormValue = ref({
                title       : null,
                date_from   : dateNow,
                date_to     : dateNow,
                description : null
            });
            const taskFormRules = {
                title       : ['required', 'string'],
                date_from   : ['required', 'date'],
                date_to     : ['required', 'date'],
                description : ['string']
            }

            function validateTask() {
                const validate = methods.validateForm(taskFormValue, taskFormRules)
                if (validate.success === false) {
                    messages.value = validate.message;
                }
            }
            
            return {
                taskFormValue,
                validateTask,
                messages
            }
        }
    }
</script>

<style scoped>

</style>
