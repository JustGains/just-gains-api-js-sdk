# Exercise Metrics

```ts
const exerciseMetricsController = new ExerciseMetricsController(client);
```

## Class Name

`ExerciseMetricsController`

## Methods

* [Get Exercise Metrics](../../doc/controllers/exercise-metrics.md#get-exercise-metrics)
* [Create a New Exercise Metric](../../doc/controllers/exercise-metrics.md#create-a-new-exercise-metric)
* [Update an Exercise Metric](../../doc/controllers/exercise-metrics.md#update-an-exercise-metric)
* [Delete an Exercise Metric](../../doc/controllers/exercise-metrics.md#delete-an-exercise-metric)


# Get Exercise Metrics

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseMetrics(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseMetricListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale for the metric names and measurement data<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseMetricListResponse`](../../doc/models/exercise-metric-list-response.md)

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseMetricsController.getExerciseMetrics(localeCode);
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


# Create a New Exercise Metric

```ts
async createANewExerciseMetric(  body: ExerciseMetric,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseMetric`](../../doc/models/exercise-metric.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`](../../doc/models/just-gains-basic-response.md)

## Example Usage

```ts
const body: ExerciseMetric = {
  exerciseMetricCode: 'WEIGHT',
};

try {
  const { result, ...httpResponse } = await exerciseMetricsController.createANewExerciseMetric(body);
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


# Update an Exercise Metric

```ts
async updateAnExerciseMetric(  metricCode: string,
  body: ExerciseMetric,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metricCode` | `string` | Template, Required | - |
| `body` | [`ExerciseMetric`](../../doc/models/exercise-metric.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const metricCode = 'metricCode4';

const body: ExerciseMetric = {
  exerciseMetricCode: 'WEIGHT',
};

try {
  const { result, ...httpResponse } = await exerciseMetricsController.updateAnExerciseMetric(
  metricCode,
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
| 404 | Exercise metric not found | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |


# Delete an Exercise Metric

```ts
async deleteAnExerciseMetric(  metricCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metricCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`](../../doc/models/just-gains-response.md)

## Example Usage

```ts
const metricCode = 'metricCode4';

try {
  const { result, ...httpResponse } = await exerciseMetricsController.deleteAnExerciseMetric(metricCode);
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
| 404 | Exercise metric deleted successfully | [`JustGainsErrorResponseError`](../../doc/models/just-gains-error-response-error.md) |

