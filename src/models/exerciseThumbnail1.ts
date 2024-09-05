/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { MediaAsset, mediaAssetSchema } from './mediaAsset';

/** The data returned by the operation. */
export interface ExerciseThumbnail1 {
  /** Unique identifier for the exercise. */
  exerciseCode: string;
  /** The user ID of the user who created the thumbnail. */
  userId: string;
  mediaAsset: MediaAsset;
}

export const exerciseThumbnail1Schema: Schema<ExerciseThumbnail1> = object({
  exerciseCode: ['exerciseCode', string()],
  userId: ['userId', string()],
  mediaAsset: ['mediaAsset', lazy(() => mediaAssetSchema)],
});
