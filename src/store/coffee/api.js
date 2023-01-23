import { apiEndpoints } from '@constants';
import { client } from '@utils';

const getCoffeeList = data =>
  client.authorized.get(apiEndpoints.coffee, {
    params: data,
  });

export { getCoffeeList };
