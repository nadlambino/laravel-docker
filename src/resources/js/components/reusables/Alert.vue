<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-2" v-if="hasMessage">
        <div 
            class="bg-white overflow-hidden shadow-sm" 
            :class="alertTypeClass">
            <div class="p-2 bg-white border-b border-gray-200 mt-2">
                <ul>
                    <li v-for="(message, key) in messages" :key="key">{{ message[0] }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue'

export default {
    props : {
        messages : Array|Object,
        type : {
            type    : String,
            default : () => ('info')
        }
    },
    setup(props) {
        const hasMessage = ref(false);
        const alertTypeClass = computed(() => {
            if (props.type === 'success') {
                return 'bg-green-600';
            }
            if (props.type === 'error') {
                return 'bg-red-600';
            }
            if (props.type === 'warning') {
                return 'bg-yellow-600';
            }
            return 'bg-blue-600';
        });
        hasMessage.value = props.messages.length > 0;
        watch(() => props.messages, (message) => {
            hasMessage.value = Object.keys(message).length > 0;
        })
        return {
            hasMessage,
            alertTypeClass
        }
    },
}
</script>
