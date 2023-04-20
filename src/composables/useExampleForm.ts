import { useFakeFetch } from ".";
import { Field, Form, useReactiveForm } from "../lib";
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

  const form = new Form({
    title,
    description,
  });

  const reactive = useReactiveForm(form);

  reactive.onSubmit(async () => {
    console.log(reactive.dirtyFields);
    await useFakeFetch("success", 2000);
    reactive.clear();
  });

  const reactiveForm = useReactiveForm(form);

  reactiveForm.onSubmit(async () => {
    await new Promise((resolve) =>
      setTimeout(() => {
        console.log({ fields: Object.keys(reactiveForm.dirtyFields) });
        reactiveForm.clear();
        return resolve("youou");
      }, 6000)
    );
  });

  return reactiveForm;
};

export default useExampleForm;
