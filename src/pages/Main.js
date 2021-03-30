import { ErrorBoundary } from 'react-error-boundary';
import { useQuery, useQueryErrorResetBoundary } from 'react-query';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { Button } from 'components/Button/Button';
import { StyledPage } from 'styles/StyledPage';
import axios from 'utils/axios';

export function MainErrorBoundary({ children }) {
  const { t } = useTranslation();
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <StyledPage fontsize="50px">
          <h1>{error.message}</h1>
          <Button onClick={resetErrorBoundary}>{t('main.tryAgain')}</Button>
        </StyledPage>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}

MainErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

class TestApi {
  static getTestData() {
    return axios.get('https://api.chucknorris.io/jokes/randosm');
  }
}

export default function Main() {
  const { t } = useTranslation();
  const { data: joke, isFetching } = useQuery('testData', getTestData, {
    staleTime: 2500,
    // Want errors to be thrown in the render phase and propagate to the nearest error boundary
    useErrorBoundary: true,
  });

  if (isFetching) {
    return <StyledPage>{t('global.loading')}</StyledPage>;
  }

  return (
    <StyledPage fontsize="50px" data-testid="main-page">
      <h1 data-testid="main-page-joke">{joke}</h1>
      {/* <h2>{t('main.items', { postProcess: 'interval', count: 0 })}</h2> */}
    </StyledPage>
  );

  async function getTestData() {
    const { data } = await TestApi.getTestData();
    return data?.value;
  }
}
