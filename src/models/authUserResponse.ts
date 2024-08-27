/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Data6, data6Schema } from './data6';

export interface AuthUserResponse {
  status: string;
  message: string;
  data?: Data6;
}

export const authUserResponseSchema: Schema<AuthUserResponse> = object({
  status: ['status', string()],
  message: ['message', string()],
  data: ['data', optional(lazy(() => data6Schema))],
});
