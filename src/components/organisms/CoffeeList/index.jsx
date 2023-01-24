import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { CoffeeCard } from '@molecules';
import { Flex, Typography } from '@mixins';
import { theme } from '@styles';

const CoffeeList = () => {
  const { coffeeList } = useSelector(store => store.coffeeStore);

  const coffeeBlock = useMemo(
    () =>
      coffeeList?.map(({ recipe, imageUrl, name, volume, strength, tastes, ingredients, kilocalories }) => (
        <CoffeeCard
          key={name}
          kilocalories={kilocalories}
          recipe={recipe}
          volume={volume}
          imageUrl={imageUrl}
          name={name}
          strength={strength}
          tastes={tastes}
          ingredients={ingredients}
        />
      )),
    [coffeeList],
  );

  return coffeeList?.length ? (
    coffeeBlock
  ) : (
    <Flex width="100%" alignItems="center" flexDirection="column">
      <Typography variant="proximaNova-400" fontSize={[15, 21]} color={theme.color.gray[300]}>
        No results found for your search..
      </Typography>
    </Flex>
  );
};

export default CoffeeList;
