import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LANGUAGES } from 'constants';
import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';

const mockedChangeLanguage = jest.fn();

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      i18n: {
        changeLanguage: mockedChangeLanguage,
      },
    };
  },
}));

describe('<LanguageSwitcher />', () => {
  it('should change language to russian', async () => {
    const { getByRole } = render(<LanguageSwitcher />);
    const button = getByRole('button', { name: LANGUAGES.RU });
    userEvent.click(button);
    expect(mockedChangeLanguage).toBeCalledWith(LANGUAGES.RU);
  });
  it('should change language to english', async () => {
    const { getByRole } = render(<LanguageSwitcher />);
    const button = getByRole('button', { name: LANGUAGES.EN });
    userEvent.click(button);
    expect(mockedChangeLanguage).toBeCalledWith(LANGUAGES.EN);
  });
});
