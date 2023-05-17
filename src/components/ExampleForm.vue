<script setup lang="ts">
import { useExampleForm } from "../composables";
import { FormContainer, FormField } from "../lib";

const form = useExampleForm();
</script>

<template>
  <FormContainer :form="form" class="w-[500px]">
    <FormField :form-field="form.fields.title"></FormField>
    <FormField :form-field="form.fields.description"></FormField>
    <FormField :form-field="form.fields.isUsing"></FormField>
    <FormField :form-field="form.fields.ratings"></FormField>
  </FormContainer>
</template>
