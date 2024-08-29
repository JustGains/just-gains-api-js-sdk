/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import {
  PublishedStatusTranslation,
  publishedStatusTranslationSchema,
} from './publishedStatusTranslation';

export interface PublishedStatusTranslationListResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  /** The data returned by the operation. */
  data: PublishedStatusTranslation[];
}

export const publishedStatusTranslationListResponseSchema: Schema<PublishedStatusTranslationListResponse> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: ['data', array(lazy(() => publishedStatusTranslationSchema))],
  }
);
