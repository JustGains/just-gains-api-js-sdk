# Exercise Metrics

```ts
const exerciseMetricsController = new ExerciseMetricsController(client);
```

## Class Name

`ExerciseMetricsController`

## Methods

* [Get Exercise Metrics](../../doc/controllers/exercise-metrics.md#get-exercise-metrics)
* [Create a New Exercise Metric](../../doc/controllers/exercise-metrics.md#create-a-new-exercise-metric)
* [Get Exercise Metric](../../doc/controllers/exercise-metrics.md#get-exercise-metric)
* [Update an Exercise Metric](../../doc/controllers/exercise-metrics.md#update-an-exercise-metric)
* [Delete an Exercise Metric](../../doc/controllers/exercise-metrics.md#delete-an-exercise-metric)


# Get Exercise Metrics

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseMetrics(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseMetricsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale for the metric names and measurement data |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseMetricsResponse`](../../doc/models/exercise-metrics-response.md)

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
| 400 | Bad request | [`ExerciseMetrics400Error`](../../doc/models/exercise-metrics-400-error.md) |


# Create a New Exercise Metric

```ts
async createANewExerciseMetric(  body: ExerciseMetric,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseMetricsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseMetric`](../../doc/models/exercise-metric.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseMetricsResponse1`](../../doc/models/exercise-metrics-response-1.md)

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
| 400 | Bad request | [`ExerciseMetrics400Error`](../../doc/models/exercise-metrics-400-error.md) |


# Get Exercise Metric

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseMetric(  metricCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseMetricsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metricCode` | `string` | Template, Required | - |
| `localeCode` | `string \| undefined` | Query, Optional | The locale for the metric name and measurement data |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseMetricsResponse1`](../../doc/models/exercise-metrics-response-1.md)

## Example Usage

```ts
const metricCode = 'metricCode4';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseMetricsController.getExerciseMetric(
  metricCode,
  localeCode
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
| 404 | Exercise metric not found | [`ExerciseMetrics404Error`](../../doc/models/exercise-metrics-404-error.md) |


# Update an Exercise Metric

```ts
async updateAnExerciseMetric(  metricCode: string,
  body: ExerciseMetric,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseMetricsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metricCode` | `string` | Template, Required | - |
| `body` | [`ExerciseMetric`](../../doc/models/exercise-metric.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseMetricsResponse1`](../../doc/models/exercise-metrics-response-1.md)

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
| 400 | Bad request | [`ExerciseMetrics400Error`](../../doc/models/exercise-metrics-400-error.md) |
| 404 | Exercise metric not found | [`ExerciseMetrics404Error`](../../doc/models/exercise-metrics-404-error.md) |


# Delete an Exercise Metric

```ts
async deleteAnExerciseMetric(  metricCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseMetricsResponse4>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metricCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseMetricsResponse4`](../../doc/models/exercise-metrics-response-4.md)

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
| 404 | Exercise metric deleted successfully | [`ExerciseMetrics404Error3Error`](../../doc/models/exercise-metrics-404-error-3-error.md) |

