/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { WorkoutData, workoutDataSchema } from './workoutData';

export interface WorkoutDataResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  data: WorkoutData;
}

export const workoutDataResponseSchema: Schema<WorkoutDataResponse> = object({
  status: ['status', string()],
  message: ['message', string()],
  data: ['data', lazy(() => workoutDataSchema)],
});
