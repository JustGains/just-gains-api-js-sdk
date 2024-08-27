/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { InstructionBlock, instructionBlockSchema } from './instructionBlock';

/** JSON object containing the exercise instructions in EditorJS format */
export interface InstructionJSON1 {
  time?: bigint;
  blocks?: InstructionBlock[];
  version?: string;
}

export const instructionJSON1Schema: Schema<InstructionJSON1> = object({
  time: ['time', optional(bigint())],
  blocks: ['blocks', optional(array(lazy(() => instructionBlockSchema)))],
  version: ['version', optional(string())],
});
