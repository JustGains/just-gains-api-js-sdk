/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Data75, data75Schema } from './data75';

export interface ProgramsReviewsResponse1 {
  status: string;
  message: string;
  data?: Data75;
}

export const programsReviewsResponse1Schema: Schema<ProgramsReviewsResponse1> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: ['data', optional(lazy(() => data75Schema))],
  }
);
