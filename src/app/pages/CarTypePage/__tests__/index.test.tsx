import * as React from 'react';
import { render } from '@testing-library/react';

import { CarTypePage } from '..';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: str => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

describe('<CarTypePage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CarTypePage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
