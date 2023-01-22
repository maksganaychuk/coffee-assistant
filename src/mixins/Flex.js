import styled, { css } from 'styled-components';
import {
  border, color, flexbox, layout, position, space, background, shadow, typography, grid,
} from 'styled-system';

export const Flex = styled.div`
${({ pointer }) => css`
    display: flex;
    ${pointer && 'cursor: pointer;'}
    
    ${grid};
    ${typography};
    ${shadow};
    ${background}
    ${border};
    ${color};
    ${flexbox};
    ${layout};
    ${position};
    ${space};
  `}
`;
