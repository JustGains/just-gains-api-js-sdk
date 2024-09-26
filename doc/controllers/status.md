# Status

Verify API status.

```ts
const statusController = new StatusController(client);
```

## Class Name

`StatusController`

## Methods

* [Check Server Alive](../../doc/controllers/status.md#check-server-alive)
* [Test Unauthorized](../../doc/controllers/status.md#test-unauthorized)


# Check Server Alive

Returns a simple message to indicate that the API is working.

:information_source: **Note** This endpoint does not require authentication.

```ts
async checkServerAlive(requestOptions?: RequestOptions): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await statusController.checkServerAlive();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
"All is working!"
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 404 | Not found | `ApiError` |


# Test Unauthorized

Returns a JSON response simulating an unauthorized access attempt.

:information_source: **Note** This endpoint does not require authentication.

```ts
async testUnauthorized(requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await statusController.testUnauthorized();
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
| 401 | Unauthorized response | [`JustGainsResponseError`](../../doc/models/just-gains-response-error.md) |

