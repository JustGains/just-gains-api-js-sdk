# Common Published Status

```ts
const commonPublishedStatusController = new CommonPublishedStatusController(client);
```

## Class Name

`CommonPublishedStatusController`

## Methods

* [Get All Published Status](../../doc/controllers/common-published-status.md#get-all-published-status)
* [Create a New Published Status](../../doc/controllers/common-published-status.md#create-a-new-published-status)
* [Update a Published Status](../../doc/controllers/common-published-status.md#update-a-published-status)
* [Delete a Published Status](../../doc/controllers/common-published-status.md#delete-a-published-status)
* [Get All Published Status Translations](../../doc/controllers/common-published-status.md#get-all-published-status-translations)
* [Update Published Status Translations](../../doc/controllers/common-published-status.md#update-published-status-translations)


# Get All Published Status

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAllPublishedStatus(  localeCode?: string,
  localeCodes?: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code for translations (e.g., en-US)<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `localeCodes` | `string[] \| undefined` | Query, Optional | The array of locales for the instructions (e.g., 'en-US', 'es-ES')<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusListResponse`](../../doc/models/published-status-list-response.md)

## Example Usage

```ts
const localeCodes: string[] = [
  'en-US',
  'es-ES'
];

try {
  const { result, ...httpResponse } = await commonPublishedStatusController.getAllPublishedStatus(
  undefined,
  localeCodes
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Create a New Published Status

```ts
async createANewPublishedStatus(  body: PublishedStatus,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`PublishedStatus`](../../doc/models/published-status.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const body: PublishedStatus = {
  userRoleAccess: 'ADMIN,USER',
};

try {
  const { result, ...httpResponse } = await commonPublishedStatusController.createANewPublishedStatus(body);
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update a Published Status

```ts
async updateAPublishedStatus(  publishedStatusCode: string,
  body: PublishedStatus,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | **Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`PublishedStatus`](../../doc/models/published-status.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

const body: PublishedStatus = {
  userRoleAccess: 'ADMIN,USER',
};

try {
  const { result, ...httpResponse } = await commonPublishedStatusController.updateAPublishedStatus(
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Published status not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete a Published Status

```ts
async deleteAPublishedStatus(  publishedStatusCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | **Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

try {
  const { result, ...httpResponse } = await commonPublishedStatusController.deleteAPublishedStatus(publishedStatusCode);
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
| 404 | Published status not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get All Published Status Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAllPublishedStatusTranslations(  publishedStatusCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | The unique code of the published status<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusTranslationListResponse`](../../doc/models/published-status-translation-list-response.md)

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

try {
  const { result, ...httpResponse } = await commonPublishedStatusController.getAllPublishedStatusTranslations(publishedStatusCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Published status not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Published Status Translations

```ts
async updatePublishedStatusTranslations(  publishedStatusCode: string,
  body: PublishedStatusTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | The unique code of the published status<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`PublishedStatusTranslation[]`](../../doc/models/published-status-translation.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

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
  const { result, ...httpResponse } = await commonPublishedStatusController.updatePublishedStatusTranslations(
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | Unauthorized | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Published status not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 422 | Unprocessable Entity | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

