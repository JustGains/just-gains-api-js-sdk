/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { CreatorCredit, creatorCreditSchema } from './creatorCredit';
import { MediaAsset, mediaAssetSchema } from './mediaAsset';

/** A new workout being created by POST - All fields optional */
export interface WorkoutRequest {
  /** The title of the workout. */
  workoutTitle?: string;
  /** The URL slug of the workout. */
  workoutSlug?: string;
  workoutBackgroundImage?: MediaAsset;
  /** List of creator credits associated with this workout. */
  creatorCredits?: CreatorCredit[];
}

export const workoutRequestSchema: Schema<WorkoutRequest> = object({
  workoutTitle: ['workoutTitle', optional(string())],
  workoutSlug: ['workoutSlug', optional(string())],
  workoutBackgroundImage: [
    'workoutBackgroundImage',
    optional(lazy(() => mediaAssetSchema)),
  ],
  creatorCredits: [
    'creatorCredits',
    optional(array(lazy(() => creatorCreditSchema))),
  ],
});
