/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ProgramsViewsResponse,
  programsViewsResponseSchema,
} from '../models/programsViewsResponse';
import { ProgramView, programViewSchema } from '../models/programView';
import { number } from '../schema';
import { BaseController } from './baseController';
import { ProgramsViews400Error } from '../errors/programsViews400Error';
import { ProgramsViews404Error } from '../errors/programsViews404Error';

export class ProgramsProgramViewsController extends BaseController {
  /**
   * @param programId
   * @param body
   * @return Response from the API call
   */
  async addViewProgram(
    programId: number,
    body: ProgramView,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProgramsViewsResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      programId: [programId, number()],
      body: [body, programViewSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/programs/${mapped.programId}/views`;
    req.throwOn(400, ProgramsViews400Error, 'Bad request');
    req.throwOn(404, ProgramsViews404Error, 'Program not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(programsViewsResponseSchema, requestOptions);
  }
}
