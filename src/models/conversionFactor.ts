/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';

export interface ConversionFactor {
  metricToImperial?: number;
}

export const conversionFactorSchema: Schema<ConversionFactor> = object({
  metricToImperial: ['metricToImperial', optional(number())],
});
