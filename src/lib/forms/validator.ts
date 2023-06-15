import { ZodType } from "zod";

class Validator<TValue, TZodValidator extends ZodType> {
  private _value;
  private _error?: string;
  private _rule;
  private _isValidated;
  private _isDirty;

  constructor(value: TValue, rule: TZodValidator) {
    this._value = value;
    this._rule = rule;
    this._isValidated = false;
    this._isDirty = false;
  }

  public get error() {
    return this._error;
  }

  public get value() {
    return this._value;
  }

  public setValue(value: TValue) {
    this._value = value;
    this._isDirty = true;
  }

  public get isValidated() {
    return this._isValidated;
  }

  public get isDirty() {
    return this._isDirty;
  }

  public get hasError() {
    return !!this._error;
  }

  public validate() {
    this._isValidated = true;
    const parsed = this._rule.safeParse(this._value);
    if (parsed.success) return;

    this._error = parsed.error.errors[0].message;
  }

  public reset() {
    this.resetValidation();
    this._isDirty = false;
  }

  public resetValidation() {
    this._isValidated = false;
    this._error = undefined;
  }

  public get isValid() {
    return this._isValidated && !this.hasError;
  }
}

export default Validator;
