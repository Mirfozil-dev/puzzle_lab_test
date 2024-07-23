<script setup>
import { useUsersStore } from '@/stores/users'
import AutoHelper from './AutoHelper.vue'
import { ref, computed } from 'vue'

const store = useUsersStore()

const autoHelperActive = ref(false)

const inputVal = computed({
    set: val => {
        store.setSearchVal(val)
    },
    get: () => store.searchVal
})

const setAutoHelper = val => {
    autoHelperActive.value = val
}

const handleSearch = () => {
    if (inputVal.value.length != '') {
        store.searchUsers()
    } else {
        store.setSearchResult([])
    }
}
</script>

<template>
    <div class="search-wrapper">
        <div class="input-wrapper">
            <input @focus="setAutoHelper(true)" @blur="setAutoHelper(false)" 
            v-model="inputVal" @input="store.searchDebounce" type="text" class="custom-input" placeholder="Search...">
            <AutoHelper :auto-helper-active="autoHelperActive" :helpers-array="store.helpersArray" />
        </div>
        <button @click="handleSearch" class="custom-btn search-btn">
            <img src="../assets/images/search_icon.svg" alt="">
        </button>
    </div>
</template>

<style lang="scss">
.search-wrapper {
    display: flex;
    gap: 5px;
    .input-wrapper {
        input {
            padding: 0 10px;
            height: 30px;
        }
    }

    .search-btn {
        width: 30px;
        height: 30px;
        padding: 3px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>