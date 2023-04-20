<script setup lang="ts">
import { Form } from "../forms";
import { Reactive } from "../types";

defineProps<{ form: Reactive<Form> }>();
</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent="form.submit">
    <slot />

    <button
      class="px-4 py-3 border-gray-100 rounded-md shadow transition"
      :class="{
        'cursor-default text-slate-500 bg-slate-200': !form.isActive,
        'text-white  bg-blue-500 hover:bg-blue-600': form.isActive,
      }"
    >
      <span v-if="form.isLoading" class="block animate-bounce">...</span>
      <span v-else>Envoyer</span>
    </button>
  </form>
</template>
