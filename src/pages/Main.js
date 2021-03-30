import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { StyledPage } from 'styles/StyledPage';
import axios from 'utils/axios';
      const a=2;

    console.log('test')
class TestApi {
  static getTestData() {
    return axios.get('https://api.chucknorris.io/jokes/random');
  }
}

export default function Main() {
  const { t } = useTranslation();
  const { error, data: joke, isFetching } = useQuery('testData', getTestData, {
    staleTime: 5000,
  });

  if (isFetching) {
    return <StyledPage>{t('global.loading')}</StyledPage>;
  }

  if (error) {
    return <StyledPage>{error}</StyledPage>;
  }

  return (
    <StyledPage fontsize="50px" data-testid="main-page">
      <h1 data-testid="main-page-joke">{joke}</h1>
      {/* <h2>{t('main.items', { postProcess: 'interval', count: 0 })}</h2> */}
    </StyledPage>
  );

  async function getTestData() {
    // TODO: Check error handling
    const { data } = await TestApi.getTestData();
    return data?.value;
  }
}
