/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface ExerciseModelDTO {
  id?: number;
  modelName?: string;
  videoId?: string;
  videoUrl?: string;
}

export const exerciseModelDTOSchema: Schema<ExerciseModelDTO> = object({
  id: ['id', optional(number())],
  modelName: ['model_name', optional(string())],
  videoId: ['video_id', optional(string())],
  videoUrl: ['video_url', optional(string())],
});
