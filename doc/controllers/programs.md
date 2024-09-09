# Programs

Core program management functionality.

```ts
const programsController = new ProgramsController(client);
```

## Class Name

`ProgramsController`

## Methods

* [Get Programs](../../doc/controllers/programs.md#get-programs)
* [Create Program](../../doc/controllers/programs.md#create-program)
* [Get Program](../../doc/controllers/programs.md#get-program)
* [Update Program](../../doc/controllers/programs.md#update-program)
* [Delete Program](../../doc/controllers/programs.md#delete-program)


# Get Programs

:information_source: **Note** This endpoint does not require authentication.

```ts
async getPrograms(  page?: number,
  pageSize?: number,
  sortBy?: string,
  sortOrder?: SortOrderEnum,
  publishStatusCode?: string,
  userId?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ProgramListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | **Default**: `1`<br>**Constraints**: `>= 1` |
| `pageSize` | `number \| undefined` | Query, Optional | **Default**: `20`<br>**Constraints**: `>= 1`, `<= 100` |
| `sortBy` | `string \| undefined` | Query, Optional | - |
| `sortOrder` | [`SortOrderEnum \| undefined`](../../doc/models/sort-order-enum.md) | Query, Optional | **Default**: `SortOrderEnum.Desc` |
| `publishStatusCode` | `string \| undefined` | Query, Optional | - |
| `userId` | `string \| undefined` | Query, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProgramListResponse`](../../doc/models/program-list-response.md)

## Example Usage

```ts
const page = 1;

const pageSize = 20;

const sortOrder = SortOrderEnum.Desc;

try {
  const { result, ...httpResponse } = await programsController.getPrograms(
  page,
  pageSize,
  undefined,
  sortOrder
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


# Create Program

```ts
async createProgram(  body: Program,
requestOptions?: RequestOptions): Promise<ApiResponse<ProgramResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Program`](../../doc/models/program.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProgramResponse`](../../doc/models/program-response.md)

## Example Usage

```ts
const body: Program = {
  programId: 1001,
  userId: '123e4567-e89b-12d3-a456-426614174000',
  programName: '12-Week Strength Builder',
  programDescription: 'A comprehensive strength training program designed for intermediate lifters looking to increase their overall strength in major compound lifts.',
  publishStatusCode: 'PUBLISHED',
  createdAt: '07/01/2023 09:00:00',
  updatedAt: '07/15/2023 14:30:00',
  deletedAt: '08/01/2023 10:00:00',
  deletedBy: '987e6543-e21b-12d3-a456-426614174000',
};

try {
  const { result, ...httpResponse } = await programsController.createProgram(body);
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


# Get Program

:information_source: **Note** This endpoint does not require authentication.

```ts
async getProgram(  programId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<ProgramResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProgramResponse`](../../doc/models/program-response.md)

## Example Usage

```ts
const programId = 126;

try {
  const { result, ...httpResponse } = await programsController.getProgram(programId);
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
| 404 | Program not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Program

```ts
async updateProgram(  programId: number,
  body: Program,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `number` | Template, Required | - |
| `body` | [`Program`](../../doc/models/program.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const programId = 126;

const body: Program = {
  programId: 1001,
  userId: '123e4567-e89b-12d3-a456-426614174000',
  programName: '12-Week Strength Builder',
  programDescription: 'A comprehensive strength training program designed for intermediate lifters looking to increase their overall strength in major compound lifts.',
  publishStatusCode: 'PUBLISHED',
  createdAt: '07/01/2023 09:00:00',
  updatedAt: '07/15/2023 14:30:00',
  deletedAt: '08/01/2023 10:00:00',
  deletedBy: '987e6543-e21b-12d3-a456-426614174000',
};

try {
  const { result, ...httpResponse } = await programsController.updateProgram(
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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Program not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete Program

```ts
async deleteProgram(  programId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const programId = 126;

try {
  const { result, ...httpResponse } = await programsController.deleteProgram(programId);
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
| 404 | Program not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

