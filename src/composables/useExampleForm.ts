import { delay } from ".";
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
    console.log(Object.keys(form.dirtyFields));
    await delay(3000);
    form.clear();
  });

  return form;
};

export default useExampleForm;
