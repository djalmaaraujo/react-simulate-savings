import { FieldValues } from '../components/Calculator/Calculator.types';

export interface CalcRow {
  month: number;
  saving: number;
  amount: number;
}

export const calculate = (data: FieldValues): Array<CalcRow> => {
  const amount = data.initialAmount;
  const rate = data.interest / 100;
  const monthSaving = data.monthly_income;
  const period = data.months;
  const results = [];

  let totalAmount = amount;

  for (let i = 1; i <= period; i++) {
    const saving = totalAmount * rate;
    const amount = totalAmount + saving;

    totalAmount = amount + monthSaving;

    results.push({
      month: i,
      saving: saving,
      amount: amount,
    });
  }

  return results;
};
