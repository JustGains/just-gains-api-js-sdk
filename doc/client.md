
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Testing`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `bearerAuthCredentials` | [`BearerAuthCredentials`](auth/oauth-2-bearer-token.md) | The credential object for bearerAuth |

## HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

## RetryConfiguration

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

## Workout Creator API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| authenticationNew | Gets AuthenticationNewController |
| users | Gets UsersController |
| usersCreatorProfiles | Gets UsersCreatorProfilesController |
| exercises | Gets ExercisesController |
| exercisesExerciseInstructions | Gets ExercisesExerciseInstructionsController |
| exercisesExerciseVideos | Gets ExercisesExerciseVideosController |
| muscles | Gets MusclesController |
| musclesMuscleGroups | Gets MusclesMuscleGroupsController |
| equipment | Gets EquipmentController |
| equipmentEquipmentGroups | Gets EquipmentEquipmentGroupsController |
| workouts | Gets WorkoutsController |
| workoutsWorkoutData | Gets WorkoutsWorkoutDataController |
| exerciseDrafts | Gets ExerciseDraftsController |
| exerciseCategories | Gets ExerciseCategoriesController |
| programs | Gets ProgramsController |
| programsProgramWeeks | Gets ProgramsProgramWeeksController |
| programsProgramAnalytics | Gets ProgramsProgramAnalyticsController |
| status | Gets StatusController |
| userManagement | Gets UserManagementController |
| mediaAssets | Gets MediaAssetsController |
| locales | Gets LocalesController |
| publishedStatus | Gets PublishedStatusController |
| exerciseMetrics | Gets ExerciseMetricsController |
| programsProgramViews | Gets ProgramsProgramViewsController |
| programsProgramReviews | Gets ProgramsProgramReviewsController |

