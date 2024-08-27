/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** Thumbnail image representing the week. */
export interface WeekThumbnail {
  /** Unique identifier for the media element. */
  mediaId: string;
  /** The name of the file, which may be useful for generating URLs or simple validations. */
  fileName: string;
  /** The relative path to the file within the storage system, useful for constructing URLs. */
  filePath: string;
  /** The URL to the media file, which may be useful for embedding or downloading. */
  fileUrl?: string;
  /** File size in bytes */
  fileSize: number;
  /** File format, extension */
  fileFormat: string;
  /** Description of the media element */
  description?: string;
}

export const weekThumbnailSchema: Schema<WeekThumbnail> = object({
  mediaId: ['mediaId', string()],
  fileName: ['fileName', string()],
  filePath: ['filePath', string()],
  fileUrl: ['fileUrl', optional(string())],
  fileSize: ['fileSize', number()],
  fileFormat: ['fileFormat', string()],
  description: ['description', optional(string())],
});
