<script setup lang="ts">
import { computed } from "vue";
import { Field } from "../forms";
import { Reactive } from "../types";

interface Props {
  formField: Reactive<Field>;
}

const props = defineProps<Props>();

const value = computed({
  get() {
    return props.formField.value;
  },
  set(value) {
    props.formField.setValue(value);
  },
});
</script>

<template>
  <fieldset class="flex flex-col gap-2">
    <label class="text-sm text-gray-600 block" for="">{{
      formField.label
    }}</label>
    <input
      v-model="value"
      type="text"
      class="px-3 py-2 rounded-md bg-white border placeholder-slate-400 focus:outline-none focus:ring-1 shadow"
      :class="{
        'border-slate-300 focus:border-sky-500 focus:ring-sky-500':
          !formField.validator.isValidated,
        'border-red-600 focus:ring-red-600': formField.validator.hasError,
        'border-green-400 focus:ring-green-400': formField.validator.isValid,
      }"
      @input="formField.validator.resetValidation"
      @blur="formField.validator.validate"
    />
    <div v-if="formField.validator.hasError" class="text-red-600 text-sm">
      {{ formField.validator.error }}
    </div>
  </fieldset>
</template>
