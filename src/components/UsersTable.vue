<script setup>
import { useUsersStore } from '@/stores/users'
const store = useUsersStore()
const props = defineProps(['users'])
</script>


<template>
    <table v-if="store.searchResult.length > 0" class="users-table" border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in store.searchResult" :key="user.id">
                <td>{{ user.id }}</td>
                <td>
                    <RouterLink :to="`/single/${user.id}`">{{ user.name }}</RouterLink>
                </td>
                <td>{{ user.email }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss">
.users-table {
    width: 100%;
    margin-top: 10px;
    border-collapse: collapse;
    td, th {
        padding: 5px;
        &:first-child {
            width: 20px;
        }
        a {
            color: #000;

            &:hover {
                text-decoration: none;
            } 
        }
    }
}
</style>