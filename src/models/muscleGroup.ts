/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { MediaAsset, mediaAssetSchema } from './mediaAsset';
import {
  MuscleGroupTypeEnum,
  muscleGroupTypeEnumSchema,
} from './muscleGroupTypeEnum';

export interface MuscleGroup {
  /** Unique identifier for the muscle group. */
  muscleGroupCode?: string;
  /** Name of the muscle group, localized. */
  muscleGroupName?: string;
  /** parent group CODE for hierarchical structuring. */
  muscleGroupParent?: string | null;
  /**
   * An array of muscle codes associated with this muscle group.
   * Each muscle code represents a specific muscle or muscle group targeted in exercises.
   * The codes are used to identify muscles across different languages and provide
   * consistency in muscle targeting for various exercises.
   */
  muscleGroupMuscles?: string[];
  muscleGroupType?: MuscleGroupTypeEnum;
  muscleGroupThumbnail?: MediaAsset;
}

export const muscleGroupSchema: Schema<MuscleGroup> = object({
  muscleGroupCode: ['muscleGroupCode', optional(string())],
  muscleGroupName: ['muscleGroupName', optional(string())],
  muscleGroupParent: ['muscleGroupParent', optional(nullable(string()))],
  muscleGroupMuscles: ['muscleGroupMuscles', optional(array(string()))],
  muscleGroupType: ['muscleGroupType', optional(muscleGroupTypeEnumSchema)],
  muscleGroupThumbnail: [
    'muscleGroupThumbnail',
    optional(lazy(() => mediaAssetSchema)),
  ],
});
