/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface PublishedStatusTranslation {
  /** The locale code of the translation */
  localeCode?: string;
  /** The translated name of the published status */
  publishedStatusName?: string;
}

export const publishedStatusTranslationSchema: Schema<PublishedStatusTranslation> = object(
  {
    localeCode: ['localeCode', optional(string())],
    publishedStatusName: ['publishedStatusName', optional(string())],
  }
);
