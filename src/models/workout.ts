/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { CreatorCredit, creatorCreditSchema } from './creatorCredit';
import { MediaAsset, mediaAssetSchema } from './mediaAsset';
import { WorkoutAnalytics, workoutAnalyticsSchema } from './workoutAnalytics';
import { WorkoutSummary, workoutSummarySchema } from './workoutSummary';

/** Represents a workout in the system. */
export interface Workout {
  /** Unique identifier for the workout. */
  workoutId?: string;
  /** ID of the original workout if this is a duplicate. */
  originalWorkoutId?: string;
  /** The title of the workout. */
  workoutTitle?: string;
  /** The URL slug of the workout. */
  workoutSlug?: string;
  workoutBackgroundImage?: MediaAsset;
  /** The date and time when the workout was created. */
  createdAt?: string;
  /** The date and time when the workout was last updated. */
  updatedAt?: string;
  /** The date and time when the workout was last used. */
  lastViewedAt?: string;
  /** Summary information about the workout. */
  workoutSummary?: WorkoutSummary;
  /** Analytics data for the workout. */
  workoutAnalytics?: WorkoutAnalytics;
  /** List of creator credits associated with this workout. */
  creatorCredits?: CreatorCredit[];
}

export const workoutSchema: Schema<Workout> = object({
  workoutId: ['workoutId', optional(string())],
  originalWorkoutId: ['originalWorkoutId', optional(string())],
  workoutTitle: ['workoutTitle', optional(string())],
  workoutSlug: ['workoutSlug', optional(string())],
  workoutBackgroundImage: [
    'workoutBackgroundImage',
    optional(lazy(() => mediaAssetSchema)),
  ],
  createdAt: ['createdAt', optional(string())],
  updatedAt: ['updatedAt', optional(string())],
  lastViewedAt: ['lastViewedAt', optional(string())],
  workoutSummary: [
    'workoutSummary',
    optional(lazy(() => workoutSummarySchema)),
  ],
  workoutAnalytics: [
    'workoutAnalytics',
    optional(lazy(() => workoutAnalyticsSchema)),
  ],
  creatorCredits: [
    'creatorCredits',
    optional(array(lazy(() => creatorCreditSchema))),
  ],
});
