import styled, { css } from 'styled-components';
import {
  space, border, color, flexbox, layout, position, typography,
} from 'styled-system';

const Input = styled.input`
  ${({ hideCursor }) => css`
    font-family: 'Proxima Nova';
    outline: none;
    background-color: transparent;
    border-radius: 0;

    ${hideCursor && 'caret-color: transparent;'}
  
    ${typography}
    ${space}
    ${border}
    ${color}
    ${flexbox}
    ${layout}
    ${position}
  `}
`;

export default Input;
