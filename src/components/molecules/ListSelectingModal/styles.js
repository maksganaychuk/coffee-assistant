import styled, { css } from 'styled-components';

import { Flex } from '@mixins';
import { theme } from '@styles';

export const HoveredBlock = styled(Flex)`
  ${({ isSelected, isAvailable = true }) => css`
    ${
  !isSelected &&
      `&:hover {
        background-color: #EFECE6;
      }`
}
    p {
      white-space: pre;
      color: ${theme.color.gray[500]};

      ${
  !isAvailable &&
        `text-decoration-line: line-through;
        color: ${theme.color.gray[200]};`
}

      ${
  isSelected &&
        `color: ${theme.color.darkGreen};
        font-weight: 600;`
}
  `}
`;

export const ScrollableContainer = styled(Flex)`
  ${() => css`
    flex-direction: column;
    overflow-y: scroll;
    position: relative;

    ::-webkit-scrollbar {
      -webkit-appearance: none;
    }

    ::-webkit-scrollbar:vertical {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 50px;
      background-color: ${theme.color.darkGreen};
    }
  `}
`;
