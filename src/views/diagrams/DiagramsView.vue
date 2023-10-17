<template>
  <StructDiag v-if="pathParam === 'struct'"/>
  <BehaviorDiag v-if="pathParam === 'behavior'"/>
</template>


<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted} from "vue";

// CONSTANTS
const route = useRoute()
const pathParam = route.params.id

// REFS & REACTIVES

onMounted(() => {
  console.log(pathParam)
})

</script>


<style scoped lang="scss">

</style>