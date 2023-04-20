import { Loader } from "@henrotaym/helpers";
import Field from "./field";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class Container<F extends Record<string, Field> = any> {
  private _fields;
  private _loader;
  private _onSubmit?: (form: this) => Promise<void>;

  constructor(fields: F) {
    this._fields = fields;
    this._loader = new Loader(false);
  }

  public get fields() {
    return this._fields;
  }

  public get dirtyFields() {
    return Object.keys(this._fields).reduce(
      (dirtyFields: Partial<F>, key: keyof F) => {
        const field = this._fields[key];
        if (!field.isDirty) return dirtyFields;
        dirtyFields[key] = field;
        return dirtyFields;
      },
      {}
    );
  }

  public onSubmit(onSubmitCallback: (form: this) => Promise<void>) {
    this._onSubmit = onSubmitCallback;
  }

  public async submit() {
    if (!this.isDirty) return console.log("not dirty soz");
    if (this._loader.isLoading) return console.log("loading");
    this.validate();
    if (!this.isValid) return console.log("not valid");
    console.log("submitting");

    await this._loader.loadTill<void>(async () => {
      this.resetValidation();
      await this._onSubmit?.(this);
    });

    console.log("submitted");
  }

  public get isLoading() {
    return this._loader.isLoading;
  }

  public get isValid() {
    const firstInvalid = Object.values(this._fields).find(
      (field) => !field.validator.isValid
    );

    return !firstInvalid;
  }

  public get areFieldsValidated() {
    const firstNotValidated = Object.values(this._fields).find(
      (field) => !field.validator.isValidated
    );

    return !firstNotValidated;
  }

  public get isDirty() {
    const firstDirty = Object.values(this._fields).find(
      (field) => field.validator.isDirty
    );

    return !!firstDirty;
  }

  public get isActive() {
    if (this.isLoading) return false;
    if (this.isValid && this.isDirty) return true;
    if (this.areFieldsValidated) return false;

    return this.isDirty;
  }

  public validate() {
    Object.values(this._fields).forEach((field) => field.validate());
  }

  public resetValidation() {
    Object.values(this._fields).forEach((field) => field.resetValidation());
  }

  public clear() {
    Object.values(this._fields).forEach((field) => {
      field.setValue(undefined);
      field.validator.reset();
    });
  }
}

export default Container;
