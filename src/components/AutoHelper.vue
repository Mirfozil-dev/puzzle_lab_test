<script setup>
import { RouterLink } from 'vue-router'
import router from '@/router'
import { ref } from 'vue'

const props = defineProps(['autoHelperActive', 'helpersArray'])

const focusedUser = ref('')

document.addEventListener('keydown', (e) => {
    if (props.helpersArray.length === 0) return
    if (focusedUser.value === '' && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
        focusedUser.value = props.helpersArray[0].id
    } else {
        switch (e.key) {
            case 'ArrowUp':
                if (focusedUser.value === props.helpersArray[0].id) return
                focusedUser.value = props.helpersArray[props.helpersArray.findIndex(user => user.id === focusedUser.value) - 1].id
            break;
            case 'ArrowDown':
                if (focusedUser.value === props.helpersArray[props.helpersArray.length - 1].id) return
                focusedUser.value = props.helpersArray[props.helpersArray.findIndex(user => user.id === focusedUser.value) + 1].id
            break;
            case 'Enter':
                if (focusedUser.value === '') return
                router.push(`/single/${focusedUser.value}`)
            break;
            default:
                focusedUser.value = ''
                break;
        }
    }
})
</script>

<template>
    <div :class="autoHelperActive && helpersArray.length > 0 && 'active'" class="auto-helper">
        <RouterLink 
            v-for="user in helpersArray" 
            :key="user.id" :to="`/single/${user.id}`"
            :class="focusedUser === user.id ? 'active' : ''"
        >{{ user.name }}</RouterLink>
    </div>
</template>

<style lang="scss">
.auto-helper {
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background: #fff;
    transition: opacity 0.15s ease-out;
    opacity: 0;
    z-index: -1;

    &.active {
        opacity: 1;
        z-index: 1;
        transition: opacity 0.25s ease-in;
        border: 1px solid #ddd;
    }

    a {
        text-decoration: none;
        color: #000;
        margin: 10px;

        &:hover, &.active {
            text-decoration: underline;
        }
    }

    p {
        margin: 10px;
    }
}
</style>
