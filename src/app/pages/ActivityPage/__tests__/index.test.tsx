import * as React from 'react';
import { render } from '@testing-library/react';

import { ActivityPage } from '..';

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

describe('<ActivityPage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ActivityPage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
