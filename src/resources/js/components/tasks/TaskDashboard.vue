<template>
    <Container>
        <template #main>
            
        </template>
    </Container>
</template>

<script>
    import { reactive, ref } from "vue";
    import Container from "../reusables/Container";
    import { useQuery, useResult } from "@vue/apollo-composable";
    import getPaginatedUsers from "../../graphql/users/get_paginated_users.gql";

    export default {
        name: 'TaskDashboard',
        components: { Container },
        setup() {
            const { result, loading } = useQuery(getPaginatedUsers);
            const users = useResult(result)
            console.log(users.value);

            return {
                
            }
        }
    }
</script>

<style scoped>

</style>
