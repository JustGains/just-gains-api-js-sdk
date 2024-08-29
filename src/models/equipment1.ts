/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { MediaAsset, mediaAssetSchema } from './mediaAsset';

/** The data returned by the operation. */
export interface Equipment1 {
  /** A unique identifier for the equipment. */
  equipmentCode: string;
  /** The name of the equipment, localized. */
  equipmentName?: string;
  equipmentThumbnail?: MediaAsset;
  /** A list of equipment groups this equipment belongs to. */
  equipmentEquipmentGroups?: string[] | null;
}

export const equipment1Schema: Schema<Equipment1> = object({
  equipmentCode: ['equipmentCode', string()],
  equipmentName: ['equipmentName', optional(string())],
  equipmentThumbnail: [
    'equipmentThumbnail',
    optional(lazy(() => mediaAssetSchema)),
  ],
  equipmentEquipmentGroups: [
    'equipmentEquipmentGroups',
    optional(nullable(array(string()))),
  ],
});
