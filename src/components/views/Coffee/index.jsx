import React, { useState } from 'react';
import { bool, func, string, number, arrayOf, exact } from 'prop-types';

import { Icon, Loader } from '@atoms';
import { TextInput } from '@atoms/Input';
import { ListSelectingModal, SpeechModal } from '@molecules';
import { CoffeeList } from '@organisms';
import { Typography, Flex } from '@mixins';
import { theme } from '@styles';

import { ReactComponent as Search } from '@assets/svgs/Search.svg';
import { ReactComponent as Dropdown } from '@assets/svgs/Dropdown.svg';
import { ReactComponent as Microphone } from '@assets/svgs/Microphone.svg';

const Coffee = ({
  search, isLoading, onSearchInputChange, selectedFilter, filters, onFilterSelect,
  browserSupportsSpeechRecognition, onMicrophoneClick, transcript, listening,
}) => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleModalChangeState = () => {
    setIsFilterModalOpen(prevValue => !prevValue);
  };

  const handleFilterSelect = filter => () => {
    setIsFilterModalOpen(false);
    onFilterSelect(filter);
  };

  return (
    <Flex
      minHeight="100vh"
      maxWidth={1200}
      width="100%"
      pt={50}
      px={[40, 70, 100]}
      flexDirection="column"
    >
      <Typography alignSelf="start" variant="garamond-500" fontSize={[30, 45, 56]} mb={[20, 30, 40]}>
        Find your coffee
      </Typography>
      <Flex justifyContent="space-between" alignItems="end" mb={[20, 30]} width="100%">
        <Flex maxWidth={['100%', '30%', '30%', '420px']}>
          <Flex position="relative">
            <Flex
              minWidth={150}
              pointer
              onClick={handleModalChangeState}
              pr={['8px', '8px', 10, 16]}
              alignItems="center"
            >
              <Typography variant="proximaNova-600" color="#494949" fontSize={[10, 14, 14, 16]}>
                {filters.find(fil => fil.id === selectedFilter)?.title ?? 'Search by'}
              </Typography>
              <Icon
                ml={['4px', '4px', '8px']}
                SVG={Dropdown}
                height={[6, 6, 10, 14]}
                color={theme.color.black}
              />
            </Flex>
            {isFilterModalOpen && (
              <ListSelectingModal
                title="Search by"
                hasSelectingButton={false}
                onSelect={handleFilterSelect}
                onModalClose={handleModalChangeState}
                selectedItem={selectedFilter}
                items={filters}
              />
            )}
          </Flex>
          <TextInput value={search} onChange={onSearchInputChange} placeholder="Search">
            <Icon mr={[10, 12]} SVG={Search} />
          </TextInput>
        </Flex>
        {browserSupportsSpeechRecognition && (
          <Icon onClick={onMicrophoneClick} ml={20} SVG={Microphone} width={30} pointer />
        )}
      </Flex>
      {isLoading ? (
        <Flex flexGrow={1} alignItems="center" justifyContent="center">
          <Loader position="relative" background={theme.color.white} width={64} height={64} />
        </Flex>
      ) : (
        <CoffeeList />
      )}
      {listening && <SpeechModal transcript={transcript} />}
    </Flex>
  );
};

Coffee.defaultProps = {
  filters: [],
  selectedFilter: 0,
  browserSupportsSpeechRecognition: true,
  transcript: '',
};

Coffee.propTypes = {
  listening: bool.isRequired,
  onMicrophoneClick: func.isRequired,
  browserSupportsSpeechRecognition: bool,
  search: string.isRequired,
  onSearchInputChange: func.isRequired,
  isLoading: bool.isRequired,
  selectedFilter: number,
  filters: arrayOf(
    exact({
      id: number,
      title: string,
    }),
  ),
  onFilterSelect: func.isRequired,
  transcript: string,
};

export default Coffee;
