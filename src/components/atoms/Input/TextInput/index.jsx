import React from 'react';
import { node, func, string, bool } from 'prop-types';
import { Flex } from '@mixins';
import { theme } from '@styles';
import Input from '../styles';

const TextInput = ({ onChange, value, placeholder, children, hasError, hideCursor, onBlur }) => (
  <Flex
    width="100%"
    alignItems="center"
    justifyContent="start"
    borderBottom={`1px solid ${hasError ? theme.color.red : theme.color.gray[200]}`}
  >
    {children}
    <Input
      onBlur={onBlur}
      hideCursor={hideCursor}
      width="100%"
      border="none"
      py={['3px', '3px', '5px', '7px']}
      fontSize={[12, 12, 14, 16]}
      fontWeight={400}
      color={theme.color.gray[500]}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  </Flex>
);

TextInput.defaultProps = {
  children: null,
  hasError: false,
  hideCursor: false,
  onBlur: () => {},
};

TextInput.propTypes = {
  onBlur: func,
  onChange: func.isRequired,
  value: string.isRequired,
  placeholder: string.isRequired,
  children: node,
  hasError: bool,
  hideCursor: bool,
};

export default TextInput;
