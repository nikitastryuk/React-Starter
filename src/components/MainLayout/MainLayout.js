// import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { MainLayoutSidebar } from 'components/MainLayout/MainLayoutSidebar/MainLayoutSidebar';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';
// import axios from 'utils/axios';

import { StyledMainLayout, StyledMainLayoutContent, StyledMainLayoutToolbar } from './StyledMainLayout';

export function MainLayout({ children }) {
  // useEffect(() => {
  //   tests();
  // }, []);

  // async function tests() {
  //   const response = await axios.get('http://localhost:3000/test');
  //   console.log(response);
  // }

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
