import React, { ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

export interface FieldProps {
  fieldName: string;
  label: string;
  value: string | number;
  type?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement> | undefined;
}

export interface FieldValues {
  initialAmount: number;
  months: number;
  monthly_income: number;
  interest: number;
}

export interface CalculatorProps {
  onSubmitHandler: Function;
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};
