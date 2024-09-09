# Media Assets

```ts
const mediaAssetsController = new MediaAssetsController(client);
```

## Class Name

`MediaAssetsController`

## Methods

* [Get Media Assets](../../doc/controllers/media-assets.md#get-media-assets)
* [Upload a New Media Asset](../../doc/controllers/media-assets.md#upload-a-new-media-asset)
* [Get Media Asset](../../doc/controllers/media-assets.md#get-media-asset)
* [Update a Media Asset](../../doc/controllers/media-assets.md#update-a-media-asset)
* [Delete a Media Asset](../../doc/controllers/media-assets.md#delete-a-media-asset)
* [Get Media Asset Detail](../../doc/controllers/media-assets.md#get-media-asset-detail)


# Get Media Assets

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMediaAssets(  page?: number,
  pageSize?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | **Default**: `1` |
| `pageSize` | `number \| undefined` | Query, Optional | **Default**: `20` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetListResponse`](../../doc/models/media-asset-list-response.md)

## Example Usage

```ts
const page = 1;

const pageSize = 20;

try {
  const { result, ...httpResponse } = await mediaAssetsController.getMediaAssets(
  page,
  pageSize
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Upload a New Media Asset

```ts
async uploadANewMediaAsset(  description?: string,
  file?: FileWrapper,
  mediaType?: string,
  uploadDirectory?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `description` | `string \| undefined` | Form, Optional | - |
| `file` | `FileWrapper \| undefined` | Form, Optional | - |
| `mediaType` | `string \| undefined` | Form, Optional | **Constraints**: *Pattern*: `^[a-z]+/[a-z]+$` |
| `uploadDirectory` | `string \| undefined` | Form, Optional | Optional. Specify a custom upload directory. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetResponse`](../../doc/models/media-asset-response.md)

## Example Usage

```ts
const mediaType = 'image/jpeg';

try {
  const { result, ...httpResponse } = await mediaAssetsController.uploadANewMediaAsset(
  undefined,
  undefined,
  mediaType
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Media Asset

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMediaAsset(  mediaAssetId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetResponse`](../../doc/models/media-asset-response.md)

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

try {
  const { result, ...httpResponse } = await mediaAssetsController.getMediaAsset(mediaAssetId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Media asset not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update a Media Asset

```ts
async updateAMediaAsset(  body: MediaAsset,
  mediaAssetId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MediaAsset`](../../doc/models/media-asset.md) | Body, Required | - |
| `mediaAssetId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetResponse`](../../doc/models/media-asset-response.md)

## Example Usage

```ts
const body: MediaAsset = {
  mediaId: '7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b',
  fileName: 'workout_routine.mp4',
  filePath: 'media/videos/routines/workout_routine.mp4',
  fileSize: 15728640,
  fileFormat: 'video/mp4',
  fileUrl: 'https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4',
  description: 'High-intensity interval training (HIIT) workout routine for beginners',
};

const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

try {
  const { result, ...httpResponse } = await mediaAssetsController.updateAMediaAsset(
  body,
  mediaAssetId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Media asset not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete a Media Asset

```ts
async deleteAMediaAsset(  mediaAssetId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

try {
  const { result, ...httpResponse } = await mediaAssetsController.deleteAMediaAsset(mediaAssetId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Media asset not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Media Asset Detail

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMediaAssetDetail(  fileName: string,
  mediaAssetId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `fileName` | `string` | Template, Required | - |
| `mediaAssetId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const fileName = 'fileName4';

const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

try {
  const { result, ...httpResponse } = await mediaAssetsController.getMediaAssetDetail(
  fileName,
  mediaAssetId
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 404 | Media asset not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

