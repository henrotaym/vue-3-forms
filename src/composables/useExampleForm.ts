import { delay } from ".";
import { Field, useForm } from "../lib";
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

  // Creating form instance with created fields.
  const form = useForm({
    title,
    description,
  });

  // Executing given callback when form is submitted
  form.onSubmit(async () => {
    // Getting dirty fields
    console.log(Object.keys(form.dirtyFields));
    // Performing request (fake request here...)
    await delay(3000);
    // Clearing form
    form.clear();
  });

  return form;
};

export default useExampleForm;
