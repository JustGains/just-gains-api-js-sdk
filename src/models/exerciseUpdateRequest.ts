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
import { ExerciseMuscle, exerciseMuscleSchema } from './exerciseMuscle';
import {
  PublishStatusCodeEnum,
  publishStatusCodeEnumSchema,
} from './publishStatusCodeEnum';
import {
  RelatedExerciseListItem,
  relatedExerciseListItemSchema,
} from './relatedExerciseListItem';

export interface ExerciseUpdateRequest {
  /** A unique identifier for the exercise. */
  exerciseCode?: string;
  /** Translated Primary Exercise Name */
  exerciseName?: string;
  exerciseEquipment?: ExerciseEquipment;
  exerciseMuscles?: ExerciseMuscle[];
  /** Array of category codes associated with this exercise */
  exerciseCategories?: string[];
  relatedExercises?: RelatedExerciseListItem[];
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
  /** Indicates if the exercise is a variant. When true, the exercise won't show up without being searched. */
  isVariant?: boolean;
  /** Admin notes for the exercise */
  adminNotes?: string;
}

export const exerciseUpdateRequestSchema: Schema<ExerciseUpdateRequest> = object(
  {
    exerciseCode: ['exerciseCode', optional(string())],
    exerciseName: ['exerciseName', optional(string())],
    exerciseEquipment: [
      'exerciseEquipment',
      optional(lazy(() => exerciseEquipmentSchema)),
    ],
    exerciseMuscles: [
      'exerciseMuscles',
      optional(array(lazy(() => exerciseMuscleSchema))),
    ],
    exerciseCategories: ['exerciseCategories', optional(array(string()))],
    relatedExercises: [
      'relatedExercises',
      optional(array(lazy(() => relatedExerciseListItemSchema))),
    ],
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
    isVariant: ['isVariant', optional(boolean())],
    adminNotes: ['adminNotes', optional(string())],
  }
);
