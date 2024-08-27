/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface Data46 {
  localeCode?: string | null;
  equipmentName?: string;
}

export const data46Schema: Schema<Data46> = object({
  localeCode: ['localeCode', optional(nullable(string()))],
  equipmentName: ['equipmentName', optional(string())],
});
