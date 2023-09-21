<template>
  <GameControls/>
  <Game :board="board"/>
</template>

<script lang="ts" setup>
import {useGame} from "@/composables/useGame";
import GameControls from "@/components/GameControls.vue";
import Game from "@/components/Game.vue";

const { initBoard, board } = useGame();
initBoard(30, 50);
</script>

<style lang="scss" scoped>

</style>