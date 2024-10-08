/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { ExerciseListItem, exerciseListItemSchema } from './exerciseListItem';
import { Pagination, paginationSchema } from './pagination';

export interface ExerciseListResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  data: ExerciseListItem[];
  pagination?: Pagination;
}

export const exerciseListResponseSchema: Schema<ExerciseListResponse> = object({
  status: ['status', string()],
  message: ['message', string()],
  data: ['data', array(lazy(() => exerciseListItemSchema))],
  pagination: ['pagination', optional(lazy(() => paginationSchema))],
});
