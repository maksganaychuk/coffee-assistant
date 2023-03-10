import React from 'react';
import Siriwave from 'react-siriwave';
import { string } from 'prop-types';

import { Flex, Typography } from '@mixins';
import { theme } from '@styles';

const SpeechModal = ({
  transcript,
}) => (
  <Flex
    id="background"
    top={0}
    pt={150}
    left={0}
    right={0}
    bottom={0}
    zIndex={10}
    justifyContent="start"
    alignItems="center"
    flexDirection="column"
    position="fixed"
    background="rgba(0, 0, 0, 0.8)"
  >
    <Typography mb={20} variant="proximaNova-600" fontSize={55} color={theme.color.milk}>
      What are you looking for?
    </Typography>
    <Siriwave speed={0.1} />
    <Typography variant="garamond-500" fontSize={50} color={theme.color.white}>{transcript}</Typography>
  </Flex>
);

SpeechModal.defaultProps = {
  transcript: '',
};

SpeechModal.propTypes = {
  transcript: string,
};

export default SpeechModal;
