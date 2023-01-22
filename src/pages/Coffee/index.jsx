import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import { Coffee as View } from '@views';
import { LOADING } from '@constants/requestPhase';
import { useDebounce } from '@hooks';
import { getCoffeeList } from '@store/coffee/duck';

const Coffee = () => {
  const dispatch = useDispatch();
  const {
    transcript,
    listening,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const { getCoffeeListPhase, pagination } = useSelector(store => store.coffeeStore);

  const [search, setSearch] = useState('');
  const [selectedFilter, setSelectedFilter] = useState(1);

  const debouncedInput = useDebounce(search, 300);

  const handleSearchInputChange = e => {
    setSearch(e.target.value);
  };

  const handleMicrophoneClick = () => {
    SpeechRecognition.startListening();
  };

  const handleFilterSelect = filter => {
    setSelectedFilter(filter);
  };

  const handleClickLoadMore = () => {
    dispatch(
      getCoffeeList({
        search: debouncedInput,
        page: pagination.page + 1,
        pageSize: 6,
      }),
    );
  };

  useEffect(() => {
    setSearch(transcript);
  }, [listening]);

  useEffect(() => {
    dispatch(
      getCoffeeList({
        search: debouncedInput,
        page: 1,
        pageSize: 6,
      }),
    );
  }, [debouncedInput]);

  const isLoading = getCoffeeListPhase === LOADING;

  return (
    <View
      onMicrophoneClick={handleMicrophoneClick}
      transcript={transcript}
      listening={listening}
      isLoading={isLoading}
      onSearchInputChange={handleSearchInputChange}
      search={search}
      onClickLoadMore={handleClickLoadMore}
      filters={[
        { id: 1, title: 'Name' },
        { id: 2, title: 'Recipe' },
        { id: 3, title: 'Ingredients' },
        { id: 4, title: 'Tastes' },
      ]}
      onFilterSelect={handleFilterSelect}
      selectedFilter={selectedFilter}
      browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
    />
  );
};

export default Coffee;
