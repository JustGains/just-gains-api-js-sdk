# Programs Program Views

```ts
const programsProgramViewsController = new ProgramsProgramViewsController(client);
```

## Class Name

`ProgramsProgramViewsController`


# Add View Program

```ts
async addViewProgram(  programId: number,
  body: ProgramView,
requestOptions?: RequestOptions): Promise<ApiResponse<ProgramsViewsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `number` | Template, Required | - |
| `body` | [`ProgramView`](../../doc/models/program-view.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProgramsViewsResponse`](../../doc/models/programs-views-response.md)

## Example Usage

```ts
const programId = 126;

const body: ProgramView = {
  programViewId: 10001,
  programId: 1001,
  sessionId: 'sess_abc123def456',
  viewedAt: '07/25/2023 15:30:00',
  viewDuration: 300,
  ipAddress: '192.168.1.1',
  userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
  isAuthenticated: true,
  userId: '123e4567-e89b-12d3-a456-426614174000',
};

try {
  const { result, ...httpResponse } = await programsProgramViewsController.addViewProgram(
  programId,
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
| 400 | Bad request | [`ProgramsViews400Error`](../../doc/models/programs-views-400-error.md) |
| 404 | Program not found | [`ProgramsViews404Error`](../../doc/models/programs-views-404-error.md) |

