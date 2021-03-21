import { useTranslation } from 'react-i18next';

import { useAuthActions } from 'hooks/useAuthActions';

import { MainLayoutSidebarNavigation } from './MainLayoutSidebarNavigation/MainLayoutSidebarNavigation';

import {
  StyledMainLayoutSidebar,
  StyledMainLayoutSidebarLogo,
  StyledMainLayoutSidebarLogoutButton,
} from './StyledMainLayoutSidebar';

export function MainLayoutSidebar() {
  const { t } = useTranslation();
  const { logoutUser } = useAuthActions();

  return (
    <StyledMainLayoutSidebar>
      <StyledMainLayoutSidebarLogo>LOGO</StyledMainLayoutSidebarLogo>
      <MainLayoutSidebarNavigation />
      <StyledMainLayoutSidebarLogoutButton onClick={handleLogout}>
        {t('sidebar.logout')}
      </StyledMainLayoutSidebarLogoutButton>
    </StyledMainLayoutSidebar>
  );

  function handleLogout() {
    logoutUser();
  }
}
