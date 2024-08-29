/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface JustGainsBasicResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
}

export const justGainsBasicResponseSchema: Schema<JustGainsBasicResponse> = object(
  { status: ['status', string()], message: ['message', string()] }
);