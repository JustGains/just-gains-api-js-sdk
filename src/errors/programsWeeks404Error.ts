/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of ProgramsWeeks404
 */
interface ProgramsWeeks404 {
  status: string;
  message: string;
  errors?: string[];
}

export class ProgramsWeeks404Error extends ApiError<ProgramsWeeks404> {}
