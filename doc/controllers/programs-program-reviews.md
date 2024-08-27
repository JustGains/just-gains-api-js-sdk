# Programs Program Reviews

```ts
const programsProgramReviewsController = new ProgramsProgramReviewsController(client);
```

## Class Name

`ProgramsProgramReviewsController`

## Methods

* [Get Reviews Program](../../doc/controllers/programs-program-reviews.md#get-reviews-program)
* [Add Review Program](../../doc/controllers/programs-program-reviews.md#add-review-program)


# Get Reviews Program

:information_source: **Note** This endpoint does not require authentication.

```ts
async getReviewsProgram(  programId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<ProgramsReviewsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `number` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProgramsReviewsResponse`](../../doc/models/programs-reviews-response.md)

## Example Usage

```ts
const programId = 126;

try {
  const { result, ...httpResponse } = await programsProgramReviewsController.getReviewsProgram(programId);
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
| 404 | Program not found | [`ProgramsReviews404Error`](../../doc/models/programs-reviews-404-error.md) |


# Add Review Program

```ts
async addReviewProgram(  programId: number,
  body: ProgramReview,
requestOptions?: RequestOptions): Promise<ApiResponse<ProgramsReviewsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `number` | Template, Required | - |
| `body` | [`ProgramReview`](../../doc/models/program-review.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ProgramsReviewsResponse1`](../../doc/models/programs-reviews-response-1.md)

## Example Usage

```ts
const programId = 126;

const body: ProgramReview = {
  reviewId: 20001,
  programId: 1001,
  userId: '123e4567-e89b-12d3-a456-426614174000',
  rating: 5,
  createdAt: '07/28/2023 18:45:00',
  reviewText: 'This program significantly improved my strength. Highly recommended for intermediate lifters!',
};

try {
  const { result, ...httpResponse } = await programsProgramReviewsController.addReviewProgram(
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
| 400 | Bad request | [`ProgramsReviews400Error`](../../doc/models/programs-reviews-400-error.md) |
| 404 | Program not found | [`ProgramsReviews404Error`](../../doc/models/programs-reviews-404-error.md) |

