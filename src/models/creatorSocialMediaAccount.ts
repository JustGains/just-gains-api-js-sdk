/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Represents a social media account associated with a creator. */
export interface CreatorSocialMediaAccount {
  /** The ID of the social media platform from the predefined list. */
  socialMediaPlatformCode?: string;
  /** The creator's username on this platform. */
  socialMediaAccountUsername?: string;
}

export const creatorSocialMediaAccountSchema: Schema<CreatorSocialMediaAccount> = object(
  {
    socialMediaPlatformCode: ['socialMediaPlatformCode', optional(string())],
    socialMediaAccountUsername: [
      'socialMediaAccountUsername',
      optional(string()),
    ],
  }
);
