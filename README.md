# Creating reactive vue 3 form. 🔥

## Installation
```shell
yarn add @henrotaym/vue-3-forms
```

## Usage
### Composable
```typescript
import { Field, useReactiveForm } from "../lib";
import Joi from "joi";

const useExampleForm = () => {
  const title = new Field({
    label: "title",
    value: "this is my title",
    validation: Joi.string().required(),
  });

  const description = new Field({
    label: "description",
    value: "this is my description",
    validation: Joi.string().required(),
  });

  const ratings = new Field({
    label: "ratings",
    value: 0,
    validation: Joi.number().required(),
  });

  const isUsing = new Field({
    label: "isUsing",
    value: true,
    validation: Joi.boolean().required(),
  });

  const form = useReactiveForm({
    ratings,
    title,
    description,
    isUsing,
  });

  form.onSubmit(async () => {
    // Executed only if form is valid and not already loading
    console.log(Object.keys(form.dirtyFields));
    form.clear();
  });

  return form;
};

export default useExampleForm;
```

### Form component
```vue
<script setup lang="ts">
import { useExampleForm } from "../composables";
import { FormContainer, FormField } from "@henrotaym/vue-3-forms";

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
```

## Development
### Initialization
```shell
./cli bootstrap
```

### Usage
#### Start dev server
```shell
./cli start
```

#### Stop dev server
```shell
./cli stop
```

#### Yarn
```shell
./cli yarn install
```

#### Publish versions
You should install npm locally and authenticate yourself first.
```shell
npm version patch
```