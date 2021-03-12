import PropTypes from 'prop-types';

import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { MainLayoutSidebar } from 'components/MainLayout/MainLayoutSidebar/MainLayoutSidebar';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

import { StyledMainLayout, StyledMainLayoutContent, StyledMainLayoutToolbar } from './StyledMainLayout';

export function MainLayout({ children }) {
  return (
    <StyledMainLayout>
      <MainLayoutSidebar />
      <StyledMainLayoutToolbar>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </StyledMainLayoutToolbar>

      <StyledMainLayoutContent>{children}</StyledMainLayoutContent>
    </StyledMainLayout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
