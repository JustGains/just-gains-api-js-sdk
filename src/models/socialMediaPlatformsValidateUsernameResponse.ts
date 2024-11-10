/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Data2, data2Schema } from './data2';

export interface SocialMediaPlatformsValidateUsernameResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  data: Data2;
}

export const socialMediaPlatformsValidateUsernameResponseSchema: Schema<SocialMediaPlatformsValidateUsernameResponse> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: ['data', lazy(() => data2Schema)],
  }
);
