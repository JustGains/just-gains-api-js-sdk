/**
 * JustGains-APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import { MediaAsset, mediaAssetSchema } from './mediaAsset';

export interface MediaAssetResponse {
  /** The status of the response, corresponding to standard HTTP status codes. */
  status: string;
  /** A human-readable message describing the result of the operation. */
  message: string;
  data: MediaAsset;
}

export const mediaAssetResponseSchema: Schema<MediaAssetResponse> = object({
  status: ['status', string()],
  message: ['message', string()],
  data: ['data', lazy(() => mediaAssetSchema)],
});
