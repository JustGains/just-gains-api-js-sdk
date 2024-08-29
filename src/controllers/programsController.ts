/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  JustGainsBasicResponse,
  justGainsBasicResponseSchema,
} from '../models/justGainsBasicResponse';
import {
  JustGainsResponse,
  justGainsResponseSchema,
} from '../models/justGainsResponse';
import { Program, programSchema } from '../models/program';
import {
  ProgramListResponse,
  programListResponseSchema,
} from '../models/programListResponse';
import {
  ProgramResponse,
  programResponseSchema,
} from '../models/programResponse';
import { SortByEnum, sortByEnumSchema } from '../models/sortByEnum';
import { SortOrderEnum, sortOrderEnumSchema } from '../models/sortOrderEnum';
import { number, optional, string } from '../schema';
import { BaseController } from './baseController';
import { JustGainsErrorResponseError } from '../errors/justGainsErrorResponseError';
import { Programs400Error } from '../errors/programs400Error';

export class ProgramsController extends BaseController {
  /**
   * @param page              Example: 1
   * @param pageSize          Example: 20
   * @param sortBy            Example: createdAt
   * @param sortOrder         Example: desc
   * @param publishStatusCode
   * @param userId
   * @return Response from the API call
   */
  async getPrograms(
    page?: number,
    pageSize?: number,
    sortBy?: SortByEnum,
    sortOrder?: SortOrderEnum,
    publishStatusCode?: string,
    userId?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProgramListResponse>> {
    const req = this.createRequest('GET', '/programs');
    const mapped = req.prepareArgs({
      page: [page, optional(number())],
      pageSize: [pageSize, optional(number())],
      sortBy: [sortBy, optional(sortByEnumSchema)],
      sortOrder: [sortOrder, optional(sortOrderEnumSchema)],
      publishStatusCode: [publishStatusCode, optional(string())],
      userId: [userId, optional(string())],
    });
    req.query('page', mapped.page);
    req.query('pageSize', mapped.pageSize);
    req.query('sortBy', mapped.sortBy);
    req.query('sortOrder', mapped.sortOrder);
    req.query('publishStatusCode', mapped.publishStatusCode);
    req.query('userId', mapped.userId);
    req.throwOn(400, Programs400Error, 'Bad request');
    req.authenticate(false);
    return req.callAsJson(programListResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async createProgram(
    body: Program,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProgramResponse>> {
    const req = this.createRequest('POST', '/programs');
    const mapped = req.prepareArgs({ body: [body, programSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(programResponseSchema, requestOptions);
  }

  /**
   * @param programId
   * @return Response from the API call
   */
  async getProgram(
    programId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ProgramResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ programId: [programId, number()] });
    req.appendTemplatePath`/programs/${mapped.programId}`;
    req.throwOn(404, JustGainsErrorResponseError, 'Program not found');
    req.authenticate(false);
    return req.callAsJson(programResponseSchema, requestOptions);
  }

  /**
   * @param programId
   * @param body
   * @return Response from the API call
   */
  async updateProgram(
    programId: number,
    body: Program,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      programId: [programId, number()],
      body: [body, programSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/programs/${mapped.programId}`;
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.throwOn(404, JustGainsErrorResponseError, 'Program not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsResponseSchema, requestOptions);
  }

  /**
   * @param programId
   * @return Response from the API call
   */
  async deleteProgram(
    programId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsBasicResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ programId: [programId, number()] });
    req.appendTemplatePath`/programs/${mapped.programId}`;
    req.throwOn(404, JustGainsErrorResponseError, 'Program not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsBasicResponseSchema, requestOptions);
  }
}
