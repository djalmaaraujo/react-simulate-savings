import React from 'react';

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableFooter,
  TableRow,
} from 'grommet';

const TotalOf = (field, data) => (data.reduce((acc, item) => acc + parseFloat(item[field]), 0)).toFixed(2)

export default ({
  results
}) => (
  <Box margin={{ bottom: 'large' }}>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope='col' border='bottom'><strong>Mês</strong></TableCell>
          <TableCell scope='col' border='bottom'><strong>Rendimento</strong></TableCell>
          <TableCell scope='col' border='bottom'><strong>Acumulado</strong></TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          results.map((row, i) => <TableRow key={i}>
              <TableCell scope='row'>{row.month}</TableCell>
              <TableCell>R${row.saving}</TableCell>
              <TableCell>R${row.amount}</TableCell>
            </TableRow>
          )
        }
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell border='top' scope='row'>-</TableCell>
          <TableCell border='top'><strong>R${TotalOf('saving', results)}</strong></TableCell>
          <TableCell border='top'><strong>R${ results[results.length-1].amount }</strong></TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </Box>
)