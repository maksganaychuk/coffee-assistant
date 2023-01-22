import React, { forwardRef } from 'react';
import {
  space, border, flexbox, layout, position,
} from 'styled-system';
import styled, { css } from 'styled-components';
import { elementType, string, func } from 'prop-types';

const Icon = forwardRef(({ SVG, className, onClick }, ref) => (
  <SVG ref={ref} onClick={onClick} className={className} />
));

Icon.defaultProps = {
  onClick: () => {},
};

Icon.propTypes = {
  SVG: elementType.isRequired,
  className: string.isRequired,
  onClick: func,
};

export default styled(Icon)`
  ${({ pointer, color }) => css`
    ${pointer && 'cursor: pointer;'}

    path:first-child {
      fill: ${color};
    }

    ${space};
    ${border};
    ${flexbox};
    ${layout};
    ${position};
  `}
`;
