/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, number, object, Schema } from '../schema';

export interface ExerciseSet {
  /** The number of the set within the exercise. */
  setNumber: number;
  /** A map of metric codes to their corresponding values for this set. */
  metricValues: Record<string, number>;
}

export const exerciseSetSchema: Schema<ExerciseSet> = object({
  setNumber: ['setNumber', number()],
  metricValues: ['metricValues', dict(number())],
});
