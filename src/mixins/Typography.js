import styled, { css } from 'styled-components';
import {
  color,
  flexbox,
  layout,
  space,
  typography,
  variant,
  border,
  shadow,
} from 'styled-system';
import { theme } from '@styles';

export const Typography = styled.p`
  ${({ textTransform = 'none', pointer, textDecoration = 'none', whiteSpace = 'normal' }) => css`
    text-transform: ${textTransform};
    text-decoration: ${textDecoration};
    white-space: ${whiteSpace};
    color: ${theme.color.gray[500]};
    ${pointer && 'cursor: pointer;'}

    ${variant({
    variants: {
      'proximaNova-400': {
        fontFamily: 'Proxima Nova',
        fontWeight: 400,
      },
      'proximaNova-600': {
        fontFamily: 'Proxima Nova',
        fontWeight: 600,
      },
      'garamond-500': {
        fontFamily: 'EB Garamond',
        fontWeight: 500,
      },
    },
  })}
    ${border};
    ${color};
    ${flexbox};
    ${layout};
    ${space};
    ${typography};
    ${shadow};
  `}
`;
