<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/toDoer">Tarea</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
