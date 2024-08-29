/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of JustGainsErrorResponse
 */
interface JustGainsErrorResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  /** A list of error messages that occurred during the operation. */
  errors?: string[];
}

export class JustGainsErrorResponseError extends ApiError<
  JustGainsErrorResponse
> {}
