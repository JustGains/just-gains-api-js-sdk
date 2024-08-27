/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, number, object, optional, Schema } from '../schema';
import { Units1, units1Schema } from './units1';

export interface ImperialUnits {
  units?: Units1[];
  defaultUnit?: number;
}

export const imperialUnitsSchema: Schema<ImperialUnits> = object({
  units: ['units', optional(array(lazy(() => units1Schema)))],
  defaultUnit: ['defaultUnit', optional(number())],
});
