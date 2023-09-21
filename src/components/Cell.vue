<template>
  <div
        class="cell"
        :class="{
          alive: isAlive,
        }"
        @click="toggleAlive(rowIndex, columnIndex)"
  >

  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";
import {useGame} from "@/composables/useGame";

const props = defineProps<{
    rowIndex: number,
    columnIndex: number,
    isAlive: boolean,
}>()

const { toggleAlive } = useGame();

const numberValue = computed(() => {
    return props.isAlive ? 1 : 0;
})
</script>

<style lang="scss" scoped>
.cell {
  width: 20px;
  height: 20px;
  float: left;
  border: 1px solid black;
  margin: 1px;

  &.alive {
    background-color: black;
  }
}
</style>