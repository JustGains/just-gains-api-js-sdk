/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { WorkoutData, workoutDataSchema } from './workoutData';

export interface WorkoutsDataResponse {
  status: string;
  message: string;
  data?: WorkoutData[];
}

export const workoutsDataResponseSchema: Schema<WorkoutsDataResponse> = object({
  status: ['status', string()],
  message: ['message', string()],
  data: ['data', optional(array(lazy(() => workoutDataSchema)))],
});
