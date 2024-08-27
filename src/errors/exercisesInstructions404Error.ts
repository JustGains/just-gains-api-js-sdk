/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of ExercisesInstructions404
 */
interface ExercisesInstructions404 {
  status: string;
  message: string;
  errors?: string[];
}

export class ExercisesInstructions404Error extends ApiError<
  ExercisesInstructions404
> {}
