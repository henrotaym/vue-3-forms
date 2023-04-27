import { delay } from ".";
import { Field, useForm } from "../lib";
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

  const form = useForm({
    title,
    description,
  });

  form.onSubmit(async () => {
    console.log(Object.keys(form.dirtyFields));
    await delay(3000);
    form.clear();
  });

  return form;
};

export default useExampleForm;
