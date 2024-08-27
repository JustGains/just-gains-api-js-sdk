/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Pagination, paginationSchema } from './pagination';
import { WorkoutTableData, workoutTableDataSchema } from './workoutTableData';

export interface WorkoutsResponse {
  status: string;
  message: string;
  data?: WorkoutTableData[];
  pagination?: Pagination;
}

export const workoutsResponseSchema: Schema<WorkoutsResponse> = object({
  status: ['status', string()],
  message: ['message', string()],
  data: ['data', optional(array(lazy(() => workoutTableDataSchema)))],
  pagination: ['pagination', optional(lazy(() => paginationSchema))],
});
