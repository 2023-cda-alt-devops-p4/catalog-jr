<template>
  <div class="header">
    <nav class="navigation">
      <router-link class="navlink" to="/diagrams/struct" replace>Diagrammes Structurels</router-link>
      <router-link class="navlink" to="/diagrams/behavior" replace>Diagrammes comportementaux</router-link>
    </nav>
  </div>
</template>


<script setup lang="ts">
import {ref} from "vue";

const routeProps = ref({
  structParam: "struct",
  behaviorParam: "behavior"
})
</script>


<style scoped lang="scss">
.header {
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    width: 60%;
    height: 60px;
    border-radius: 10px;
    border: 1px solid transparent;

    .navlink {
      text-decoration: none;
      color: white;
      font-family: Arial, sans-serif;
      border: 1px solid black;
      border-radius: 10px;
      padding: 10px;
      background-color: black;

      &:hover{
        color: black;
        background-color: white;
        transition: 0.5s all ease-in-out;
      }
    }
  }
}
</style>