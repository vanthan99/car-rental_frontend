import * as React from 'react';
import { render } from '@testing-library/react';

import { ContactPage } from '..';

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

describe('<ContactPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ContactPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
