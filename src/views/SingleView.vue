<script setup>
import { useUsersStore } from '@/stores/users'
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const store = useUsersStore()
const route = useRoute()

const user = computed(() => store.users.find(user => user.id === parseInt(route.params.id)))
</script>

<template>
    <div class="container">
        <div class="profile-header">
            <img src="https://via.placeholder.com/100" alt="User Image" class="profile-image">
            <div class="profile-info">
                <h2>{{ user.name }}</h2>
                <p><strong>Email:</strong> {{ user.email }}</p>
                <p><strong>Address:</strong> {{ user.address.street }}, {{ user.address.city }}, {{ user.address.state }} {{ user.address.zipCode }}</p>
                <p><strong>ID:</strong> {{ user.id }}</p>
                <RouterLink :to="{name: 'home'}" class="btn">Back to Users</RouterLink>
            </div>
        </div>
    </div>
</template>
<style>
.profile-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 20px;
}
.profile-info {
    flex: 1;
}
.profile-info h2 {
    margin: 0;
    font-size: 1.8rem;
    color: #333;
}
.profile-info p {
    margin: 5px 0;
    color: #666;
}
.btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
.btn:hover {
    background-color: #0056b3;
}
@media (max-width: 600px) {
    .profile-header {
    flex-direction: column;
    align-items: flex-start;
    }
    .profile-image {
    margin-right: 0;
    margin-bottom: 10px;
    }
}
</style>