/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  OAuthSettingsData,
  oAuthSettingsDataSchema,
} from './oAuthSettingsData';

/** OAuth provider settings response */
export interface OAuthSettings {
  /** Data object containing OAuth provider settings */
  data?: OAuthSettingsData;
}

export const oAuthSettingsSchema: Schema<OAuthSettings> = object({
  data: ['data', optional(lazy(() => oAuthSettingsDataSchema))],
});
