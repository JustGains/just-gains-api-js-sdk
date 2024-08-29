/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  accessTokenAuthenticationProvider,
  compositeAuthenticationProvider,
} from './authentication';
import { Configuration } from './configuration';

export function createAuthProviderFromConfig(config: Partial<Configuration>) {
  const authConfig = {
    bearerAuth:
      config.bearerAuthCredentials &&
      accessTokenAuthenticationProvider(config.bearerAuthCredentials),
  };

  return compositeAuthenticationProvider<
    keyof typeof authConfig,
    typeof authConfig
  >(authConfig);
}
