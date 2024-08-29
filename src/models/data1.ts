/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { UserInfo, userInfoSchema } from './userInfo';

/** The data returned by the operation. */
export interface Data1 {
  /** JWT access token for authenticated requests */
  accessToken?: string;
  /** JWT refresh token for obtaining new access tokens */
  refreshToken?: string;
  /** Expiration time of the access token */
  tokenExpiration?: string;
  /** User information object */
  userInfo?: UserInfo;
}

export const data1Schema: Schema<Data1> = object({
  accessToken: ['accessToken', optional(string())],
  refreshToken: ['refreshToken', optional(string())],
  tokenExpiration: ['tokenExpiration', optional(string())],
  userInfo: ['userInfo', optional(lazy(() => userInfoSchema))],
});