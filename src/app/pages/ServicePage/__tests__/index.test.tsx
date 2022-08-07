import * as React from 'react';
import { render } from '@testing-library/react';

import { ServicePage } from '..';

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

describe('<ServicePage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ServicePage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
