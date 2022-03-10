import React, { EventHandler, FormEvent, useState } from 'react';
import './App.css';
import { Box } from './components/Box/Box';
import { Calculator } from './components/Calculator/Calculator';
import Results from './components/Results/Results';
import { CalcRow, calculate } from './utils/calculate';

function App() {
  const [results, setResults] = React.useState<Array<CalcRow>>(
    {} as Array<CalcRow>
  );

  const submitHandler = (values: any) => setResults(calculate(values));

  return (
    <div className="App">
      <Box>
        <h1>Calculadora Juros Composto</h1>

        <Calculator onSubmitHandler={submitHandler} />
        {results.length && <Results results={results} />}
      </Box>
    </div>
  );
}

export default App;
