/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of WorkoutsData400
 */
interface WorkoutsData400 {
  status: string;
  message: string;
  errors?: string[];
}

export class WorkoutsData400Error extends ApiError<WorkoutsData400> {}
