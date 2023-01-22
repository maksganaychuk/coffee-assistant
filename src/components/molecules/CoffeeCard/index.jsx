import React from 'react';
import { arrayOf, string, number, exact } from 'prop-types';

import { Flex, Typography } from '@mixins';
import { theme } from '@styles';

import DefaultCoffee from '@assets/images/DefaultCoffee.png';

const CoffeeCard = ({ imageUrl, name, recipe, strength, volume, kilocalories, ingredients, tastes }) => {
  const ingredientsBlock = ingredients.map(({ name: ingName }, index) => (
    <Flex mr="3px" alignItems="center" key={name}>
      <Typography variant="proximaNova-400" fontSize={[10, 12, 14, 16]}>
        {index === ingredients.length - 1 ? ingName : `${ingName},`}
      </Typography>
    </Flex>
  ));

  const tastesBlock = tastes.map(({ tasteName }, index) => (
    <Flex mr="3px" alignItems="center" key={tasteName}>
      <Typography variant="proximaNova-400" fontSize={[10, 12, 14, 16]}>
        {index === tastes.length - 1 ? tasteName : `${tasteName},`}
      </Typography>
    </Flex>
  ));

  return (
    <Flex
      minHeight={200}
      border="1px solid #EFECE6"
      boxShadow="0px 8px 30px rgba(80, 85, 136, 0.06)"
      borderRadius="2px"
      mb={[10, 10, 15, 20]}
      p={[10, 10, 15, 20]}
      width="100%"
    >
      <Flex
        background={`url(${imageUrl || DefaultCoffee}) center`}
        backgroundSize="cover"
        mr={[10, 15, 20, 25]}
        width="35%"
        maxHeight={[180, 180, 180, 195]}
      />
      <Flex mr={10} flexDirection="column" justifyContent="space-between">
        <Flex flexDirection="column">
          <Flex mb="5px" alignItems="center">
            <Typography mr={['8px', '8px', 10, 12]} variant="proximaNova-600" fontSize={[14, 16, 18, 20]}>
              {name}
            </Typography>
            <Typography variant="proximaNova-400" fontSize={[11, 12, 13, 14]} color={theme.color.gray[300]}>
              {`${kilocalories} kkal`}
            </Typography>
          </Flex>
          <Flex mb="5px" flexWrap="wrap" alignItems="center">
            <Typography mr="5px" variant="proximaNova-600" fontSize={[10, 12, 14, 16]}>
              Ingredients:
            </Typography>
            {ingredientsBlock}
          </Flex>
          <Flex flexWrap="wrap" alignItems="center">
            <Typography mr="5px" variant="proximaNova-600" fontSize={[10, 12, 14, 16]}>
              Tastes:
            </Typography>
            {tastesBlock}
          </Flex>
          <Flex mb={20} alignItems="center" mt="5px">
            <Typography mr="5px" variant="proximaNova-600" fontSize={[10, 12, 14, 16]}>
              Recipe:
            </Typography>
            <Typography variant="proximaNova-400" fontSize={[10, 12, 14, 16]}>
              {recipe}
            </Typography>
          </Flex>
        </Flex>
        <Flex alignItems="center">
          <Typography
            borderRight={`1px solid ${theme.color.black}`}
            pr={['6px', '6px', '8px', 10]}
            variant="proximaNova-400"
            fontSize={[10, 12, 14, 16]}
            mb={10}
            color={theme.color.gray[300]}
            mr={['6px', '8px', 10]}
          >
            {`Volume: ${volume}`}
          </Typography>
          <Typography
            pr={['6px', '6px', '8px', 10]}
            variant="proximaNova-400"
            fontSize={[10, 12, 14, 16]}
            mb={10}
            color={theme.color.gray[300]}
            mr={['6px', '8px', 10]}
          >
            {`Strength: ${strength}`}
          </Typography>
        </Flex>
      </Flex>
    </Flex>
  );
};

CoffeeCard.defaultProps = {
  imageUrl: '',
  name: '',
  recipe: '',
  strength: 1,
  volume: 1,
  kilocalories: 1,
  ingredients: [],
  tastes: [],
};

CoffeeCard.propTypes = {
  recipe: string,
  imageUrl: string,
  name: string,
  strength: number,
  volume: number,
  kilocalories: number,
  ingredients: arrayOf(
    exact({
      name: string,
    }),
  ),
  tastes: arrayOf(
    exact({
      name: string,
    }),
  ),
};

export default CoffeeCard;
