const isDev = process.env.NODE_ENV === 'development';

export interface IEnv {
  appName?: string;
  localhost?: string;
  facebookAppID?: string;
  googleMapAppID?: string;
}

let envOfDev: IEnv = {
  appName: 'restaurant-base',
  localhost: 'hkia-dev.stg.gobindo.com',
  facebookAppID: undefined,
  googleMapAppID: undefined,
};

let env: IEnv = {
  appName: 'restaurant-base',
  localhost: 'hkia-dev.stg.gobindo.com',
  facebookAppID: undefined,
  googleMapAppID: undefined,
};

if (isDev) {
  env = {
    ...env,
    ...envOfDev,
  };
}

export default env;
