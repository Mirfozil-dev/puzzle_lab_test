<script setup>
import UsersTable from '../components/UsersTable.vue'
import InputSearch from '../components/InputSearch.vue'

</script>

<template>
    <div class="container">
        <div class="main-wrapper">
            <InputSearch />
            <UsersTable />
        </div>
    </div>
</template>

<style lang="scss">
.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    .main-wrapper {
        margin: 0 auto;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 8px;
    }
}
</style>