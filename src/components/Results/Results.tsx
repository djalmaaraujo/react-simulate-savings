import './Results.css';
import { CalcRow } from '../../utils/calculate';
import { Box } from '../Box/Box';

const TotalOf = (field: string, data: Array<CalcRow>) =>
  data.reduce((acc: number, item) => acc + item[field], 0).toFixed(2);
const dollarUSLocale = Intl.NumberFormat('pt-BR');

interface ResultProps {
  results: Array<CalcRow>;
}

export default ({ results }: ResultProps) => (
  <Box margin={{ bottom: 'large' }}>
    <table className="Table">
      <thead>
        <tr>
          <td>
            <strong>Mês</strong>
          </td>
          <td>
            <strong>Rendimento</strong>
          </td>
          <td>
            <strong>Acumulado</strong>
          </td>
        </tr>
      </thead>
      <tbody>
        {results.map((row, i) => (
          <tr key={i}>
            <td>{row.month}</td>
            <td>R$ {dollarUSLocale.format(row.saving)}</td>
            <td>R$ {dollarUSLocale.format(row.amount)}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td> </td>
          <td>
            <strong>
              R$ {dollarUSLocale.format(TotalOf('saving', results))}
            </strong>
          </td>
          <td>
            <strong>
              R${dollarUSLocale.format(results[results.length - 1].amount)}
            </strong>
          </td>
        </tr>
      </tfoot>
    </table>
  </Box>
);
