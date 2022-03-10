import React, { ChangeEvent, ChangeEventHandler, FormEvent } from 'react';
import {
  CalculatorProps,
  FieldProps,
  FieldValues,
} from '../Calculator/Calculator.types';
import './Calculator.css';

const Field = ({
  fieldName,
  label,
  type = 'text',
  value = '',
  onChange,
}: FieldProps): any => (
  <div className="Field">
    <label className="FieldLabel" htmlFor={fieldName}>
      {label}
    </label>
    <input
      type={type}
      value={value}
      className="FieldInput"
      onChange={onChange}
    />
  </div>
);

const defaultValues: FieldValues = {
  initialAmount: 1000,
  months: 12,
  monthly_income: 0,
  interest: 1,
};

export const Calculator = ({ onSubmitHandler }: CalculatorProps) => {
  const [values, setValue] = React.useState(defaultValues);

  const onChangeInput = (
    fieldName: string
  ): ChangeEventHandler<HTMLInputElement> | undefined => {
    return (event: ChangeEvent) => {
      setValue({
        ...values,
        [fieldName]: parseFloat(event.target.value) || 0,
      });
    };
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    onSubmitHandler(values);
  };

  return (
    <form onSubmit={onSubmit} className="Calculator">
      <Field
        type="number"
        fieldName="initialAmount"
        label="Montante inicial"
        value={values.initialAmount}
        onChange={onChangeInput('initialAmount')}
      />

      <Field
        type="number"
        fieldName="months"
        label="Período (em meses)"
        value={values.months}
        onChange={onChangeInput('months')}
      />

      <Field
        type="number"
        fieldName="monthly_income"
        label="Aporte mensal"
        value={values.monthly_income}
        onChange={onChangeInput('monthly_income')}
      />

      <Field
        type="number"
        fieldName="interest"
        label="Rendimento mensal em %"
        value={values.interest}
        onChange={onChangeInput('interest')}
      />

      <button type="submit" className="Button">
        Atualizar resultados
      </button>
    </form>
  );
};
