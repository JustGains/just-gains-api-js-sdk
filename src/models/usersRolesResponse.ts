/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface UsersRolesResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  /** The data returned by the operation. */
  data: string[];
}

export const usersRolesResponseSchema: Schema<UsersRolesResponse> = object({
  status: ['status', string()],
  message: ['message', string()],
  data: ['data', array(string())],
});
