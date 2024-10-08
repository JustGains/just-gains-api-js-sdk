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
import { CreatorCredit, creatorCreditSchema } from './creatorCredit';
import { MediaAsset, mediaAssetSchema } from './mediaAsset';
import { WorkoutAnalytics, workoutAnalyticsSchema } from './workoutAnalytics';
import { WorkoutSummary, workoutSummarySchema } from './workoutSummary';

/** Represents a workout in the system from the My Workouts Page. */
export interface WorkoutTableItem {
  /** Unique identifier for the workout. */
  workoutId?: number;
  /** The title of the workout. */
  workoutTitle?: string;
  workoutImage?: MediaAsset;
  /** Indicates if the workout is a user's own workout. */
  isMyWorkout?: boolean;
  /** List of creator credits associated with this workout. */
  creatorCredits?: CreatorCredit[];
  /** List of primary muscle group codes targeted in the workout. */
  primaryMuscleGroups?: string[];
  /** List of equipment codes used in the workout. */
  equipmentList?: string[];
  /** List of secondary muscles targeted in the workout. */
  secondaryMuscleGroups?: string[];
  /** The date and time when the workout was created. */
  createdAt?: string;
  /** The date and time when the workout was last updated. */
  updatedAt?: string;
  /** The date and time when the workout was last used. */
  lastUsedAt?: string;
  /** NOT IMPLEMENTED:- TODO- List of tags associated with the workout. */
  tags?: string[];
  /** Summary information about the workout. */
  workoutSummary?: WorkoutSummary;
  /** Analytics data for the workout. */
  analytics?: WorkoutAnalytics;
  /** ID of the original workout if this is a duplicate. */
  originalWorkoutId?: number;
}

export const workoutTableItemSchema: Schema<WorkoutTableItem> = object({
  workoutId: ['workoutId', optional(number())],
  workoutTitle: ['workoutTitle', optional(string())],
  workoutImage: ['workoutImage', optional(lazy(() => mediaAssetSchema))],
  isMyWorkout: ['isMyWorkout', optional(boolean())],
  creatorCredits: [
    'creatorCredits',
    optional(array(lazy(() => creatorCreditSchema))),
  ],
  primaryMuscleGroups: ['primaryMuscleGroups', optional(array(string()))],
  equipmentList: ['equipmentList', optional(array(string()))],
  secondaryMuscleGroups: ['secondaryMuscleGroups', optional(array(string()))],
  createdAt: ['createdAt', optional(string())],
  updatedAt: ['updatedAt', optional(string())],
  lastUsedAt: ['lastUsedAt', optional(string())],
  tags: ['tags', optional(array(string()))],
  workoutSummary: [
    'workoutSummary',
    optional(lazy(() => workoutSummarySchema)),
  ],
  analytics: ['analytics', optional(lazy(() => workoutAnalyticsSchema))],
  originalWorkoutId: ['originalWorkoutId', optional(number())],
});
