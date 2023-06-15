import { z } from "zod";
import { delay } from ".";
import { Field, useReactiveForm } from "../lib";

const useExampleForm = () => {
  const title = new Field({
    label: "title",
    value: "this is my title",
    validation: z.string(),
  });

  const description = new Field({
    label: "description",
    value: "this is my description",
    validation: z.string(),
  });

  const ratings = new Field({
    label: "ratings",
    value: 0,
    validation: z.number(),
  });

  const isUsing = new Field({
    label: "isUsing",
    value: true,
    validation: z.boolean(),
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
