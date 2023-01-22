import { apiEndpoints } from '@constants';
import { client } from '@utils';

const getCoffeeList = data =>
  client.unauthorized.get(apiEndpoints.coffee, {
    params: data,
  });

export { getCoffeeList };
