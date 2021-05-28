<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm">
            <div class="p-6 bg-white border-b border-gray-200">
                {{messages}}
                <ul>
                    <li v-for="message in messages" :key="message">{{message}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props : {
        messages : Array|Object
    },
    setup(props) {
        const {messages} = props;
        return {
            messages
        }
    },
}
</script>
