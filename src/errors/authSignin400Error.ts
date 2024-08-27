/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of AuthSignin400
 */
interface AuthSignin400 {
  status: string;
  message: string;
  errors?: string[];
}

export class AuthSignin400Error extends ApiError<AuthSignin400> {}
