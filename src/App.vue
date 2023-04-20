<script setup lang="ts">
// Import your library here.
import { ExampleForm } from "./components";
</script>

<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-cyan-600 from-blue-500"
  >
    <Transition
      appear
      enter-from-class="opacity-0 scale-75"
      enter-active-class="transition-all transform duration-1000"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-active-class="transition-all transform duration-1000"
      leave-to-class="opacity-0 scale-75"
    >
      <div class="rounded-md bg-white shadow p-12">
        <ExampleForm />
      </div>
    </Transition>
  </div>
</template>
