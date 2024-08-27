/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, lazy, object, optional, Schema, string } from '../schema';
import { LocaleIcon, localeIconSchema } from './localeIcon';

export interface Locale {
  /** A unique code for the locale. */
  localeCode?: string;
  /** The name of the locale. */
  localeName?: string;
  /** Indicates whether the locale is published. */
  published?: boolean;
  /** The icon associated with this locale. */
  localeIcon?: LocaleIcon;
}

export const localeSchema: Schema<Locale> = object({
  localeCode: ['localeCode', optional(string())],
  localeName: ['localeName', optional(string())],
  published: ['published', optional(boolean())],
  localeIcon: ['localeIcon', optional(lazy(() => localeIconSchema))],
});
