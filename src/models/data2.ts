/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, nullable, object, optional, Schema, string } from '../schema';

export interface Data2 {
  /** Whether the username is available */
  isAvailable?: boolean;
  /** Whether the username is valid */
  isValid?: boolean;
  /** The validation result */
  validation?: string;
  /** The CreatorProfileId of the creator who has this username. Only present if isAvailable is false. */
  creatorProfileId?: string | null;
}

export const data2Schema: Schema<Data2> = object({
  isAvailable: ['isAvailable', optional(boolean())],
  isValid: ['isValid', optional(boolean())],
  validation: ['validation', optional(string())],
  creatorProfileId: ['creatorProfileId', optional(nullable(string()))],
});
