/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { WorkoutContent, workoutContentSchema } from '../models/workoutContent';
import {
  WorkoutContentResponse,
  workoutContentResponseSchema,
} from '../models/workoutContentResponse';
import { optional, string } from '../schema';
import { BaseController } from './baseController';
import { JustGainsErrorResponseError } from '../errors/justGainsErrorResponseError';

export class WorkoutsWorkoutContentController extends BaseController {
  /**
   * @param workoutId The ID of the workout to retrieve
   * @return Response from the API call
   */
  async getWorkoutContentByID(
    workoutId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WorkoutContentResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ workoutId: [workoutId, string()] });
    req.appendTemplatePath`/workouts/${mapped.workoutId}/content`;
    req.throwOn(404, JustGainsErrorResponseError, 'Workout not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(workoutContentResponseSchema, requestOptions);
  }

  /**
   * @param workoutId    The ID of the workout to update
   * @param body
   * @return Response from the API call
   */
  async updateWorkoutContentByID(
    workoutId: string,
    body?: WorkoutContent,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<WorkoutContentResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      workoutId: [workoutId, string()],
      body: [body, optional(workoutContentSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/workouts/${mapped.workoutId}/content`;
    req.throwOn(404, JustGainsErrorResponseError, 'Workout not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(workoutContentResponseSchema, requestOptions);
  }
}
