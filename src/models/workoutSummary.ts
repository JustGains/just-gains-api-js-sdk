/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

/** Summary information about the workout. */
export interface WorkoutSummary {
  /** Total number of repetitions across all exercises in the workout. */
  totalReps?: number;
  /** Total number of sets across all exercises in the workout. */
  totalSets?: number;
  /** Total volume (weight * reps) across all exercises in the workout. */
  totalVolume?: number;
  /** Total distance covered in the workout, if applicable. */
  totalDistance?: number;
  /** Estimated duration of the workout in minutes. */
  estimatedDuration?: number;
  /** Number of exercises in the workout. */
  exerciseCount?: number;
}

export const workoutSummarySchema: Schema<WorkoutSummary> = object({
  totalReps: ['totalReps', optional(number())],
  totalSets: ['totalSets', optional(number())],
  totalVolume: ['totalVolume', optional(number())],
  totalDistance: ['totalDistance', optional(number())],
  estimatedDuration: ['estimatedDuration', optional(number())],
  exerciseCount: ['exerciseCount', optional(number())],
});
