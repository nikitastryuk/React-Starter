import { Airbnb, Algolia, Amazon, Apple, CreativeCommons, Digg, Figma } from '@styled-icons/boxicons-logos';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { ROUTE_PATHS } from 'app/routing/routePaths';

import {
  MainLayoutSidebarNavigationLink,
  StyledMainLayoutSidebarNavigationLink,
} from './MainLayoutSidebarNavigationLink';

const StyledSidebarNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  ${StyledMainLayoutSidebarNavigationLink}:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`;

export function SidebarNavigation() {
  const { t } = useTranslation();

  const NAVBAR_ROUTES = [
    { path: ROUTE_PATHS.LOGIN, label: t('sidebar.navigation.login'), icon: <Apple /> },
    { path: ROUTE_PATHS.MAIN, label: t('sidebar.navigation.main'), icon: <Digg /> },
    { path: 'test1', label: 'Test 1', icon: <Amazon /> },
    { path: 'test2', label: 'Test 2', icon: <Algolia /> },
    { path: 'test3', label: 'Test 3', icon: <CreativeCommons /> },
    { path: 'test4', label: 'Test 4', icon: <Figma /> },
    { path: 'test5', label: 'Test 5', icon: <Airbnb /> },
  ];

  return (
    <StyledSidebarNavigation>
      {NAVBAR_ROUTES.map((route) => (
        <MainLayoutSidebarNavigationLink key={`${route.path}.${route.label}`} route={route} />
      ))}
    </StyledSidebarNavigation>
  );
}
