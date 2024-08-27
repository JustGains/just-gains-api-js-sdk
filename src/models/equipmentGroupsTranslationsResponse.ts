/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  EquipmentGroupTranslation,
  equipmentGroupTranslationSchema,
} from './equipmentGroupTranslation';

export interface EquipmentGroupsTranslationsResponse {
  status: string;
  message: string;
  data?: EquipmentGroupTranslation[];
}

export const equipmentGroupsTranslationsResponseSchema: Schema<EquipmentGroupsTranslationsResponse> = object(
  {
    status: ['status', string()],
    message: ['message', string()],
    data: [
      'data',
      optional(array(lazy(() => equipmentGroupTranslationSchema))),
    ],
  }
);
