<script setup lang="ts">
import { Form } from "../forms";
import { Reactive } from "../types";

defineProps<{ form: Reactive<Form> }>();
</script>

<template>
  <form class="flex flex-col gap-6" @submit.prevent="form.submit">
    <slot />

    <button
      class="px-4 py-2 border-gray-100 rounded-md shadow"
      :class="{
        'cursor-not-allowed text-gray-600 bg-gray-300': !form.isActive,
        'text-white bg-blue-500': form.isActive,
      }"
    >
      {{ form.isLoading ? "loading" : "envoyer" }}
    </button>
  </form>
</template>
