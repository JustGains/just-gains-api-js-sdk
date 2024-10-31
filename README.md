
# Getting Started with JustGains-API

## Introduction

API for managing workout programs, exercises, and user accounts. Includes endpoints for creating, updating, and deleting workouts, exercises, and user profiles, as well as managing exercise instructions, videos, and equipment data.

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install just-gains-api-sdk@0.1.1
```

For additional package details, see the [Npm page for the just-gains-api-sdk@0.1.1 npm](https://www.npmjs.com/package/just-gains-api-sdk/v/0.1.1).

## Test the SDK

To validate the functionality of this SDK, you can execute all tests located in the `test` directory. This SDK utilizes `Jest` as both the testing framework and test runner.

To run the tests, navigate to the root directory of the SDK and execute the following command:

```bash
npm run test
```

Or you can also run tests with coverage report:

```bash
npm run test:coverage
```

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Testing`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `bearerAuthCredentials` | [`BearerAuthCredentials`](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/auth/oauth-2-bearer-token.md) | The credential object for bearerAuth |
| `userRolesCredentials` | [`UserRolesCredentials`](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/auth/custom-header-signature.md) | The credential object for userRoles |

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
  userRolesCredentials: {
    'X-User-Role': 'X-User-Role'
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
| testing | **Default** |
| production | - |
| mock | - |

## Authorization

This API uses the following authentication schemes.

* [`bearerAuth (OAuth 2 Bearer token)`](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/auth/oauth-2-bearer-token.md)
* [`userRoles (Custom Header Signature)`](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/auth/custom-header-signature.md)

## List of APIs

* [Users Creator Profiles](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/users-creator-profiles.md)
* [Users Social Media Accounts](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/users-social-media-accounts.md)
* [Exercise Library Exercises](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/exercise-library-exercises.md)
* [Exercise Library Exercises Exercise Instructions](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/exercise-library-exercises-exercise-instructions.md)
* [Exercise Library Exercises Exercise Videos](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/exercise-library-exercises-exercise-videos.md)
* [Exercise Library Exercises Exercise Thumbnails](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/exercise-library-exercises-exercise-thumbnails.md)
* [Exercise Library Muscles](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/exercise-library-muscles.md)
* [Exercise Library Muscles Muscle Groups](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/exercise-library-muscles-muscle-groups.md)
* [Exercise Library Equipment](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/exercise-library-equipment.md)
* [Exercise Library Equipment Equipment Groups](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/exercise-library-equipment-equipment-groups.md)
* [Exercise Library Exercise Drafts](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/exercise-library-exercise-drafts.md)
* [Exercise Library Exercise Categories](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/exercise-library-exercise-categories.md)
* [Exercise Library Exercise Metrics](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/exercise-library-exercise-metrics.md)
* [Workouts Workout Data](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/workouts-workout-data.md)
* [Workouts Workout Content](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/workouts-workout-content.md)
* [Workouts Workout Preview](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/workouts-workout-preview.md)
* [Common Media Assets](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/common-media-assets.md)
* [Common Locales](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/common-locales.md)
* [Common Published Status](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/common-published-status.md)
* [Status](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/status.md)
* [Authentication](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/authentication.md)
* [Users](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/users.md)
* [Users Roles](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/users-roles.md)
* [Workouts](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/controllers/workouts.md)

## Classes Documentation

* [ApiResponse](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/api-response.md)
* [ApiError](https://www.github.com/JustGains/just-gains-api-js-sdk/tree/0.1.1/doc/api-error.md)

