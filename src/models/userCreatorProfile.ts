/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  CreatorSocialMediaAccount,
  creatorSocialMediaAccountSchema,
} from './creatorSocialMediaAccount';
import { ProfilePhoto, profilePhotoSchema } from './profilePhoto';

/** The user's creator profile */
export interface UserCreatorProfile {
  /** Unique identifier for the creator profile. */
  creatorProfileId?: string;
  /** Associated user ID, if applicable. */
  userId?: string;
  /** Creator's email address. */
  creatorEmail?: string;
  /** Creator's profile photo. */
  profilePhoto?: ProfilePhoto;
  /** List of creator's social media accounts. */
  socialMediaAccounts?: CreatorSocialMediaAccount[];
}

export const userCreatorProfileSchema: Schema<UserCreatorProfile> = object({
  creatorProfileId: ['creatorProfileId', optional(string())],
  userId: ['userId', optional(string())],
  creatorEmail: ['creatorEmail', optional(string())],
  profilePhoto: ['profilePhoto', optional(lazy(() => profilePhotoSchema))],
  socialMediaAccounts: [
    'socialMediaAccounts',
    optional(array(lazy(() => creatorSocialMediaAccountSchema))),
  ],
});
