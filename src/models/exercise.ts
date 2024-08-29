/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  ExerciseEquipment,
  exerciseEquipmentSchema,
} from './exerciseEquipment';
import {
  ExerciseInstruction,
  exerciseInstructionSchema,
} from './exerciseInstruction';
import { ExerciseMuscle, exerciseMuscleSchema } from './exerciseMuscle';
import {
  ExerciseTranslation,
  exerciseTranslationSchema,
} from './exerciseTranslation';
import { ExerciseVideo, exerciseVideoSchema } from './exerciseVideo';
import { MediaAsset, mediaAssetSchema } from './mediaAsset';
import {
  PublishStatusCodeEnum,
  publishStatusCodeEnumSchema,
} from './publishStatusCodeEnum';

export interface Exercise {
  /** A unique identifier for the exercise. */
  exerciseCode?: string;
  /** Translated Primary Exercise Name */
  exerciseName?: string;
  exerciseTranslations?: ExerciseTranslation[];
  exerciseEquipment?: ExerciseEquipment;
  exerciseMuscles?: ExerciseMuscle[];
  exerciseVideos?: ExerciseVideo[];
  exerciseInstructions?: ExerciseInstruction[];
  exerciseThumbnail?: MediaAsset;
  /** The user ID of the user who created the exercise. */
  userId?: string;
  /** The exerciseTypeCode of the exercise */
  exerciseTypeCode?: string;
  /** The publish status of the exercise */
  publishStatusCode?: PublishStatusCodeEnum;
  /** Difficulty level of the exercise */
  difficulty?: number;
  /** Metabolic equivalent of the exercise */
  metabolicEquivalent?: number;
  /** Indicates if the exercise is plateloaded */
  isPlateloaded?: boolean;
  /** Indicates if the exercise is cardio */
  isCardio?: boolean;
  /** Olympic rating of the exercise */
  olympicRating?: number;
  /** Power lifter rating of the exercise */
  powerLifterRating?: number;
  /** Calisthenic rating of the exercise */
  calisthenicRating?: number;
  /** Popularity rating of the exercise */
  popularityRating?: number;
  /** Indicates if the exercise is plyometric */
  isPlyometric?: boolean;
  /** Indicates if the exercise is isometric */
  isIsometric?: boolean;
  /** Indicates if the exercise is calisthenic */
  isCalisthenic?: boolean;
  /** Indicates if the exercise is weighted */
  isWeighted?: boolean;
  /** Indicates if the exercise is unilateral */
  isUnilateral?: boolean;
  /** Indicates if the exercise is bodyweight */
  isBodyweight?: boolean;
  /** Admin notes for the exercise */
  adminNotes?: string;
}

export const exerciseSchema: Schema<Exercise> = object({
  exerciseCode: ['exerciseCode', optional(string())],
  exerciseName: ['exerciseName', optional(string())],
  exerciseTranslations: [
    'exerciseTranslations',
    optional(array(lazy(() => exerciseTranslationSchema))),
  ],
  exerciseEquipment: [
    'exerciseEquipment',
    optional(lazy(() => exerciseEquipmentSchema)),
  ],
  exerciseMuscles: [
    'exerciseMuscles',
    optional(array(lazy(() => exerciseMuscleSchema))),
  ],
  exerciseVideos: [
    'exerciseVideos',
    optional(array(lazy(() => exerciseVideoSchema))),
  ],
  exerciseInstructions: [
    'exerciseInstructions',
    optional(array(lazy(() => exerciseInstructionSchema))),
  ],
  exerciseThumbnail: [
    'exerciseThumbnail',
    optional(lazy(() => mediaAssetSchema)),
  ],
  userId: ['userId', optional(string())],
  exerciseTypeCode: ['exerciseTypeCode', optional(string())],
  publishStatusCode: [
    'publishStatusCode',
    optional(publishStatusCodeEnumSchema),
  ],
  difficulty: ['difficulty', optional(number())],
  metabolicEquivalent: ['metabolicEquivalent', optional(number())],
  isPlateloaded: ['isPlateloaded', optional(boolean())],
  isCardio: ['isCardio', optional(boolean())],
  olympicRating: ['olympicRating', optional(number())],
  powerLifterRating: ['powerLifterRating', optional(number())],
  calisthenicRating: ['calisthenicRating', optional(number())],
  popularityRating: ['popularityRating', optional(number())],
  isPlyometric: ['isPlyometric', optional(boolean())],
  isIsometric: ['isIsometric', optional(boolean())],
  isCalisthenic: ['isCalisthenic', optional(boolean())],
  isWeighted: ['isWeighted', optional(boolean())],
  isUnilateral: ['isUnilateral', optional(boolean())],
  isBodyweight: ['isBodyweight', optional(boolean())],
  adminNotes: ['adminNotes', optional(string())],
});
