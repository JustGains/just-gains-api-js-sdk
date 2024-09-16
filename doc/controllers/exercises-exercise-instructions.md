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
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseInstructionListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve instruction models for |
| `localeCodes` | `string[] \| undefined` | Query, Optional | The array of locales for the instructions (e.g., 'en-US', 'es-ES')<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseInstructionListResponse`](../../doc/models/exercise-instruction-list-response.md)

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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Exercise instructions not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Create New Exercise Instructions

```ts
async createNewExerciseInstructions(  exerciseCode: string,
  body: ExerciseInstruction,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseInstructionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to create instructions for |
| `body` | [`ExerciseInstruction`](../../doc/models/exercise-instruction.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseInstructionResponse`](../../doc/models/exercise-instruction-response.md)

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
| 400 | Bad request | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 401 | Unauthorized | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Get Exercise Instruction

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseInstruction(  exerciseCode: string,
  localeCode: string,
  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseInstructionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve instructions for |
| `localeCode` | `string` | Template, Required | The locale for the instructions (e.g., 'en-US', 'es-ES')<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId that belongs to the instructions being requested |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseInstructionResponse`](../../doc/models/exercise-instruction-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'localeCode2';

const creatorProfileId = 'creatorProfileId8';

try {
  const { result, ...httpResponse } = await exercisesExerciseInstructionsController.getExerciseInstruction(
  exerciseCode,
  localeCode,
  creatorProfileId
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
| 404 | Exercise instructions not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Update Exercise Instructions

```ts
async updateExerciseInstructions(  exerciseCode: string,
  localeCode: string,
  creatorProfileId: string,
  body: ExerciseInstruction,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseInstructionResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code of the instructions to update |
| `localeCode` | `string` | Template, Required | The locale code for the instructions to update<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the creator for the instructions to update |
| `body` | [`ExerciseInstruction`](../../doc/models/exercise-instruction.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseInstructionResponse`](../../doc/models/exercise-instruction-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'localeCode2';

const creatorProfileId = 'creatorProfileId8';

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
  creatorProfileId,
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
| 404 | Exercise instructions not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete Exercise Instructions

```ts
async deleteExerciseInstructions(  exerciseCode: string,
  localeCode: string,
  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code of the instructions to delete |
| `localeCode` | `string` | Template, Required | The locale code for the instructions to delete<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the instructions to delete |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'localeCode2';

const creatorProfileId = 'creatorProfileId8';

try {
  const { result, ...httpResponse } = await exercisesExerciseInstructionsController.deleteExerciseInstructions(
  exerciseCode,
  localeCode,
  creatorProfileId
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
| 401 | Unauthorized | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |
| 404 | Exercise instructions not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

