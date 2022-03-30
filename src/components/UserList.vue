<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success">User List</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid aperiam dignissimos dolor doloribus dolorum est facere ipsam, laborum molestiae molestias numquam, quis tempore ut, veritatis voluptates voluptatum.
                </p>
            </div>
        </div>
    </div>

    <div v-if="userState.loading" class="container">
        <div class="row">
            <div class="col">
                <Spinner/>
            </div>
        </div>
    </div>

    <div v-if="!userState.loading && userState.errorMessage" class="container">
        <div class="row">
            <div class="col">
                <p class="fw-bold text-danger">{{ errorMessage }}</p>
            </div>
        </div>
    </div>

    <div v-if="!userState.loading && userState.users.length > 0" class="container">
        <div class="row">
            <div class="col">
                <table class="table table-hover text-center table-striped">
                    <thead class="bg-secondary text-white">
                        <tr>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Company</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in userState.users" :key="user.id">
                            <td>{{ user.id }}</td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.website }}</td>
                            <td>{{ user.company.name }}</td>
                            <td>{{ user.address.city }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import Spinner from "@/components/Spinner";
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
    name: "UserList",
    components: { Spinner },
    setup () {
        const store = useStore()
        onMounted(() => {
            store.dispatch("usersModule/getUsers")
        })
        const userState = computed(() => store.getters.getUsersState);
        return {
            userState
        }
    },
}
</script>

<style scoped>
</style>