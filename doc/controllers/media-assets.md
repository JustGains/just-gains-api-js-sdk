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
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | - |
| `pageSize` | `number \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetsResponse`](../../doc/models/media-assets-response.md)

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
async uploadANewMediaAsset(  file?: FileWrapper,
  mediaType?: string,
  description?: string,
  uploadDirectory?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `file` | `FileWrapper \| undefined` | Form, Optional | - |
| `mediaType` | `string \| undefined` | Form, Optional | - |
| `description` | `string \| undefined` | Form, Optional | - |
| `uploadDirectory` | `string \| undefined` | Form, Optional | Optional. Specify a custom upload directory. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetsResponse1`](../../doc/models/media-assets-response-1.md)

## Example Usage

```ts
const mediaType = 'image/jpeg';

try {
  const { result, ...httpResponse } = await mediaAssetsController.uploadANewMediaAsset(
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
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetsResponse1`](../../doc/models/media-assets-response-1.md)

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
| 404 | Media asset not found | [`MediaAssets404Error`](../../doc/models/media-assets-404-error.md) |


# Update a Media Asset

```ts
async updateAMediaAsset(  mediaAssetId: string,
  body: MediaAsset,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `body` | [`MediaAsset`](../../doc/models/media-asset.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetsResponse1`](../../doc/models/media-assets-response-1.md)

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

const body: MediaAsset = {
  mediaId: '7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b',
  fileName: 'workout_routine.mp4',
  filePath: 'media/videos/routines/workout_routine.mp4',
  fileSize: 15728640,
  fileFormat: 'video/mp4',
  fileUrl: 'https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4',
  description: 'High-intensity interval training (HIIT) workout routine for beginners',
};

try {
  const { result, ...httpResponse } = await mediaAssetsController.updateAMediaAsset(
  mediaAssetId,
  body
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
| 404 | Media asset not found | [`MediaAssets404Error`](../../doc/models/media-assets-404-error.md) |


# Delete a Media Asset

```ts
async deleteAMediaAsset(  mediaAssetId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetsResponse4>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetsResponse4`](../../doc/models/media-assets-response-4.md)

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
| 404 | Media asset not found | [`MediaAssets404Error`](../../doc/models/media-assets-404-error.md) |


# Get Media Asset Detail

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMediaAssetDetail(  mediaAssetId: string,
  fileName: string,
requestOptions?: RequestOptions): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `fileName` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

const fileName = 'fileName4';

try {
  const { result, ...httpResponse } = await mediaAssetsController.getMediaAssetDetail(
  mediaAssetId,
  fileName
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
| 404 | Media asset not found | [`MediaAssets404Error`](../../doc/models/media-assets-404-error.md) |

