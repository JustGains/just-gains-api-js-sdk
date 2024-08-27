/**
 * Workout Creator APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { MediaAsset, mediaAssetSchema } from './mediaAsset';
import { Pagination, paginationSchema } from './pagination';

export interface MediaAssetsResponse {
  status: string;
  message: string;
  data?: MediaAsset[];
  pagination?: Pagination;
}

export const mediaAssetsResponseSchema: Schema<MediaAssetsResponse> = object({
  status: ['status', string()],
  message: ['message', string()],
  data: ['data', optional(array(lazy(() => mediaAssetSchema)))],
  pagination: ['pagination', optional(lazy(() => paginationSchema))],
});
