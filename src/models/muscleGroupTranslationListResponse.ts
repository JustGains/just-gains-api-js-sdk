/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import {
  MuscleGroupTranslation,
  muscleGroupTranslationSchema,
} from './muscleGroupTranslation';

export interface MuscleGroupTranslationListResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  data: MuscleGroupTranslation[];
}

export const muscleGroupTranslationListResponseSchema: Schema<MuscleGroupTranslationListResponse> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: ['data', array(lazy(() => muscleGroupTranslationSchema))],
  }
);
