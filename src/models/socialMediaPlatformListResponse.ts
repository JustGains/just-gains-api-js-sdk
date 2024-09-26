/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Pagination, paginationSchema } from './pagination';
import {
  SocialMediaPlatform,
  socialMediaPlatformSchema,
} from './socialMediaPlatform';

export interface SocialMediaPlatformListResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  data: SocialMediaPlatform[];
  pagination?: Pagination;
}

export const socialMediaPlatformListResponseSchema: Schema<SocialMediaPlatformListResponse> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: ['data', array(lazy(() => socialMediaPlatformSchema))],
    pagination: ['pagination', optional(lazy(() => paginationSchema))],
  }
);
