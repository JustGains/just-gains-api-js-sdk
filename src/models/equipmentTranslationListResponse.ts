/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import {
  EquipmentTranslation,
  equipmentTranslationSchema,
} from './equipmentTranslation';

export interface EquipmentTranslationListResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  data: EquipmentTranslation[];
}

export const equipmentTranslationListResponseSchema: Schema<EquipmentTranslationListResponse> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: ['data', array(lazy(() => equipmentTranslationSchema))],
  }
);
