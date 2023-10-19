<template>
  <div class="main-layout">
    <div class="data-row" v-for="object in jsonData">
      <h2>{{ object.title }}</h2>
      <p>Description : {{ object.description }}</p>
      <p>Avantages :</p>
      <ul class="list" v-for="subObject in object.avantages">
        <li>{{ subObject }}</li>
      </ul>
      <p>Bonne pratiques :</p>
      <ul class="list" v-for="subObject in object.goodPractices">
        <li>{{ subObject }}</li>
      </ul>
      <!-- TODO - IMAGE NE FONCTIONNE PAS -->
      <img :src="object.image" alt="Image d'un diagramme UML de classe"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import jsonData from "@/assets/structData.json";

</script>

<style scoped lang="scss">
.main-layout {
  display: flex;
  width: 100%;
  height: max-content;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  .data-row {
    width: 80%;
    flex-direction: column;
    display: flex;
    height: auto;
    padding: 10px;
    border: 1px solid black;
    border-radius: 10px;

    .list {
      padding-left: 40px;
    }
  }
}
</style>