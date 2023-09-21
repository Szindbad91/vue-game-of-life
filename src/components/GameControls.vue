<template>
  <div
    v-if="!isStarted"
    @click="startGame"
  >
      Start
  </div>
  <div
    v-if="isStarted"
    @click="stopGame"
  >
      Stop
  </div>
  <div
    @click="loadGliderGun"
  >
      Load glider gun
  </div>
</template>

<script lang="ts" setup>
  import { useGame } from "@/composables/useGame";

  const { isStarted, startGame, stopGame, loadGliderGun } = useGame();
</script>

<style lang="scss" scoped>

</style>