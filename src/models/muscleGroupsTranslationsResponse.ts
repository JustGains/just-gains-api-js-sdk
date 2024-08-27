/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  MuscleGroupTranslation,
  muscleGroupTranslationSchema,
} from './muscleGroupTranslation';

export interface MuscleGroupsTranslationsResponse {
  status: string;
  message: string;
  data?: MuscleGroupTranslation[];
}

export const muscleGroupsTranslationsResponseSchema: Schema<MuscleGroupsTranslationsResponse> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: ['data', optional(array(lazy(() => muscleGroupTranslationSchema)))],
  }
);
