/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Data5, data5Schema } from './data5';
import { TypeEnum, typeEnumSchema } from './typeEnum';

export interface InstructionBlock {
  id?: string;
  type?: TypeEnum;
  data?: Data5;
}

export const instructionBlockSchema: Schema<InstructionBlock> = object({
  id: ['id', optional(string())],
  type: ['type', optional(typeEnumSchema)],
  data: ['data', optional(lazy(() => data5Schema))],
});
