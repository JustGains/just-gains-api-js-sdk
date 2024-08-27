# Exercises Exercise Instructions

```ts
const exercisesExerciseInstructionsController = new ExercisesExerciseInstructionsController(client);
```

## Class Name

`ExercisesExerciseInstructionsController`

## Methods

* [Get Exercise Instructions](../../doc/controllers/exercises-exercise-instructions.md#get-exercise-instructions)
* [Create New Exercise Instructions](../../doc/controllers/exercises-exercise-instructions.md#create-new-exercise-instructions)
* [Get Exercise Instruction](../../doc/controllers/exercises-exercise-instructions.md#get-exercise-instruction)
* [Update Exercise Instructions](../../doc/controllers/exercises-exercise-instructions.md#update-exercise-instructions)
* [Delete Exercise Instructions](../../doc/controllers/exercises-exercise-instructions.md#delete-exercise-instructions)


# Get Exercise Instructions

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseInstructions(  exerciseCode: string,
  localeCodes?: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<ExercisesInstructionsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve instruction models for |
| `localeCodes` | `string[] \| undefined` | Query, Optional | The array of locales for the instructions (e.g., 'en-US', 'es-ES') |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExercisesInstructionsResponse`](../../doc/models/exercises-instructions-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exercisesExerciseInstructionsController.getExerciseInstructions(exerciseCode);
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
| 400 | Bad request | [`ExercisesInstructions400Error`](../../doc/models/exercises-instructions-400-error.md) |
| 404 | Exercise instructions not found | [`ExercisesInstructions404Error`](../../doc/models/exercises-instructions-404-error.md) |


# Create New Exercise Instructions

```ts
async createNewExerciseInstructions(  exerciseCode: string,
  body: ExerciseInstruction,
requestOptions?: RequestOptions): Promise<ApiResponse<ExercisesInstructionsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to create instructions for |
| `body` | [`ExerciseInstruction`](../../doc/models/exercise-instruction.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExercisesInstructionsResponse1`](../../doc/models/exercises-instructions-response-1.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const body: ExerciseInstruction = {
  exerciseCode: 'BARBELL-BENCH-PRESS',
  localeCode: 'en-US',
  instructionJSON: {
    time: BigInt(1625832000000),
    version: '2.24.3',
  },
  userId: '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1',
};

try {
  const { result, ...httpResponse } = await exercisesExerciseInstructionsController.createNewExerciseInstructions(
  exerciseCode,
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
| 400 | Bad request | [`ExercisesInstructions400Error`](../../doc/models/exercises-instructions-400-error.md) |
| 401 | Unauthorized | [`ExercisesInstructions401Error`](../../doc/models/exercises-instructions-401-error.md) |


# Get Exercise Instruction

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseInstruction(  exerciseCode: string,
  localeCode: string,
  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExercisesInstructionsUserIdResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve instructions for |
| `localeCode` | `string` | Template, Required | The locale for the instructions (e.g., 'en-US', 'es-ES') |
| `userId` | `string` | Template, Required | The UserID that belongs to the instructions being requested |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExercisesInstructionsUserIdResponse`](../../doc/models/exercises-instructions-user-id-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'localeCode2';

const userId = 'userId0';

try {
  const { result, ...httpResponse } = await exercisesExerciseInstructionsController.getExerciseInstruction(
  exerciseCode,
  localeCode,
  userId
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
| 400 | Bad request | [`ExercisesInstructionsUserId400Error`](../../doc/models/exercises-instructions-user-id-400-error.md) |
| 404 | Exercise instructions not found | [`ExercisesInstructionsUserId404Error`](../../doc/models/exercises-instructions-user-id-404-error.md) |


# Update Exercise Instructions

```ts
async updateExerciseInstructions(  exerciseCode: string,
  localeCode: string,
  userId: string,
  body: ExerciseInstruction,
requestOptions?: RequestOptions): Promise<ApiResponse<ExercisesInstructionsUserIdResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code of the instructions to update |
| `localeCode` | `string` | Template, Required | The locale code for the instructions to update |
| `userId` | `string` | Template, Required | The userId of the creator for the instructions to update |
| `body` | [`ExerciseInstruction`](../../doc/models/exercise-instruction.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExercisesInstructionsUserIdResponse`](../../doc/models/exercises-instructions-user-id-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'localeCode2';

const userId = 'userId0';

const body: ExerciseInstruction = {
  exerciseCode: 'BARBELL-BENCH-PRESS',
  localeCode: 'en-US',
  instructionJSON: {
    time: BigInt(1625832000000),
    version: '2.24.3',
  },
  userId: '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1',
};

try {
  const { result, ...httpResponse } = await exercisesExerciseInstructionsController.updateExerciseInstructions(
  exerciseCode,
  localeCode,
  userId,
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
| 400 | Bad request | [`ExercisesInstructionsUserId400Error`](../../doc/models/exercises-instructions-user-id-400-error.md) |
| 401 | Unauthorized | [`ExercisesInstructionsUserId401Error`](../../doc/models/exercises-instructions-user-id-401-error.md) |
| 404 | Exercise instructions not found | [`ExercisesInstructionsUserId404Error`](../../doc/models/exercises-instructions-user-id-404-error.md) |


# Delete Exercise Instructions

```ts
async deleteExerciseInstructions(  exerciseCode: string,
  localeCode: string,
  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExercisesInstructionsUserIdResponse2>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code of the instructions to delete |
| `localeCode` | `string` | Template, Required | The locale code for the instructions to delete |
| `userId` | `string` | Template, Required | The user ID of the instructions to delete |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExercisesInstructionsUserIdResponse2`](../../doc/models/exercises-instructions-user-id-response-2.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'localeCode2';

const userId = 'userId0';

try {
  const { result, ...httpResponse } = await exercisesExerciseInstructionsController.deleteExerciseInstructions(
  exerciseCode,
  localeCode,
  userId
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
| 401 | Unauthorized | [`ExercisesInstructionsUserId401Error`](../../doc/models/exercises-instructions-user-id-401-error.md) |
| 404 | Exercise instructions not found | [`ExercisesInstructionsUserId404Error`](../../doc/models/exercises-instructions-user-id-404-error.md) |

