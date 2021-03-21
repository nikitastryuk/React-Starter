import { useTranslation } from 'react-i18next';

import { StyledPage } from 'styles/StyledPage';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <StyledPage>
      <h1>{t('notFound.title')}</h1>
    </StyledPage>
  );
}
