/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of WorkoutsData404
 */
interface WorkoutsData404 {
  status: string;
  message: string;
  errors?: string[];
}

export class WorkoutsData404Error extends ApiError<WorkoutsData404> {}
