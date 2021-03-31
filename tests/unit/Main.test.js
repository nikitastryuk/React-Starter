import { render } from '@testing-library/react';

import { AppProviders } from 'app/AppProviders/AppProviders';
import Main from 'pages/Main';

// TODO: Need more configurable providers for tests? Move to shared namespace.
// function renderWithProviders(component) {
//   return render(<AppProviders>{component}</AppProviders>);
// }

describe('Main page', () => {
  it('should render main page and fetch joke', async () => {
    const { getByText, getByTestId, findByTestId } = render(<Main />, { wrapper: AppProviders });
    expect(getByText(/loading\.\.\./i)).toBeTruthy();
    expect(await findByTestId('main-page')).toBeTruthy();
    expect(getByTestId('main-page-joke')).toBeTruthy();
  });
});
