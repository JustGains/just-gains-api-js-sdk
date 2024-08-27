/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Data99, data99Schema } from './data99';

export interface WorkoutsDataResponse1 {
  status: string;
  message: string;
  data?: Data99;
}

export const workoutsDataResponse1Schema: Schema<WorkoutsDataResponse1> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: ['data', optional(lazy(() => data99Schema))],
  }
);
