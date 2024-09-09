# Programs Program Weeks

```ts
const programsProgramWeeksController = new ProgramsProgramWeeksController(client);
```

## Class Name

`ProgramsProgramWeeksController`

## Methods

* [Get Weeks for Program](../../doc/controllers/programs-program-weeks.md#get-weeks-for-program)
* [Add Week to Program](../../doc/controllers/programs-program-weeks.md#add-week-to-program)


# Get Weeks for Program

:information_source: **Note** This endpoint does not require authentication.

```ts
async getWeeksForProgram(  programId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<ProgramsWeeksResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProgramsWeeksResponse`](../../doc/models/programs-weeks-response.md)

## Example Usage

```ts
const programId = 126;

try {
  const { result, ...httpResponse } = await programsProgramWeeksController.getWeeksForProgram(programId);
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


# Add Week to Program

```ts
async addWeekToProgram(  body: Week,
  programId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<WeekResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Week`](../../doc/models/week.md) | Body, Required | - |
| `programId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WeekResponse`](../../doc/models/week-response.md)

## Example Usage

```ts
const body: Week = {
  weekId: 1234,
  userId: '123e4567-e89b-12d3-a456-426614174000',
  weekTitle: 'Week 1: Foundation Building',
  weekContent: '{"monday": {"workoutId": 101, "notes": "Focus on form"}, "wednesday": {"workoutId": 102, "notes": "Increase weight if possible"}, "friday": {"workoutId": 103, "notes": "Cool down properly"}}',
  createdAt: '07/21/2023 15:30:00',
  updatedAt: '07/22/2023 10:15:00',
  deletedAt: '08/01/2023 09:00:00',
  deletedBy: '987e6543-e21b-12d3-a456-426614174000',
};

const programId = 126;

try {
  const { result, ...httpResponse } = await programsProgramWeeksController.addWeekToProgram(
  body,
  programId
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

