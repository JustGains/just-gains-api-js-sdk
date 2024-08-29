/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ProgramAnalyticsResponse,
  programAnalyticsResponseSchema,
} from '../models/programAnalyticsResponse';
import { number } from '../schema';
import { BaseController } from './baseController';
import { JustGainsErrorResponseError } from '../errors/justGainsErrorResponseError';

export class ProgramsProgramAnalyticsController extends BaseController {
  /**
   * @param programId
   * @return Response from the API call
   */
  async getAnlyticsProgram(
    programId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProgramAnalyticsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ programId: [programId, number()] });
    req.appendTemplatePath`/programs/${mapped.programId}/analytics`;
    req.throwOn(404, JustGainsErrorResponseError, 'Program not found');
    req.authenticate(false);
    return req.callAsJson(programAnalyticsResponseSchema, requestOptions);
  }
}
