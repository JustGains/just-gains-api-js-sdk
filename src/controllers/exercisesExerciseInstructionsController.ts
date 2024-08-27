/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import {
  ExerciseInstruction,
  exerciseInstructionSchema,
} from '../models/exerciseInstruction';
import {
  ExercisesInstructionsResponse,
  exercisesInstructionsResponseSchema,
} from '../models/exercisesInstructionsResponse';
import {
  ExercisesInstructionsResponse1,
  exercisesInstructionsResponse1Schema,
} from '../models/exercisesInstructionsResponse1';
import {
  ExercisesInstructionsUserIdResponse,
  exercisesInstructionsUserIdResponseSchema,
} from '../models/exercisesInstructionsUserIdResponse';
import {
  ExercisesInstructionsUserIdResponse2,
  exercisesInstructionsUserIdResponse2Schema,
} from '../models/exercisesInstructionsUserIdResponse2';
import { array, optional, string } from '../schema';
import { BaseController } from './baseController';
import { ExercisesInstructions400Error } from '../errors/exercisesInstructions400Error';
import { ExercisesInstructions401Error } from '../errors/exercisesInstructions401Error';
import { ExercisesInstructions404Error } from '../errors/exercisesInstructions404Error';
import { ExercisesInstructionsUserId400Error } from '../errors/exercisesInstructionsUserId400Error';
import { ExercisesInstructionsUserId401Error } from '../errors/exercisesInstructionsUserId401Error';
import { ExercisesInstructionsUserId404Error } from '../errors/exercisesInstructionsUserId404Error';

export class ExercisesExerciseInstructionsController extends BaseController {
  /**
   * @param exerciseCode The exercise code to retrieve instruction models for
   * @param localeCodes  The array of locales for the instructions (e.g., 'en-US', 'es-ES')
   * @return Response from the API call
   */
  async getExerciseInstructions(
    exerciseCode: string,
    localeCodes?: string[],
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExercisesInstructionsResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      exerciseCode: [exerciseCode, string()],
      localeCodes: [localeCodes, optional(array(string()))],
    });
    req.query('localeCodes', mapped.localeCodes);
    req.appendTemplatePath`/exercises/${mapped.exerciseCode}/instructions`;
    req.throwOn(400, ExercisesInstructions400Error, 'Bad request');
    req.throwOn(
      404,
      ExercisesInstructions404Error,
      'Exercise instructions not found'
    );
    req.authenticate(false);
    return req.callAsJson(exercisesInstructionsResponseSchema, requestOptions);
  }

  /**
   * @param exerciseCode The exercise code to create instructions for
   * @param body
   * @return Response from the API call
   */
  async createNewExerciseInstructions(
    exerciseCode: string,
    body: ExerciseInstruction,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExercisesInstructionsResponse1>> {
    const req = this.createRequest('POST');
    const mapped = req.prepareArgs({
      exerciseCode: [exerciseCode, string()],
      body: [body, exerciseInstructionSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/exercises/${mapped.exerciseCode}/instructions`;
    req.throwOn(400, ExercisesInstructions400Error, 'Bad request');
    req.throwOn(401, ExercisesInstructions401Error, 'Unauthorized');
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(exercisesInstructionsResponse1Schema, requestOptions);
  }

  /**
   * @param exerciseCode The exercise code to retrieve instructions for
   * @param localeCode   The locale for the instructions (e.g., 'en-US', 'es-ES')
   * @param userId       The UserID that belongs to the instructions being requested
   * @return Response from the API call
   */
  async getExerciseInstruction(
    exerciseCode: string,
    localeCode: string,
    userId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExercisesInstructionsUserIdResponse>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({
      exerciseCode: [exerciseCode, string()],
      localeCode: [localeCode, string()],
      userId: [userId, string()],
    });
    req.appendTemplatePath`/exercises/${mapped.exerciseCode}/instructions/${mapped.localeCode}/${mapped.userId}`;
    req.throwOn(400, ExercisesInstructionsUserId400Error, 'Bad request');
    req.throwOn(
      404,
      ExercisesInstructionsUserId404Error,
      'Exercise instructions not found'
    );
    req.authenticate(false);
    return req.callAsJson(
      exercisesInstructionsUserIdResponseSchema,
      requestOptions
    );
  }

  /**
   * @param exerciseCode The exercise code of the instructions to update
   * @param localeCode   The locale code for the instructions to update
   * @param userId       The userId of the creator for the instructions to update
   * @param body
   * @return Response from the API call
   */
  async updateExerciseInstructions(
    exerciseCode: string,
    localeCode: string,
    userId: string,
    body: ExerciseInstruction,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExercisesInstructionsUserIdResponse>> {
    const req = this.createRequest('PUT');
    const mapped = req.prepareArgs({
      exerciseCode: [exerciseCode, string()],
      localeCode: [localeCode, string()],
      userId: [userId, string()],
      body: [body, exerciseInstructionSchema],
    });
    req.header('Content-Type', 'application/json');
    req.json(mapped.body);
    req.appendTemplatePath`/exercises/${mapped.exerciseCode}/instructions/${mapped.localeCode}/${mapped.userId}`;
    req.throwOn(400, ExercisesInstructionsUserId400Error, 'Bad request');
    req.throwOn(401, ExercisesInstructionsUserId401Error, 'Unauthorized');
    req.throwOn(
      404,
      ExercisesInstructionsUserId404Error,
      'Exercise instructions not found'
    );
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(
      exercisesInstructionsUserIdResponseSchema,
      requestOptions
    );
  }

  /**
   * @param exerciseCode The exercise code of the instructions to delete
   * @param localeCode   The locale code for the instructions to delete
   * @param userId       The user ID of the instructions to delete
   * @return Response from the API call
   */
  async deleteExerciseInstructions(
    exerciseCode: string,
    localeCode: string,
    userId: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<ExercisesInstructionsUserIdResponse2>> {
    const req = this.createRequest('DELETE');
    const mapped = req.prepareArgs({
      exerciseCode: [exerciseCode, string()],
      localeCode: [localeCode, string()],
      userId: [userId, string()],
    });
    req.appendTemplatePath`/exercises/${mapped.exerciseCode}/instructions/${mapped.localeCode}/${mapped.userId}`;
    req.throwOn(401, ExercisesInstructionsUserId401Error, 'Unauthorized');
    req.throwOn(
      404,
      ExercisesInstructionsUserId404Error,
      'Exercise instructions not found'
    );
    req.authenticate([{ bearerAuth: true }]);
    return req.callAsJson(
      exercisesInstructionsUserIdResponse2Schema,
      requestOptions
    );
  }
}
