/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { Exercise, exerciseSchema } from './exercise';

export interface ExerciseResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  data: Exercise;
}

export const exerciseResponseSchema: Schema<ExerciseResponse> = object({
  status: ['status', string()],
  message: ['message', string()],
  data: ['data', lazy(() => exerciseSchema)],
});
