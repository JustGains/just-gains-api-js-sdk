/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface SocialMediaPlatformUpdate {
  /** Updated name of the social media platform */
  socialMediaPlatformName?: string;
  /** Updated URL format for the platform's profile pages */
  socialMediaPlatformUrlFormat?: string;
  /** Updated UUID of the associated MediaAsset for the platform's icon */
  socialMediaPlatformIcon?: string;
}

export const socialMediaPlatformUpdateSchema: Schema<SocialMediaPlatformUpdate> = object(
  {
    socialMediaPlatformName: ['socialMediaPlatformName', optional(string())],
    socialMediaPlatformUrlFormat: [
      'socialMediaPlatformUrlFormat',
      optional(string()),
    ],
    socialMediaPlatformIcon: ['socialMediaPlatformIcon', optional(string())],
  }
);