import React, { useEffect } from 'react';
import { node, bool, func, number, string } from 'prop-types';

import { Icon } from '@atoms';
import { Flex } from '@mixins';
import { theme } from '@styles';
import { ReactComponent as Close } from '@assets/svgs/Close.svg';

const Modal = ({
  children,
  isOpen,
  onClose,
  withCloseButton,
  topPosition,
  borderRadius,
  closeOnClickOutside,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleOutsideModalClick = e => {
    if (e.target.id === 'background') {
      onClose();
    }
  };

  return (
    isOpen && (
      <Flex
        id="background"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={10}
        justifyContent="center"
        position="fixed"
        {...(closeOnClickOutside && { onClick: handleOutsideModalClick })}
        background="rgba(0, 0, 0, 0.5)"
      >
        <Flex
          position="absolute"
          top={topPosition}
          zIndex={7}
          maxWidth={[350, 500, 650]}
          p={[10, 20, 30]}
          backgroundColor={theme.color.white}
          borderRadius={borderRadius}
        >
          {withCloseButton && (
            <Icon
              pointer
              onClick={onClose}
              position="absolute"
              SVG={Close}
              width={[10, 13, 16]}
              height={[10, 13, 16]}
              top={[16, 21, 26]}
              right={[16, 21, 26]}
            />
          )}
          {children}
        </Flex>
      </Flex>
    )
  );
};

Modal.defaultProps = {
  withCloseButton: true,
  onClose: () => {},
  topPosition: 100,
  borderRadius: 'none',
  closeOnClickOutside: false,
};

Modal.propTypes = {
  isOpen: bool.isRequired,
  children: node.isRequired,
  onClose: func,
  withCloseButton: bool,
  topPosition: number,
  borderRadius: string,
  closeOnClickOutside: bool,
};

export default Modal;
