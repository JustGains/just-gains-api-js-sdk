
# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Testing`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `bearerAuthCredentials` | [`BearerAuthCredentials`](auth/oauth-2-bearer-token.md) | The credential object for bearerAuth |
| `userRolesCredentials` | [`UserRolesCredentials`](auth/custom-header-signature.md) | The credential object for userRoles |

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
  userRolesCredentials: {
    'X-User-Role': 'X-User-Role'
  },
  timeout: 0,
  environment: Environment.Testing,
});
```

## JustGains-API Client

The gateway for the SDK. This class acts as a factory for the Controllers and also holds the configuration of the SDK.

## Controllers

| Name | Description |
|  --- | --- |
| status | Gets StatusController |
| authentication | Gets AuthenticationController |
| users | Gets UsersController |
| usersRoles | Gets UsersRolesController |
| usersCreatorProfiles | Gets UsersCreatorProfilesController |
| usersSocialMediaAccounts | Gets UsersSocialMediaAccountsController |
| exerciseLibraryExercises | Gets ExerciseLibraryExercisesController |
| exerciseLibraryExercisesExerciseInstructions | Gets ExerciseLibraryExercisesExerciseInstructionsController |
| exerciseLibraryExercisesExerciseVideos | Gets ExerciseLibraryExercisesExerciseVideosController |
| exerciseLibraryExercisesExerciseThumbnails | Gets ExerciseLibraryExercisesExerciseThumbnailsController |
| exerciseLibraryMuscles | Gets ExerciseLibraryMusclesController |
| exerciseLibraryMusclesMuscleGroups | Gets ExerciseLibraryMusclesMuscleGroupsController |
| exerciseLibraryEquipment | Gets ExerciseLibraryEquipmentController |
| exerciseLibraryEquipmentEquipmentGroups | Gets ExerciseLibraryEquipmentEquipmentGroupsController |
| exerciseLibraryExerciseDrafts | Gets ExerciseLibraryExerciseDraftsController |
| exerciseLibraryExerciseCategories | Gets ExerciseLibraryExerciseCategoriesController |
| exerciseLibraryExerciseMetrics | Gets ExerciseLibraryExerciseMetricsController |
| workouts | Gets WorkoutsController |
| workoutsWorkoutData | Gets WorkoutsWorkoutDataController |
| workoutsWorkoutContent | Gets WorkoutsWorkoutContentController |
| workoutsWorkoutPreview | Gets WorkoutsWorkoutPreviewController |
| commonMediaAssets | Gets CommonMediaAssetsController |
| commonLocales | Gets CommonLocalesController |
| commonPublishedStatus | Gets CommonPublishedStatusController |

