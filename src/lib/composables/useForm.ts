import { reactive } from "vue";
import { Field, Form } from "../forms";
import { Reactive } from "../types";

const useForm = <F extends Record<string, Field>>(
  form: Form<F>
): Reactive<Form<F>> => reactive(form);

export default useForm;
