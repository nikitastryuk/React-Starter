import { useTranslation } from 'react-i18next';

import { StyledMainLayoutPage } from 'components/MainLayout/StyledMainLayout';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <StyledMainLayoutPage>
      <h1>{t('notFound.title')}</h1>
    </StyledMainLayoutPage>
  );
}
