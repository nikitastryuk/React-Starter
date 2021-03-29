import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';

import { StyledPage } from 'styles/StyledPage';
import axios from 'utils/axios';

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
    <StyledPage fontsize="50px" data-test-id="main-page">
      <h1>{joke}</h1>
      <h2>{t('main.items', { postProcess: 'interval', count: 0 })}</h2>
    </StyledPage>
  );

  async function getTestData() {
    try {
      const { data } = await TestApi.getTestData();
      return data?.value;
    } catch (e) {
      throw new Error('test');
    }
  }
}
