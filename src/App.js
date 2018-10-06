import React from 'react';

import {
  Grommet,
  Heading,
  Box,
  ResponsiveContext,
} from 'grommet';


import Results from './Results';
import FormData from './FormData';
import Theme from './Theme';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      data: {
        amount: '1000',
        rate: '0.01', // 1%
        period: '12', // 1 year
        monthSaving: '0',
      }
    };
  }

  componentDidMount() {
    this.calculate();
  }

  calculate(e) {
    if (e) e.preventDefault();

    const { data } = this.state;
    const amount = parseFloat(data.amount) || null;
    const rate = parseFloat(data.rate) || null;
    const monthSaving = parseFloat(data.monthSaving) || null;
    const period = parseInt(data.period, 10) || null;
    const results = [];
    let totalAmount = amount;

    for (let i = 1 ; i <= period ; i++) {
      const saving = totalAmount * rate;
      const amount = totalAmount + saving;

      totalAmount = amount + monthSaving;

      results.push({ month: i, saving: saving.toFixed(2), amount: amount.toFixed(2) });
    }

    this.setState({ results })
  }

  onChangeInput(name, value) {
    const data = this.state.data;

    data[name] = value;

    this.setState({ data });
  }

  render() {
    const {
      data,
      results
    } = this.state;

    return (
      <Grommet theme={Theme} full>
        <Box align="center" justify="center">
          <Heading textAlign="center" level={1}>Calculadora Juros Composto</Heading>

          <ResponsiveContext.Consumer>
            { value => (<Box align="start" direction={(value === 'wide') ? 'row' : 'column'} alignContent="between">
              <FormData
                data={data}
                onSubmit={this.calculate.bind(this)}
                onChangeInput={this.onChangeInput.bind(this)}
              />

              { results && (results.length > 0) && <React.Fragment>
                  { (value !== 'wide') ? <Heading textAlign="center" level={3}>Resultados</Heading> : null }
                  <Results results={results} />
                </React.Fragment>
              }
            </Box>)
            }
          </ResponsiveContext.Consumer>
        </Box>
      </Grommet>
    );
  }
}
