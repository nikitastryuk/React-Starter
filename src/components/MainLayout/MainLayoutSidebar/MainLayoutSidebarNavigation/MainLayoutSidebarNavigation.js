import { Airbnb, Algolia, Amazon, CreativeCommons, Digg, Figma } from '@styled-icons/boxicons-logos';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { ROUTE_PATHS } from 'app/routing/routePaths';

import { MainLayoutSidebarNavigationLink } from './MainLayoutSidebarNavigationLink';
import { StyledMainLayoutSidebarNavigationLink } from './StyledMainLayoutSidebarNavigationLink';

const StyledMainLayoutSidebarNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  ${StyledMainLayoutSidebarNavigationLink}:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`;

export function MainLayoutSidebarNavigation() {
  const { t } = useTranslation();

  const SIDEBAR_ROUTES = [
    { path: ROUTE_PATHS.MAIN, label: t('sidebar.navigation.main'), icon: <Digg /> },
    { path: 'test1', label: 'Test 1', icon: <Amazon /> },
    { path: 'test2', label: 'Test 2', icon: <Algolia /> },
    { path: 'test3', label: 'Test 3', icon: <CreativeCommons /> },
    { path: 'test4', label: 'Test 4', icon: <Figma /> },
    { path: 'test5', label: 'Test 5', icon: <Airbnb /> },
  ];

  return (
    <StyledMainLayoutSidebarNavigation>
      {SIDEBAR_ROUTES.map((route) => (
        <MainLayoutSidebarNavigationLink key={`${route.path}.${route.label}`} route={route} />
      ))}
    </StyledMainLayoutSidebarNavigation>
  );
}
