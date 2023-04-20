import { reactive } from "vue";
import { Field, Form } from "../forms";
import { Reactive } from "../types";

const useReactiveForm = <F extends Record<string, Field>>(
  form: Form<F>
): Reactive<Form<F>> => reactive(form);

export default useReactiveForm;
