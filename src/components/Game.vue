<template>
    <div v-for="(value, index) in board">
        <GameRow  :columns="value" :row-index="index" :key="index" />
        <br/>
    </div>

</template>

<script lang="ts" setup>
import GameRow from "@/components/GameRow.vue";

defineProps<{
    board: boolean[][]
}>()
</script>

<style lang="scss" scoped>

</style>