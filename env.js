import { Constants } from 'expo';

const ENV = {
  dev: {
    apiUrl: 'http://localhost:3000/users'
  },
  staging: {
    apiUrl: 'https://www.googleapis.com/userinfo/v2/me'
  }
};

function getEnvVars(env = '') {
  if (env === null || env === undefined || env === '') return ENV.dev;
  if (env.indexOf('dev') !== -1) return ENV.dev;
  if (env.indexOf('staging') !== -1) return ENV.staging;
}

export default getEnvVars(Constants.manifest.releaseChannel);
