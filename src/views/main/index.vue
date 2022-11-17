<template>
    <div>
        <h2>我是main</h2>
        {{userInfoStore.userName}}
    </div>
</template>

<script setup lang="ts">
import {useUserInfoStore} from "@/store/modules/userInfo-store"
const userInfoStore = useUserInfoStore();
</script>

<style scoped>

</style>