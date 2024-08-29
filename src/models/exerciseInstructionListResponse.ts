/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  ExerciseInstructionListItem,
  exerciseInstructionListItemSchema,
} from './exerciseInstructionListItem';
import { Pagination, paginationSchema } from './pagination';

export interface ExerciseInstructionListResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  /** The data returned by the operation. */
  data: ExerciseInstructionListItem[];
  pagination?: Pagination;
}

export const exerciseInstructionListResponseSchema: Schema<ExerciseInstructionListResponse> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: ['data', array(lazy(() => exerciseInstructionListItemSchema))],
    pagination: ['pagination', optional(lazy(() => paginationSchema))],
  }
);