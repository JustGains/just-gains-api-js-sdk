/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ExerciseCategory,
  exerciseCategorySchema,
} from '../models/exerciseCategory';
import {
  ExerciseCategoryListResponse,
  exerciseCategoryListResponseSchema,
} from '../models/exerciseCategoryListResponse';
import {
  ExerciseCategoryTranslation,
  exerciseCategoryTranslationSchema,
} from '../models/exerciseCategoryTranslation';
import {
  ExerciseCategoryTranslationListResponse,
  exerciseCategoryTranslationListResponseSchema,
} from '../models/exerciseCategoryTranslationListResponse';
import {
  JustGainsBasicResponse,
  justGainsBasicResponseSchema,
} from '../models/justGainsBasicResponse';
import {
  JustGainsResponse,
  justGainsResponseSchema,
} from '../models/justGainsResponse';
import { array, optional, string } from '../schema';
import { BaseController } from './baseController';
import { JustGainsErrorResponseError } from '../errors/justGainsErrorResponseError';

export class ExerciseCategoriesController extends BaseController {
  /**
   * @param localeCode The locale for returned category names
   * @return Response from the API call
   */
  async getExerciseCategories(
    localeCode?: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExerciseCategoryListResponse>> {
    const req = this.createRequest('GET', '/exercise-categories');
    const mapped = req.prepareArgs({
      localeCode: [localeCode, optional(string())],
    });
    req.query('localeCode', mapped.localeCode);
    req.authenticate(false);
    return req.callAsJson(exerciseCategoryListResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @return Response from the API call
   */
  async createExerciseCategory(
    body: ExerciseCategory,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsBasicResponse>> {
    const req = this.createRequest('POST', '/exercise-categories');
    const mapped = req.prepareArgs({ body: [body, exerciseCategorySchema] });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.throwOn(400, JustGainsErrorResponseError, 'Bad Request');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsBasicResponseSchema, requestOptions);
  }

  /**
   * @param body
   * @param exerciseCategoryCode
   * @return Response from the API call
   */
  async updateAnExerciseCategory(
    body: ExerciseCategory,
    exerciseCategoryCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsBasicResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      body: [body, exerciseCategorySchema],
      exerciseCategoryCode: [exerciseCategoryCode, string()],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/exercise-categories/${mapped.exerciseCategoryCode}`;
    req.throwOn(400, JustGainsErrorResponseError, 'Bad Request');
    req.throwOn(404, JustGainsErrorResponseError, 'Category not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsBasicResponseSchema, requestOptions);
  }

  /**
   * @param exerciseCategoryCode
   * @return Response from the API call
   */
  async deleteAnExerciseCategory(
    exerciseCategoryCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      exerciseCategoryCode: [exerciseCategoryCode, string()],
    });
    req.appendTemplatePath`/exercise-categories/${mapped.exerciseCategoryCode}`;
    req.throwOn(404, JustGainsErrorResponseError, 'Category not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsResponseSchema, requestOptions);
  }

  /**
   * @param exerciseCategoryCode The unique code of the exercise category
   * @return Response from the API call
   */
  async getExerciseCategoryTranslations(
    exerciseCategoryCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExerciseCategoryTranslationListResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      exerciseCategoryCode: [exerciseCategoryCode, string()],
    });
    req.appendTemplatePath`/exercise-categories/${mapped.exerciseCategoryCode}/translations`;
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.throwOn(
      404,
      JustGainsErrorResponseError,
      'Exercise category not found'
    );
    req.authenticate(false);
    return req.callAsJson(
      exerciseCategoryTranslationListResponseSchema,
      requestOptions
    );
  }

  /**
   * @param body
   * @param exerciseCategoryCode The unique code of the exercise category
   * @return Response from the API call
   */
  async updateExerciseCategoryTranslations(
    body: ExerciseCategoryTranslation[],
    exerciseCategoryCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsBasicResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      body: [body, array(exerciseCategoryTranslationSchema)],
      exerciseCategoryCode: [exerciseCategoryCode, string()],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/exercise-categories/${mapped.exerciseCategoryCode}/translations`;
    req.throwOn(400, JustGainsErrorResponseError, 'Bad request');
    req.throwOn(
      404,
      JustGainsErrorResponseError,
      'Exercise category not found'
    );
    req.throwOn(422, JustGainsErrorResponseError, 'Validation error');
    req.authenticate(false);
    return req.callAsJson(justGainsBasicResponseSchema, requestOptions);
  }
}
