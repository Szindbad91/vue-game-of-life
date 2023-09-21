<template>
    <div class="row">
        <Cell v-for="(value, index) in columns" :row-index="rowIndex" :column-index="index" :is-alive="value" :key="index" />
    </div>
</template>

<script lang="ts" setup>
import Cell from "@/components/Cell.vue";

defineProps<{
    columns: boolean[],
    rowIndex: number,
}>()

</script>

<style lang="scss" scoped>
.row {
  clear: both;
}
</style>