import React from 'react';
import { string, number } from 'prop-types';
import { Oval } from 'react-loader-spinner';

import { theme } from '@styles';
import { Flex } from '@mixins';

const Loader = ({ position, background, width, height }) => (
  <Flex
    zIndex={1}
    alignItems="center"
    justifyContent="center"
    position={position}
    top={0}
    left={0}
    bottom={0}
    right={0}
    background={background}
  >
    <Oval
      height={height}
      width={width}
      color={theme.color.darkGreen}
      visible
      ariaLabel="oval-loading"
      secondaryColor={theme.color.gray[100]}
      strokeWidth={3}
      strokeWidthSecondary={3}
    />
  </Flex>
);

Loader.propTypes = {
  position: string.isRequired,
  background: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
};

export default Loader;
