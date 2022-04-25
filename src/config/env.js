import {API_URL,API_AUTH} from '@env';

const devEnvironmentVariables = {
  API_URL,
  API_AUTH,
};

const prodEnvironmentVariables = {
  API_URL,
  API_AUTH,
};

export default __DEV__ ? devEnvironmentVariables : prodEnvironmentVariables;
