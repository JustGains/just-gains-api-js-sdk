/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  MuscleListResponse,
  muscleListResponseSchema,
} from '../models/muscleListResponse';
import {
  MusclesTranslationsResponse1,
  musclesTranslationsResponse1Schema,
} from '../models/musclesTranslationsResponse1';
import {
  MuscleTranslation,
  muscleTranslationSchema,
} from '../models/muscleTranslation';
import {
  MuscleTranslationListResponse,
  muscleTranslationListResponseSchema,
} from '../models/muscleTranslationListResponse';
import { array, optional, string } from '../schema';
import { BaseController } from './baseController';
import { JustGainsErrorResponseError } from '../errors/justGainsErrorResponseError';
import { Muscles400Error } from '../errors/muscles400Error';

export class MusclesController extends BaseController {
  /**
   * @param localeCode Locale code to filter muscles by language
   * @return Response from the API call
   */
  async getMuscles(
    localeCode?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MuscleListResponse>> {
    const req = this.createRequest('GET', '/muscles');
    const mapped = req.prepareArgs({
      localeCode: [localeCode, optional(string())],
    });
    req.query('localeCode', mapped.localeCode);
    req.throwOn(400, Muscles400Error, 'Failed to retrieve muscles');
    req.authenticate(false);
    return req.callAsJson(muscleListResponseSchema, requestOptions);
  }

  /**
   * @param muscleCode The unique identifier code of the muscle to retrieve translations for
   * @return Response from the API call
   */
  async getMuscleTranslations(
    muscleCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MuscleTranslationListResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ muscleCode: [muscleCode, string()] });
    req.appendTemplatePath`/muscles/${mapped.muscleCode}/translations`;
    req.throwOn(
      400,
      JustGainsErrorResponseError,
      'Failed to retrieve muscle translations'
    );
    req.throwOn(404, JustGainsErrorResponseError, 'Muscle not found');
    req.authenticate(false);
    return req.callAsJson(muscleTranslationListResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @param muscleCode   The unique identifier code of the muscle to update translations for
   * @return Response from the API call
   */
  async updateMuscleTranslations(
    body: MuscleTranslation[],
    muscleCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<MusclesTranslationsResponse1>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      body: [body, array(muscleTranslationSchema)],
      muscleCode: [muscleCode, string()],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/muscles/${mapped.muscleCode}/translations`;
    req.throwOn(
      400,
      JustGainsErrorResponseError,
      'Failed to update muscle translations'
    );
    req.throwOn(401, JustGainsErrorResponseError, 'Unauthorized');
    req.throwOn(404, JustGainsErrorResponseError, 'Muscle not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(musclesTranslationsResponse1Schema, requestOptions);
  }
}
