/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, unknown } from '../schema';
import { AuthData, authDataSchema } from './authData';

export interface AuthCallbackResponse {
  /** Authentication data containing tokens and user information */
  data?: AuthData;
  status?: unknown;
  message?: unknown;
}

export const authCallbackResponseSchema: Schema<AuthCallbackResponse> = object({
  data: ['data', optional(lazy(() => authDataSchema))],
  status: ['status', optional(unknown())],
  message: ['message', optional(unknown())],
});
