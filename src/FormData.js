import React from 'react';

import {
  Box,
  Button,
  TextInput,
  FormField,
} from 'grommet';


const Input = ({name, handler, ...rest}) => (
  <TextInput
    type="number"
    min={0}
    onChange={(e) => handler(name, e.target.value) }
    {...rest}
  />
)

export default ({
  onChangeInput,
  onSubmit,
  data
}) => (
  <Box background="brand" pad="large" round='small' margin={{ right: 'medium' }}>
    <form onSubmit={onSubmit}>
      <FormField label="Montante inicial">
        <Input
          value={data.amount}
          name="amount"
          handler={onChangeInput}
        />
      </FormField>

      <FormField label="Período (em meses)">
        <Input
          value={data.period}
          name="period"
          step={1}
          min={1}
          handler={onChangeInput}
        />
      </FormField>

      <FormField label="Montante mensal aportado">
        <Input
          value={data.monthSaving}
          name="monthSaving"
          handler={onChangeInput}
        />
      </FormField>

      <FormField label="Rendimento mensal em %">
        <Input
          value={data.rate}
          name="rate"
          handler={onChangeInput}
        />
      </FormField>

      <br />

      <Button
        primary
        fill
        color="white"
        type="submit"
        label="Atualizar resultados"
      ></Button>
    </form>
  </Box>
)