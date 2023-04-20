import { AnySchema } from "joi";
import Validator from "./validator";

class Field<V = unknown> {
  private _label;
  private _validator;
  constructor({
    label,
    value,
    validation,
  }: {
    label: string;
    value: V;
    validation: AnySchema<V>;
  }) {
    this._label = label;
    this._validator = new Validator(value, validation);
  }

  public get label() {
    return this._label;
  }

  public get value() {
    return this._validator.value;
  }

  public set value(value: V) {
    this._validator.setValue(value);
  }

  public setValue(value: V) {
    this._validator.setValue(value);
    return this;
  }

  public get validator() {
    return this._validator;
  }

  public get error() {
    return this._validator.error;
  }

  public get isValidated() {
    return this._validator.isValidated;
  }

  public get isDirty() {
    return this._validator.isDirty;
  }

  public get hasError() {
    return !!this._validator.hasError;
  }

  public validate() {
    this._validator.validate();
  }

  public reset() {
    this._validator.reset();
  }

  public resetValidation() {
    this._validator.resetValidation();
  }

  public get isValid() {
    return this._validator.isValid;
  }
}

export default Field;
