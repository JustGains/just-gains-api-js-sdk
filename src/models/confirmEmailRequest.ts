/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

/** Request object for email confirmation */
export interface ConfirmEmailRequest {
  /** Email address to confirm */
  email: string;
}

export const confirmEmailRequestSchema: Schema<ConfirmEmailRequest> = object({
  email: ['email', string()],
});
