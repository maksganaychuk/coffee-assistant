import React, { useRef, useEffect, useMemo } from 'react';
import { func, string, arrayOf, number, bool, oneOfType, exact } from 'prop-types';

import { Icon } from '@atoms';
import { Flex, Button, Typography } from '@mixins';
import { theme } from '@styles';

import { ReactComponent as Close } from '@assets/svgs/Close.svg';

import { HoveredBlock, ScrollableContainer } from './styles';

const ListSelectingModal = ({
  scrollTo,
  topPosition,
  canBeClosed,
  hasSelectingButton,
  title,
  onSelect,
  onModalClose,
  items,
  selectedItem,
}) => {
  const container = useRef();

  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(`item-${scrollTo}`);

      if (element) {
        const topOffset = element.offsetTop;

        container.current.scrollTo({ top: topOffset });
      }
    }
  }, [scrollTo]);

  const listBlock = useMemo(
    () =>
      items.map(({ id, title: itemTitle }) => (
        <HoveredBlock
          id={`item-${id}`}
          key={id}
          pointer
          justifyContent="center"
          alignItems="center"
          width="100%"
          onClick={onSelect(id)}
          px={30}
          py={10}
          isSelected={id === selectedItem}
        >
          <Typography
            variant="proximaNova-400"
            fontSize={hasSelectingButton ? 14 : 16}
            color={theme.color.gray[300]}
          >
            {itemTitle}
          </Typography>
        </HoveredBlock>
      )),
    [items, selectedItem, hasSelectingButton],
  );

  return (
    <Flex
      minHeight={300}
      zIndex={3}
      backgroundColor={theme.color.white}
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.15)"
      flexDirection="column"
      alignItems="center"
      position="absolute"
      top={topPosition}
      left={0}
      {...(!hasSelectingButton && { right: 0 })}
      p={hasSelectingButton ? 20 : 10}
      pt={canBeClosed ? 40 : 0}
    >
      {canBeClosed && (
        <Icon
          pointer
          onClick={onModalClose}
          position="absolute"
          SVG={Close}
          width={11}
          height={11}
          top={17}
          right={17}
        />
      )}
      <Flex alignItems="center" width="100%" flexDirection="column">
        <Typography mb={20} variant="proximaNova-600" fontSize={18}>
          {title}
        </Typography>
        <ScrollableContainer
          ref={container}
          width="100%"
          px={15}
          flexDirection="column"
          maxHeight={hasSelectingButton ? 170 : 300}
          overflow="hidden"
        >
          {listBlock}
        </ScrollableContainer>
      </Flex>
      {hasSelectingButton && (
        <Button mt={10} onClick={onSelect(selectedItem)} py={12} px={50} variant="primary">
          Apply
        </Button>
      )}
    </Flex>
  );
};

ListSelectingModal.defaultProps = {
  items: [],
  selectedItem: -1,
  canBeClosed: true,
  hasSelectingButton: true,
  topPosition: 24,
  title: '',
  scrollTo: '',
};

ListSelectingModal.propTypes = {
  scrollTo: oneOfType([string, number]),
  canBeClosed: bool,
  hasSelectingButton: bool,
  title: string,
  onSelect: func.isRequired,
  items: arrayOf(
    exact({
      title: string,
      id: number,
    }),
  ),
  selectedItem: number,
  onModalClose: func.isRequired,
  topPosition: number,
};

export default ListSelectingModal;
