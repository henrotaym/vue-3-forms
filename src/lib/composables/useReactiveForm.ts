import { reactive } from "vue";
import { Field, Form } from "../forms";
import { Reactive } from "../types";

const useForm = <F extends Record<string, Field>>(
  fields: F
): Reactive<Form<F>> => reactive(new Form(fields));

export default useForm;
