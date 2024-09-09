/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { ExerciseMetric, exerciseMetricSchema } from '../models/exerciseMetric';
import {
  ExerciseMetricListResponse,
  exerciseMetricListResponseSchema,
} from '../models/exerciseMetricListResponse';
import {
  JustGainsBasicResponse,
  justGainsBasicResponseSchema,
} from '../models/justGainsBasicResponse';
import {
  JustGainsResponse,
  justGainsResponseSchema,
} from '../models/justGainsResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';
import { JustGainsErrorResponseError } from '../errors/justGainsErrorResponseError';

export class ExerciseMetricsController extends BaseController {
  /**
   * @param localeCode The locale for the metric names and measurement data
   * @return Response from the API call
   */
  async getExerciseMetrics(
    localeCode?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExerciseMetricListResponse>> {
    const req = this.createRequest('GET', '/exercise-metrics');
    const mapped = req.prepareArgs({
      localeCode: [localeCode, optional(string())],
    });
    req.query('localeCode', mapped.localeCode);
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.authenticate(false);
    return req.callAsJson(exerciseMetricListResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async createANewExerciseMetric(
    body: ExerciseMetric,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsBasicResponse>> {
    const req = this.createRequest('POST', '/exercise-metrics');
    const mapped = req.prepareArgs({ body: [body, exerciseMetricSchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsBasicResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @param metricCode
   * @return Response from the API call
   */
  async updateAnExerciseMetric(
    body: ExerciseMetric,
    metricCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      body: [body, exerciseMetricSchema],
      metricCode: [metricCode, string()],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/exercise-metrics/${mapped.metricCode}`;
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.throwOn(404, JustGainsErrorResponseError, 'Exercise metric not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsResponseSchema, requestOptions);
  }

  /**
   * @param metricCode
   * @return Response from the API call
   */
  async deleteAnExerciseMetric(
    metricCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({ metricCode: [metricCode, string()] });
    req.appendTemplatePath`/exercise-metrics/${mapped.metricCode}`;
    req.throwOn(
      404,
      JustGainsErrorResponseError,
      'Exercise metric deleted successfully'
    );
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsResponseSchema, requestOptions);
  }
}
