/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Data transfer object for user registration */
export interface UserRegisterRequest {
  /** User's email address */
  email: string;
  /** User's password (should meet security requirements) */
  password: string;
  /** User's first name */
  firstName?: string;
  /** User's last name */
  lastName?: string;
  /** User's chosen username */
  username: string;
  /** URL to redirect after successful registration */
  redirectUrl?: string;
}

export const userRegisterRequestSchema: Schema<UserRegisterRequest> = object({
  email: ['email', string()],
  password: ['password', string()],
  firstName: ['firstName', optional(string())],
  lastName: ['lastName', optional(string())],
  username: ['username', string()],
  redirectUrl: ['redirectUrl', optional(string())],
});
