/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  ContributionTypeEnum,
  contributionTypeEnumSchema,
} from './contributionTypeEnum';
import { CreatorProfile2, creatorProfile2Schema } from './creatorProfile2';

/** Represents a creator credit for a workout. */
export interface CreatorCredit {
  /** Unique identifier for the creator profile. */
  creatorProfileId?: string;
  /** URL source of the workout, if applicable. */
  workoutSourceURL?: string;
  /** Type of contribution made by the creator. */
  contributionType?: ContributionTypeEnum;
  creatorProfile?: CreatorProfile2;
}

export const creatorCreditSchema: Schema<CreatorCredit> = object({
  creatorProfileId: ['creatorProfileId', optional(string())],
  workoutSourceURL: ['workoutSourceURL', optional(string())],
  contributionType: ['contributionType', optional(contributionTypeEnumSchema)],
  creatorProfile: [
    'creatorProfile',
    optional(lazy(() => creatorProfile2Schema)),
  ],
});
