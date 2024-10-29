/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Data3, data3Schema } from './data3';

export interface AuthCallbackResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  data: Data3;
}

export const authCallbackResponseSchema: Schema<AuthCallbackResponse> = object({
  status: ['status', string()],
  message: ['message', string()],
  data: ['data', lazy(() => data3Schema)],
});