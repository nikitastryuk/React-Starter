import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import {
  StyleMainLayoutSidebarNavigationLinkContent,
  StyleMainLayoutSidebarNavigationLinkLabel,
  StyledMainLayoutSidebarNavigationLink,
} from './StyledMainLayoutSidebarNavigationLink';

export const MainLayoutSidebarNavigationLink = ({ path, icon, label }) => {
  const { t } = useTranslation();
  return (
    <StyledMainLayoutSidebarNavigationLink activeClassName="active" exact to={path}>
      <StyleMainLayoutSidebarNavigationLinkContent>
        {icon}
        <StyleMainLayoutSidebarNavigationLinkLabel>{t(label)}</StyleMainLayoutSidebarNavigationLinkLabel>
      </StyleMainLayoutSidebarNavigationLinkContent>
    </StyledMainLayoutSidebarNavigationLink>
  );
};

MainLayoutSidebarNavigationLink.propTypes = {
  path: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};
