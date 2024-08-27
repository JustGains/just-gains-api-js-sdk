/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, number, object, optional, Schema, string } from '../schema';

/** Represents a single view or interaction with a program. */
export interface ProgramView {
  /** Unique identifier for this program view. */
  programViewId: number;
  /** Identifier of the viewed program. */
  programId: number;
  /** Identifier of the user who viewed the program, if authenticated. */
  userId?: string;
  /** Unique identifier for the user's session. */
  sessionId: string;
  /** Timestamp of when the program was viewed. */
  viewedAt: string;
  /** Duration of the view in seconds. */
  viewDuration: number;
  /** IP address of the viewer. */
  ipAddress: string;
  /** User agent string of the viewer's browser. */
  userAgent: string;
  /** Indicates whether the viewer was authenticated during this view. */
  isAuthenticated: boolean;
}

export const programViewSchema: Schema<ProgramView> = object({
  programViewId: ['programViewId', number()],
  programId: ['programId', number()],
  userId: ['userId', optional(string())],
  sessionId: ['sessionId', string()],
  viewedAt: ['viewedAt', string()],
  viewDuration: ['viewDuration', number()],
  ipAddress: ['ipAddress', string()],
  userAgent: ['userAgent', string()],
  isAuthenticated: ['isAuthenticated', boolean()],
});
