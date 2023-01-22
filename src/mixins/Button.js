import styled, { css } from 'styled-components';
import { layout, border, space, position, typography, variant, color, flexbox } from 'styled-system';

export const Button = styled.button`
  ${({ theme, disabled }) => css`
    border: none;
    cursor: pointer;
    font-family: 'Proxima Nova';
    font-weight: 600;
    padding: 0;
    white-space: nowrap;
    color: ${theme.color.gray[500]};

    background-color: transparent;

    ${variant({
    variants: {
      primary: {
        backgroundColor: disabled ? theme.color.gray[100] : theme.color.darkGreen,
        color: theme.color.white,
        borderRadius: '2px',
      },
      secondary: {
        color: theme.color.gray[500],
        border: `1px solid ${theme.color.gray[400]}`,

        svg: {
          path: {
            fill: theme.color.black,
          },
        },

        '&:hover': {
          backgroundColor: theme.color.darkGreen,
          border: `1px solid ${theme.color.darkGreen}`,
          color: theme.color.white,

          svg: {
            path: {
              fill: theme.color.white,
            },
          },
        },
      },
    },
  })}

    ${color}
    ${position}
    ${typography}
    ${border}
    ${layout}
    ${space}
    ${flexbox}
  `}
`;
