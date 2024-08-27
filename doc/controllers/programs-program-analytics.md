# Programs Program Analytics

```ts
const programsProgramAnalyticsController = new ProgramsProgramAnalyticsController(client);
```

## Class Name

`ProgramsProgramAnalyticsController`


# Get Anlytics Program

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAnlyticsProgram(  programId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<ProgramsAnalyticsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProgramsAnalyticsResponse`](../../doc/models/programs-analytics-response.md)

## Example Usage

```ts
const programId = 126;

try {
  const { result, ...httpResponse } = await programsProgramAnalyticsController.getAnlyticsProgram(programId);
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
| 404 | Program not found | [`ProgramsAnalytics404Error`](../../doc/models/programs-analytics-404-error.md) |

