# Published Status

```ts
const publishedStatusController = new PublishedStatusController(client);
```

## Class Name

`PublishedStatusController`

## Methods

* [Get All Published Status](../../doc/controllers/published-status.md#get-all-published-status)
* [Create a New Published Status](../../doc/controllers/published-status.md#create-a-new-published-status)
* [Get Published Status](../../doc/controllers/published-status.md#get-published-status)
* [Update a Published Status](../../doc/controllers/published-status.md#update-a-published-status)
* [Delete a Published Status](../../doc/controllers/published-status.md#delete-a-published-status)
* [Get All Published Status Translations](../../doc/controllers/published-status.md#get-all-published-status-translations)
* [Update Published Status Translations](../../doc/controllers/published-status.md#update-published-status-translations)


# Get All Published Status

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAllPublishedStatus(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code for translations (e.g., en-US) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusResponse`](../../doc/models/published-status-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await publishedStatusController.getAllPublishedStatus();
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
| 400 | Bad request | [`PublishedStatus400Error`](../../doc/models/published-status-400-error.md) |


# Create a New Published Status

```ts
async createANewPublishedStatus(  body: PublishedStatus,
requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PublishedStatus`](../../doc/models/published-status.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusResponse1`](../../doc/models/published-status-response-1.md)

## Example Usage

```ts
const body: PublishedStatus = {
  publishedStatusCode: 'PUBLISHED',
  userRoleAccess: 'ADMIN,USER',
  publishedStatusName: 'Published',
};

try {
  const { result, ...httpResponse } = await publishedStatusController.createANewPublishedStatus(body);
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
| 400 | Bad request | [`PublishedStatus400Error`](../../doc/models/published-status-400-error.md) |


# Get Published Status

:information_source: **Note** This endpoint does not require authentication.

```ts
async getPublishedStatus(  publishedStatusCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | - |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code for translations (e.g., en-US) |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusResponse1`](../../doc/models/published-status-response-1.md)

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

try {
  const { result, ...httpResponse } = await publishedStatusController.getPublishedStatus(publishedStatusCode);
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
| 404 | Published status not found | [`PublishedStatus404Error`](../../doc/models/published-status-404-error.md) |


# Update a Published Status

```ts
async updateAPublishedStatus(  publishedStatusCode: string,
  body: PublishedStatus,
requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | - |
| `body` | [`PublishedStatus`](../../doc/models/published-status.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusResponse1`](../../doc/models/published-status-response-1.md)

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

const body: PublishedStatus = {
  publishedStatusCode: 'PUBLISHED',
  userRoleAccess: 'ADMIN,USER',
  publishedStatusName: 'Published',
};

try {
  const { result, ...httpResponse } = await publishedStatusController.updateAPublishedStatus(
  publishedStatusCode,
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
| 400 | Bad request | [`PublishedStatus400Error`](../../doc/models/published-status-400-error.md) |
| 404 | Published status not found | [`PublishedStatus404Error`](../../doc/models/published-status-404-error.md) |


# Delete a Published Status

```ts
async deleteAPublishedStatus(  publishedStatusCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusResponse4>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusResponse4`](../../doc/models/published-status-response-4.md)

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

try {
  const { result, ...httpResponse } = await publishedStatusController.deleteAPublishedStatus(publishedStatusCode);
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
| 404 | Published status not found | [`PublishedStatus404Error`](../../doc/models/published-status-404-error.md) |


# Get All Published Status Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAllPublishedStatusTranslations(  publishedStatusCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusTranslationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | The unique code of the published status |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusTranslationsResponse`](../../doc/models/published-status-translations-response.md)

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

try {
  const { result, ...httpResponse } = await publishedStatusController.getAllPublishedStatusTranslations(publishedStatusCode);
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
| 400 | Bad request | [`PublishedStatusTranslations400Error`](../../doc/models/published-status-translations-400-error.md) |
| 404 | Published status not found | [`PublishedStatusTranslations404Error`](../../doc/models/published-status-translations-404-error.md) |


# Update Published Status Translations

```ts
async updatePublishedStatusTranslations(  publishedStatusCode: string,
  body: PublishedStatusTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusTranslationsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | The unique code of the published status |
| `body` | [`PublishedStatusTranslation[]`](../../doc/models/published-status-translation.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusTranslationsResponse1`](../../doc/models/published-status-translations-response-1.md)

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

const body: PublishedStatusTranslation[] = [
  {
    localeCode: 'en-US',
    publishedStatusName: 'Published',
  }
];

try {
  const { result, ...httpResponse } = await publishedStatusController.updatePublishedStatusTranslations(
  publishedStatusCode,
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
| 400 | Bad request | [`PublishedStatusTranslations400Error`](../../doc/models/published-status-translations-400-error.md) |
| 401 | Unauthorized | [`PublishedStatusTranslations401Error`](../../doc/models/published-status-translations-401-error.md) |
| 404 | Published status not found | [`PublishedStatusTranslations404Error`](../../doc/models/published-status-translations-404-error.md) |
| 422 | Unprocessable Entity | [`PublishedStatusTranslations422Error`](../../doc/models/published-status-translations-422-error.md) |

