# Common Published Status

```ts
const commonPublishedStatusController = new CommonPublishedStatusController(client);
```

## Class Name

`CommonPublishedStatusController`

## Methods

* [Get All Published Status](../../doc/controllers/common-published-status.md#get-all-published-status)
* [Create Update a Published Status](../../doc/controllers/common-published-status.md#create-update-a-published-status)
* [Delete a Published Status](../../doc/controllers/common-published-status.md#delete-a-published-status)


# Get All Published Status

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAllPublishedStatus(requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusListResponse`](../../doc/models/published-status-list-response.md)

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await commonPublishedStatusController.getAllPublishedStatus();
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


# Create Update a Published Status

```ts
async createUpdateAPublishedStatus(  publishedStatusCode: string,
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
  const { result, ...httpResponse } = await commonPublishedStatusController.createUpdateAPublishedStatus(
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

