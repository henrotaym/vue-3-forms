import { UnwrapNestedRefs } from "vue";

export type Reactive<T> = UnwrapNestedRefs<T>;
