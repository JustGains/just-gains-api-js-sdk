# Status

Verify API status.

```ts
const statusController = new StatusController(client);
```

## Class Name

`StatusController`


# Check Server Alive

Returns a simple message to indicate that the API is working.

:information_source: **Note** This endpoint does not require authentication.

```ts
async checkServerAlive(requestOptions?: RequestOptions): Promise<ApiResponse<Response>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`Response`](../../doc/models/response.md)

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

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`M400Error`](../../doc/models/m400-error.md) |
| 404 | Not found | [`M404Error`](../../doc/models/m404-error.md) |

