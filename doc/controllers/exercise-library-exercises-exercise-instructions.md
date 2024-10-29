# Exercise Library Exercises Exercise Instructions

```ts
const exerciseLibraryExercisesExerciseInstructionsController = new ExerciseLibraryExercisesExerciseInstructionsController(client);
```

## Class Name

`ExerciseLibraryExercisesExerciseInstructionsController`

## Methods

* [Get Exercise Instructions](../../doc/controllers/exercise-library-exercises-exercise-instructions.md#get-exercise-instructions)
* [Get Exercise Instruction](../../doc/controllers/exercise-library-exercises-exercise-instructions.md#get-exercise-instruction)
* [Update Exercise Instructions](../../doc/controllers/exercise-library-exercises-exercise-instructions.md#update-exercise-instructions)


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

const localeCodes: string[] = [
  'en-US',
  'es-ES'
];

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseInstructionsController.getExerciseInstructions(
  exerciseCode,
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
| 404 | Exercise instructions not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


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
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseInstructionsController.getExerciseInstruction(
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
  exerciseCode: '',
  localeCode: 'en-US',
  instructionJSON: {
    time: BigInt(1625832000000),
    version: '2.24.3',
  },
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseInstructionsController.updateExerciseInstructions(
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

