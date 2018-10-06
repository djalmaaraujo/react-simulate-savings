import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';

const Theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#e5274a',
      focus: '#e5274a',
    }
  }
});

export default Theme;