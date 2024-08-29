
# Getting Started with JustGains-API

## Introduction

API for managing workout programs, exercises, and user accounts. Includes endpoints for creating, updating, and deleting workouts, exercises, and user profiles, as well as managing exercise instructions, videos, and equipment data.

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install just-gains-api-sdk@1.0.1
```

For additional package details, see the [Npm page for the just-gains-api-sdk@1.0.1 npm](https://www.npmjs.com/package/just-gains-api-sdk/v/1.0.1).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Testing`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `bearerAuthCredentials` | [`BearerAuthCredentials`](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/auth/oauth-2-bearer-token.md) | The credential object for bearerAuth |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  bearerAuthCredentials: {
    accessToken: 'AccessToken'
  },
  timeout: 0,
  environment: Environment.Testing,
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| production | - |
| testing | **Default** |
| mock | - |

## Authorization

This API uses the following authentication schemes.

* [`bearerAuth (OAuth 2 Bearer token)`](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/auth/oauth-2-bearer-token.md)

## API Errors

Here is the list of errors that the API might throw.

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| Default | 🥲 | [`JustGainsErrorResponseError`](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/models/just-gains-error-response-error.md) |

## List of APIs

* [Users Creator Profiles](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/users-creator-profiles.md)
* [Exercises Exercise Instructions](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/exercises-exercise-instructions.md)
* [Exercises Exercise Videos](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/exercises-exercise-videos.md)
* [Muscles Muscle Groups](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/muscles-muscle-groups.md)
* [Equipment Equipment Groups](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/equipment-equipment-groups.md)
* [Workouts Workout Data](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/workouts-workout-data.md)
* [Exercise Drafts](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/exercise-drafts.md)
* [Exercise Categories](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/exercise-categories.md)
* [Programs Program Weeks](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/programs-program-weeks.md)
* [Programs Program Analytics](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/programs-program-analytics.md)
* [Authentication New](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/authentication-new.md)
* [User Management](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/user-management.md)
* [Media Assets](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/media-assets.md)
* [Published Status](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/published-status.md)
* [Exercise Metrics](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/exercise-metrics.md)
* [Programs Program Views](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/programs-program-views.md)
* [Programs Program Reviews](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/programs-program-reviews.md)
* [Users](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/users.md)
* [Exercises](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/exercises.md)
* [Muscles](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/muscles.md)
* [Equipment](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/equipment.md)
* [Workouts](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/workouts.md)
* [Programs](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/programs.md)
* [Status](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/status.md)
* [Locales](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/controllers/locales.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/api-response.md)
* [ApiError](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/1.0.1/doc/api-error.md)

