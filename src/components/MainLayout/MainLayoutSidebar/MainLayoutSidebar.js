import { useTranslation } from 'react-i18next';

import { useAuth } from 'app/auth/useAuth';

import { SidebarNavigation } from './MainLayoutSidebarNavigation/MainLayoutSidebarNavigation';
import {
  StyledMainLayoutSidebar,
  StyledMainLayoutSidebarLogo,
  StyledMainLayoutSidebarLogoutButton,
} from './StyledMainLayoutSidebar';

export function MainLayoutSidebar() {
  const { t } = useTranslation();
  const [, { logout }] = useAuth();

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
    logout();
  }
}
