/**
 * JustGains-APILib
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

export interface InstructionJSON {
  time?: bigint;
  blocks?: InstructionBlock[];
  version?: string;
}

export const instructionJSONSchema: Schema<InstructionJSON> = object({
  time: ['time', optional(bigint())],
  blocks: ['blocks', optional(array(lazy(() => instructionBlockSchema)))],
  version: ['version', optional(string())],
});
