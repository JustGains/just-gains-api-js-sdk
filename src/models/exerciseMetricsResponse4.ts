/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ExerciseMetricsResponse4 {
  status: string;
  message: string;
}

export const exerciseMetricsResponse4Schema: Schema<ExerciseMetricsResponse4> = object(
  { status: ['status', string()], message: ['message', string()] }
);
