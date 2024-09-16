/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Data1, data1Schema } from './data1';

export interface AuthRefreshTokenResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  data: Data1;
}

export const authRefreshTokenResponseSchema: Schema<AuthRefreshTokenResponse> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: ['data', lazy(() => data1Schema)],
  }
);
