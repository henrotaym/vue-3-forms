# Creating reactive vue 3 form. 🔥

## Installation
```shell
yarn add @henrotaym/vue-3-forms
```

## Usage
### Composable
```typescript
import { Field, useForm } from "@henrotaym/vue-3-forms../lib";
import Joi from "joi";

const useExampleForm = () => {

  // Creating title field.
  const title = new Field({
    label: "title",
    value: "this is my title",
    validation: Joi.string().required(),
  });

  // Creating description field.
  const description = new Field({
    label: "description",
    value: "this is my description",
    validation: Joi.string().required(),
  });

  // Creating form instance
  const form = useForm({
    title,
    description,
  });

  // Defining form submit callback
  form.onSubmit(async () => {
    console.log(Object.keys(form.dirtyFields));
    await delay(3000);
    form.clear();
  });

  return form;
};

export default useExampleForm;
```

### Form
```vue
<script setup lang="ts">
import { useExampleForm } from "~/composables/forms";
import { FormContainer, FormField } from "@henrotaym/vue-3-forms";

const form = useExampleForm();
</script>

<template>
  <FormContainer :form="form">
    <FormField :form-field="form.fields.title"></FormField>
    <FormField :form-field="form.fields.description"></FormField>
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