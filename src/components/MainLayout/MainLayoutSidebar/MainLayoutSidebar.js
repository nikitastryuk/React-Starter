import { useTranslation } from 'react-i18next';

import { useAuth } from 'hooks/useAuth';

import { SidebarNavigation } from './MainLayoutSidebarNavigation/MainLayoutSidebarNavigation';

import {
  StyledMainLayoutSidebar,
  StyledMainLayoutSidebarLogo,
  StyledMainLayoutSidebarLogoutButton,
} from './StyledMainLayoutSidebar';

export function MainLayoutSidebar() {
  const { t } = useTranslation();
  const { logoutUser } = useAuth();

  return (
    <StyledMainLayoutSidebar>
      <StyledMainLayoutSidebarLogo>LOGO</StyledMainLayoutSidebarLogo>
      <SidebarNavigation />
      <StyledMainLayoutSidebarLogoutButton onClick={handleLogout}>
        {t('sidebar.logout')}
      </StyledMainLayoutSidebarLogoutButton>
    </StyledMainLayoutSidebar>
  );

  function handleLogout() {
    logoutUser();
  }
}
