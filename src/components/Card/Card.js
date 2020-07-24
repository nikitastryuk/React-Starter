import PropTypes from 'prop-types';
import React from 'react';

import { StyledCard } from './StyledCard';

export function Card({ children }) {
  return <StyledCard>{children}</StyledCard>;
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
