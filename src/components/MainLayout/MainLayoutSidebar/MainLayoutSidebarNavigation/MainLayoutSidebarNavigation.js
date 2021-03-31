import { Airbnb, Algolia, Amazon, CreativeCommons, Digg, Figma } from '@styled-icons/boxicons-logos';
import styled from 'styled-components';

import { ROUTE_PATHS } from 'routes';

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

const SIDEBAR_ROUTES = [
  { path: ROUTE_PATHS.MAIN, label: 'sidebar.navigation.main', icon: <Digg /> },
  { path: 'test1', label: 'Test 1', icon: <Amazon /> },
  { path: 'test2', label: 'Test 2', icon: <Algolia /> },
  { path: 'test3', label: 'Test 3', icon: <CreativeCommons /> },
  { path: 'test4', label: 'Test 4', icon: <Figma /> },
  { path: 'test5', label: 'Test 5', icon: <Airbnb /> },
];

export function MainLayoutSidebarNavigation() {
  return (
    <StyledMainLayoutSidebarNavigation>
      {SIDEBAR_ROUTES.map(({ path, label, icon }) => (
        <MainLayoutSidebarNavigationLink key={`${path}.${label}`} path={path} label={label} icon={icon} />
      ))}
    </StyledMainLayoutSidebarNavigation>
  );
}
