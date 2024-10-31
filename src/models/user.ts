/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CreatorProfile, creatorProfileSchema } from './creatorProfile';

/** Represents a user in the system. */
export interface User {
  /** Unique identifier for the user. */
  userId?: string;
  /** The user's chosen username for the platform. */
  userName?: string;
  /** Indicates if the user's email has been confirmed */
  emailConfirmed?: boolean;
  /** The user's email address. */
  email?: string;
  /** The user's hashed password. This should never be exposed in API responses. */
  password?: string;
  /** The name of the OAuth provider if the user signed up using OAuth. */
  oAuthProvider?: string;
  /** The user's role in the system, determining their permissions. */
  roles?: string[];
  /** Timestamp of the user's last login */
  lastSignInAt?: string;
  /** Represents a creator's profile information. */
  creatorProfile?: CreatorProfile;
}

export const userSchema: Schema<User> = object({
  userId: ['userId', optional(string())],
  userName: ['userName', optional(string())],
  emailConfirmed: ['emailConfirmed', optional(boolean())],
  email: ['email', optional(string())],
  password: ['password', optional(string())],
  oAuthProvider: ['oAuthProvider', optional(string())],
  roles: ['roles', optional(array(string()))],
  lastSignInAt: ['LastSignInAt', optional(string())],
  creatorProfile: [
    'creatorProfile',
    optional(lazy(() => creatorProfileSchema)),
  ],
});
