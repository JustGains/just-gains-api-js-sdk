/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Locale1, locale1Schema } from './locale1';

export interface LocaleResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  /** The data returned by the operation. */
  data: Locale1;
}

export const localeResponseSchema: Schema<LocaleResponse> = object({
  status: ['status', string()],
  message: ['message', string()],
  data: ['data', lazy(() => locale1Schema)],
});
