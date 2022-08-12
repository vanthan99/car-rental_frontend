import * as React from 'react';
import { render } from '@testing-library/react';

import { Booking } from '..';

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

describe('<Booking  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Booking />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
