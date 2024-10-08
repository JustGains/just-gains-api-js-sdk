/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Data transfer object for user login */
export interface UserLoginRequest {
  /** User's email address */
  email: string;
  /** User's password */
  password: string;
}

export const userLoginRequestSchema: Schema<UserLoginRequest> = object({
  email: ['email', string()],
  password: ['password', string()],
});
