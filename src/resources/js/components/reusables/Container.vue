<template>
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-sm">
            <div class="p-6 bg-white border-b border-gray-200">
                <slot name="main"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Container"
    }
</script>

<style scoped>

</style>
