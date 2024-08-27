/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Data72, data72Schema } from './data72';

export interface ProgramsAnalyticsResponse {
  status: string;
  message: string;
  data?: Data72;
}

export const programsAnalyticsResponseSchema: Schema<ProgramsAnalyticsResponse> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: ['data', optional(lazy(() => data72Schema))],
  }
);
