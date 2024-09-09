/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ExercisesVideosResponse2,
  exercisesVideosResponse2Schema,
} from '../models/exercisesVideosResponse2';
import { ExerciseVideo, exerciseVideoSchema } from '../models/exerciseVideo';
import {
  ExerciseVideoListResponse,
  exerciseVideoListResponseSchema,
} from '../models/exerciseVideoListResponse';
import {
  ExerciseVideoResponse,
  exerciseVideoResponseSchema,
} from '../models/exerciseVideoResponse';
import {
  JustGainsResponse,
  justGainsResponseSchema,
} from '../models/justGainsResponse';
import { array, number, string } from '../schema';
import { BaseController } from './baseController';
import { JustGainsErrorResponseError } from '../errors/justGainsErrorResponseError';

export class ExercisesExerciseVideosController extends BaseController {
  /**
   * @param exerciseCode The exercise code to retrieve videos for
   * @return Response from the API call
   */
  async getExerciseVideoOn(
    exerciseCode: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExerciseVideoListResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ exerciseCode: [exerciseCode, string()] });
    req.appendTemplatePath`/exercises/${mapped.exerciseCode}/videos`;
    req.throwOn(400, JustGainsErrorResponseError, 'Invalid exercise code');
    req.throwOn(404, JustGainsErrorResponseError, 'Exercise videos not found');
    req.authenticate(false);
    return req.callAsJson(exerciseVideoListResponseSchema, requestOptions);
  }

  /**
   * @param exerciseCode The exercise code to add videos to
   * @param body
   * @return Response from the API call
   */
  async addNewExerciseVideos(
    exerciseCode: string,
    body: ExerciseVideo,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExerciseVideoResponse>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      exerciseCode: [exerciseCode, string()],
      body: [body, exerciseVideoSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/exercises/${mapped.exerciseCode}/videos`;
    req.throwOn(
      400,
      JustGainsErrorResponseError,
      'Invalid exercise video data'
    );
    req.throwOn(401, JustGainsErrorResponseError, 'Authentication required');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(exerciseVideoResponseSchema, requestOptions);
  }

  /**
   * @param exerciseCode The exercise code of the exercise videos to update
   * @param body
   * @return Response from the API call
   */
  async updateExerciseVideos(
    exerciseCode: string,
    body: ExerciseVideo[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExercisesVideosResponse2>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      exerciseCode: [exerciseCode, string()],
      body: [body, array(exerciseVideoSchema)],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/exercises/${mapped.exerciseCode}/videos`;
    req.throwOn(
      400,
      JustGainsErrorResponseError,
      'Invalid exercise video data'
    );
    req.throwOn(401, JustGainsErrorResponseError, 'Authentication required');
    req.throwOn(404, JustGainsErrorResponseError, 'Exercise videos not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(exercisesVideosResponse2Schema, requestOptions);
  }

  /**
   * @param exerciseCode The exercise code to retrieve videos for
   * @param userId       The userId of the creator whose videos we're referencing
   * @return Response from the API call
   */
  async getExerciseVideoByUserId(
    exerciseCode: string,
    userId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExercisesVideosResponse2>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      exerciseCode: [exerciseCode, string()],
      userId: [userId, string()],
    });
    req.appendTemplatePath`/exercises/${mapped.exerciseCode}/videos/${mapped.userId}`;
    req.throwOn(400, JustGainsErrorResponseError, 'Invalid exercise code');
    req.throwOn(404, JustGainsErrorResponseError, 'Exercise videos not found');
    req.authenticate(false);
    return req.callAsJson(exercisesVideosResponse2Schema, requestOptions);
  }

  /**
   * @param exerciseCode    The exercise code
   * @param userId          The userId of the video creator
   * @param exerciseVideoId The exercise video ID to delete
   * @return Response from the API call
   */
  async deleteAnExerciseVideo(
    exerciseCode: string,
    userId: string,
    exerciseVideoId: number,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<JustGainsResponse>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      exerciseCode: [exerciseCode, string()],
      userId: [userId, string()],
      exerciseVideoId: [exerciseVideoId, number()],
    });
    req.appendTemplatePath`/exercises/${mapped.exerciseCode}/videos/${mapped.userId}/${mapped.exerciseVideoId}`;
    req.throwOn(401, JustGainsErrorResponseError, 'Authentication required');
    req.throwOn(404, JustGainsErrorResponseError, 'Exercise video not found');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(justGainsResponseSchema, requestOptions);
  }
}
