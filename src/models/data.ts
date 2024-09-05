/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { CreatorProfile, creatorProfileSchema } from './creatorProfile';

/** The data returned by the operation. */
export interface Data {
  /** Unique identifier for the user. */
  userId?: string;
  /** The user's chosen username for the platform. */
  userName?: string;
  /** The user's email address. */
  email?: string;
  /** The user's hashed password. This should never be exposed in API responses. */
  password?: string;
  /** The user's first name. */
  firstName?: string;
  /** The user's last name. */
  lastName?: string;
  /** The user's full name, typically a combination of first and last name. */
  fullName?: string;
  /** The name of the OAuth provider if the user signed up using OAuth. */
  oAuthProvider?: string;
  /** The user's role in the system, determining their permissions. */
  roles?: string[];
  /** refreshToken value to get next accesstoken */
  refreshToken?: string;
  /** Represents a creator's profile information. */
  userCreatorProfile?: CreatorProfile;
}

export const dataSchema: Schema<Data> = object({
  userId: ['userId', optional(string())],
  userName: ['userName', optional(string())],
  email: ['email', optional(string())],
  password: ['password', optional(string())],
  firstName: ['firstName', optional(string())],
  lastName: ['lastName', optional(string())],
  fullName: ['fullName', optional(string())],
  oAuthProvider: ['oAuthProvider', optional(string())],
  roles: ['roles', optional(array(string()))],
  refreshToken: ['refreshToken', optional(string())],
  userCreatorProfile: [
    'userCreatorProfile',
    optional(lazy(() => creatorProfileSchema)),
  ],
});
