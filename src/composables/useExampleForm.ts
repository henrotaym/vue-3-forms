import { Field, Form, useForm } from "../lib";
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

  const reactiveForm = useForm(form);

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
