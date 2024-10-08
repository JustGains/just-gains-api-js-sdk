/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, unknown } from '../schema';
import {
  ExerciseVideoResponse,
  exerciseVideoResponseSchema,
} from './exerciseVideoResponse';

export interface ExercisesVideosResponse1 {
  data?: ExerciseVideoResponse[];
  message?: unknown;
}

export const exercisesVideosResponse1Schema: Schema<ExercisesVideosResponse1> = object(
  {
    data: ['data', optional(array(lazy(() => exerciseVideoResponseSchema)))],
    message: ['message', optional(unknown())],
  }
);
