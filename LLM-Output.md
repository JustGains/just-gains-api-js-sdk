# ./LLM-Output.md

# ./doc/models/exercise-thumbnail-response.md


# Exercise Thumbnail Response

## Structure

`ExerciseThumbnailResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseThumbnail`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "exerciseCode": "SQUAT",
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "userName": "john_doe",
    "mediaAsset": {
      "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
      "fileName": "workout_routine.mp4",
      "filePath": "media/videos/routines/workout_routine.mp4",
      "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
      "fileSize": 15728640,
      "fileFormat": "video/mp4",
      "description": "High-intensity interval training (HIIT) workout routine for beginners"
    }
  }
}
```


-----------------------------------

# ./doc/models/exercise-category-list-response.md


# Exercise Category List Response

## Structure

`ExerciseCategoryListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseCategory[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "exerciseCategoryCode": "STRENGTH_TRAINING",
      "exerciseCategoryName": "Strength Training"
    }
  ]
}
```


-----------------------------------

# ./doc/models/workout-preview-response.md


# Workout Preview Response

## Structure

`WorkoutPreviewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`WorkoutPreview`] | Required | Represents a workout in the system. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
    "workoutTitle": "Full Body Strength Training",
    "updatedAt": "07/08/2023 14:30:00",
    "lastViewedAt": "07/07/2023 09:15:00",
    "workoutBackgroundImage": {
      "mediaId": "00001014-0000-0000-0000-000000000000",
      "fileName": "fileName2",
      "filePath": "filePath2",
      "fileUrl": "fileUrl2",
      "fileSize": 88,
      "fileFormat": "fileFormat4",
      "description": "description8"
    },
    "workoutMuscleGroupsPrimary": [
      {
        "muscleGroupCode": "muscleGroupCode8",
        "muscleGroupName": "muscleGroupName8",
        "muscleGroupThumbnail": {
          "mediaId": "000002a2-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 246,
          "fileFormat": "fileFormat2",
          "description": "description6"
        }
      },
      {
        "muscleGroupCode": "muscleGroupCode8",
        "muscleGroupName": "muscleGroupName8",
        "muscleGroupThumbnail": {
          "mediaId": "000002a2-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 246,
          "fileFormat": "fileFormat2",
          "description": "description6"
        }
      },
      {
        "muscleGroupCode": "muscleGroupCode8",
        "muscleGroupName": "muscleGroupName8",
        "muscleGroupThumbnail": {
          "mediaId": "000002a2-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 246,
          "fileFormat": "fileFormat2",
          "description": "description6"
        }
      }
    ],
    "workoutMuscleGroupsSecondary": [
      {
        "muscleGroupCode": "muscleGroupCode0",
        "muscleGroupName": "muscleGroupName6",
        "muscleGroupThumbnail": {
          "mediaId": "000002a2-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 246,
          "fileFormat": "fileFormat2",
          "description": "description6"
        }
      },
      {
        "muscleGroupCode": "muscleGroupCode0",
        "muscleGroupName": "muscleGroupName6",
        "muscleGroupThumbnail": {
          "mediaId": "000002a2-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 246,
          "fileFormat": "fileFormat2",
          "description": "description6"
        }
      }
    ]
  }
}
```


-----------------------------------

# ./doc/models/exercise-category-translation.md


# Exercise Category Translation

Represents a translation of an exercise category name for a specific locale.

## Structure

`ExerciseCategoryTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Required | The locale code for this translation (e.g., 'en-US', 'es-ES'). |
| `exerciseCategoryName` | `string` | Required | The translated name of the exercise category in the specified locale. |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "exerciseCategoryName": "Strength Training"
}
```


-----------------------------------

# ./doc/models/related-exercise-list-item.md


# Related Exercise List Item

Represents a variant relationship between two exercises, tracking how they are related and differ from each other.

## Structure

`RelatedExerciseListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Required | Unique identifier for the exercise. |
| `variantSlug` | `string \| undefined` | Optional | A short slug that explains the variation of the exercise. |

## Example (as JSON)

```json
{
  "exerciseCode": "BENCH_PRESS",
  "VariantSlug": "Wide"
}
```


-----------------------------------

# ./doc/models/role-update-request.md


# Role Update Request

## Structure

`RoleUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleName` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "roleName": "roleName4",
  "description": "description2"
}
```


-----------------------------------

# ./doc/models/creator-profile-response.md


# Creator Profile Response

## Structure

`CreatorProfileResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`CreatorProfile`] | Required | Represents a creator's profile information. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "userName": "TheRock",
    "firstName": "Dwayne",
    "lastName": "Johnson",
    "fullName": "Dwayne Johnson"
  }
}
```


-----------------------------------

# ./doc/models/auth-callback-response.md


# Auth Callback Response

## Structure

`AuthCallbackResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`AuthData`] | Required | Authentication data containing tokens and user information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "accessToken": "accessToken8",
    "refreshToken": "refreshToken8",
    "tokenExpiration": "tokenExpiration4",
    "userInfo": {
      "userId": "0000084a-0000-0000-0000-000000000000",
      "userName": "userName4",
      "emailConfirmed": false,
      "email": "email4",
      "password": "password6"
    }
  }
}
```


-----------------------------------

# ./doc/models/muscle-group-translation.md


# Muscle Group Translation

## Structure

`MuscleGroupTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Required | The locale code for this translation (e.g., 'en-US', 'es-ES') |
| `muscleGroupName` | `string` | Required | The translated name of the muscle group |
| `muscleGroupDescription` | `string \| undefined` | Optional | The translated description of the muscle group (optional) |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "muscleGroupName": "Quadriceps",
  "muscleGroupDescription": "The quadriceps femoris is a large muscle group located on the front of the thigh."
}
```


-----------------------------------

# ./doc/models/publish-status-enum.md


# Publish Status Enum

## Enumeration

`PublishStatusEnum`

## Fields

| Name |
|  --- |
| `Unreviewed` |
| `Reviewed` |
| `Published` |


-----------------------------------

# ./doc/models/workout-data.md


# Workout Data

## Structure

`WorkoutData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | Unique identifier for the exercise. |
| `exerciseNotes` | `string \| undefined` | Optional | Additional notes or instructions for this specific instance of the exercise. |
| `exerciseThumbnail` | [`MediaAsset \| undefined`] | Optional | - |
| `exerciseMetrics` | [`ExerciseMetric1[] \| undefined`] | Optional | List of metric codes and their units used for this exercise, in order |
| `exerciseOrder` | `number \| undefined` | Optional | The order of this exercise within the workout or its group. |
| `exerciseGroupID` | `number \| null \| undefined` | Optional | Identifier for the group this exercise belongs to, if any. Null if not part of a group. |
| `exerciseGroupType` | [`ExerciseGroupTypeEnum \| null \| undefined`] | Optional | The type of group this exercise belongs to, if any. Null if not part of a group. |
| `exerciseData` | [`ExerciseSet[] \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL_SQUAT",
  "exerciseNotes": "Keep your core tight throughout the movement",
  "exerciseOrder": 2,
  "exerciseGroupID": 1,
  "exerciseGroupType": "SUPERSET",
  "exerciseThumbnail": {
    "mediaId": "000024ec-0000-0000-0000-000000000000",
    "fileName": "fileName8",
    "filePath": "filePath6",
    "fileUrl": "fileUrl8",
    "fileSize": 240,
    "fileFormat": "fileFormat0",
    "description": "description6"
  },
  "exerciseMetrics": [
    {
      "metricCode": "metricCode6",
      "metricUnit": "metricUnit0"
    },
    {
      "metricCode": "metricCode6",
      "metricUnit": "metricUnit0"
    }
  ]
}
```


-----------------------------------

# ./doc/models/auth-settings-response.md


# Auth Settings Response

## Structure

`AuthSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`OAuthSettingsData`] | Required | Data object containing OAuth provider settings |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "clientId": "clientId4",
    "authorizeUrl": "authorizeUrl6",
    "tokenUrl": "tokenUrl0",
    "scopes": [
      "scopes6",
      "scopes5"
    ]
  }
}
```


-----------------------------------

# ./doc/models/social-media-platform-list-response.md


# Social Media Platform List Response

## Structure

`SocialMediaPlatformListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`SocialMediaPlatform[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "socialMediaPlatformCode": "TWITTER",
      "socialMediaPlatformName": "Twitter",
      "socialMediaPlatformUrlFormat": "https://twitter.com/{username}",
      "socialMediaPlatformIcon": {
        "mediaId": "000004fe-0000-0000-0000-000000000000",
        "fileName": "fileName4",
        "filePath": "filePath0",
        "fileUrl": "fileUrl4",
        "fileSize": 18,
        "fileFormat": "fileFormat6",
        "description": "description0"
      }
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


-----------------------------------

# ./doc/models/muscle-translation-list-response.md


# Muscle Translation List Response

## Structure

`MuscleTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MuscleTranslation[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "muscleCode": "QUAD",
      "localeCode": "en-US",
      "muscleName": "Quadriceps"
    }
  ]
}
```


-----------------------------------

# ./doc/models/creator-profile-list-response.md


# Creator Profile List Response

## Structure

`CreatorProfileListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`CreatorProfile[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
      "userId": "123e4567-e89b-12d3-a456-426614174000",
      "userName": "TheRock",
      "firstName": "Dwayne",
      "lastName": "Johnson",
      "fullName": "Dwayne Johnson"
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


-----------------------------------

# ./doc/models/equipment-translation-list-response.md


# Equipment Translation List Response

## Structure

`EquipmentTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`EquipmentTranslation[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "localeCode": "en-US",
      "equipmentName": "Barbell"
    }
  ]
}
```


-----------------------------------

# ./doc/models/auth-refresh-token-response.md


# Auth Refresh Token Response

## Structure

`AuthRefreshTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`AuthData`] | Required | Authentication data containing tokens and user information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "accessToken": "accessToken8",
    "refreshToken": "refreshToken8",
    "tokenExpiration": "tokenExpiration4",
    "userInfo": {
      "userId": "0000084a-0000-0000-0000-000000000000",
      "userName": "userName4",
      "emailConfirmed": false,
      "email": "email4",
      "password": "password6"
    }
  }
}
```


-----------------------------------

# ./doc/models/exercise-instruction-list-item.md


# Exercise Instruction List Item

## Structure

`ExerciseInstructionListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Optional | - |
| `userName` | `string \| undefined` | Optional | Username of the user who created this instruction. |
| `localeCode` | `string \| undefined` | Optional | Language code for the instructions |
| `dateUpdated` | `string \| undefined` | Optional | - |
| `dateCreated` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
  "userName": "john_doe",
  "localeCode": "en-US",
  "dateUpdated": "2023-07-10T11:45:00Z",
  "dateCreated": "2023-06-15T08:30:00Z"
}
```


-----------------------------------

# ./doc/models/contribution-type-enum.md


# Contribution Type Enum

Type of contribution made by the creator.

## Enumeration

`ContributionTypeEnum`

## Fields

| Name |
|  --- |
| `ORIGINALAUTHOR` |
| `PARTIALCONTRIBUTOR` |
| `SUBMITTER` |
| `CURATOR` |

## Example

```
ORIGINAL_AUTHOR
```


-----------------------------------

# ./doc/models/initiate-auth-request.md


# Initiate Auth Request

Request object for initiating OAuth authentication

## Structure

`InitiateAuthRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `redirectUrl` | `string` | Required | The URL to redirect to after authentication |

## Example (as JSON)

```json
{
  "redirectUrl": "https://example.com/callback"
}
```


-----------------------------------

# ./doc/models/media-asset-response.md


# Media Asset Response

## Structure

`MediaAssetResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MediaAsset`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
    "fileName": "workout_routine.mp4",
    "filePath": "media/videos/routines/workout_routine.mp4",
    "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
    "fileSize": 15728640,
    "fileFormat": "video/mp4",
    "description": "High-intensity interval training (HIIT) workout routine for beginners"
  }
}
```


-----------------------------------

# ./doc/models/confirm-email-request.md


# Confirm Email Request

Request object for email confirmation

## Structure

`ConfirmEmailRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | Email address to confirm |

## Example (as JSON)

```json
{
  "email": "john.doe@example.com"
}
```


-----------------------------------

# ./doc/models/workout-equipment-group.md


# Workout Equipment Group

## Structure

`WorkoutEquipmentGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string \| undefined` | Optional | Unique identifier for the equipment. |
| `equipmentName` | `string \| undefined` | Optional | Name of the equipment, localized. |
| `equipmentThumbnail` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "equipmentCode": "BARBELL",
  "equipmentName": "Barbell",
  "equipmentThumbnail": {
    "mediaId": "0000103e-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 162,
    "fileFormat": "fileFormat6",
    "description": "description0"
  }
}
```


-----------------------------------

# ./doc/models/roles-response-1.md


# Roles Response 1

## Structure

`RolesResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Role`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "roleId": 82,
    "roleName": "roleName4",
    "description": "description0"
  }
}
```


-----------------------------------

# ./doc/models/data.md


# Data

## Structure

`Data`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "text": "Lie on a flat bench with your feet flat on the ground."
}
```


-----------------------------------

# ./doc/models/roles-response.md


# Roles Response

## Structure

`RolesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Role[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "roleId": 82,
      "roleName": "roleName4",
      "description": "description0"
    }
  ]
}
```


-----------------------------------

# ./doc/models/workout-data-response.md


# Workout Data Response

## Structure

`WorkoutDataResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`WorkoutData`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "exerciseCode": "BARBELL_SQUAT",
    "exerciseNotes": "Keep your core tight throughout the movement",
    "exerciseOrder": 2,
    "exerciseGroupID": 1,
    "exerciseGroupType": "SUPERSET",
    "exerciseThumbnail": {
      "mediaId": "000024ec-0000-0000-0000-000000000000",
      "fileName": "fileName8",
      "filePath": "filePath6",
      "fileUrl": "fileUrl8",
      "fileSize": 240,
      "fileFormat": "fileFormat0",
      "description": "description6"
    },
    "exerciseMetrics": [
      {
        "metricCode": "metricCode6",
        "metricUnit": "metricUnit0"
      }
    ]
  }
}
```


-----------------------------------

# ./doc/models/exercise-translation.md


# Exercise Translation

## Structure

`ExerciseTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Optional | The locale code of the translation |
| `exerciseName` | `string \| undefined` | Optional | Translated Primary Exercise Name for the chosen Locale |
| `isPrimary` | `boolean \| undefined` | Optional | Is this the primary translation for the exercise in the chosen locale |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "exerciseName": "exerciseName8",
  "isPrimary": false
}
```


-----------------------------------

# ./doc/models/creator-profile-1.md


# Creator Profile 1

## Structure

`CreatorProfile1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `userId` | `string \| undefined` | Optional | Associated user ID, if applicable. |
| `userName` | `string \| undefined` | Optional | Creator's username. |
| `firstName` | `string \| undefined` | Optional | Creator's first name. |
| `lastName` | `string \| undefined` | Optional | Creator's last name. |
| `fullName` | `string \| undefined` | Optional | Creator's full name. |
| `profilePhoto` | [`MediaAsset \| undefined`] | Optional | - |
| `socialMediaAccounts` | [`CreatorSocialMediaAccount[] \| undefined`] | Optional | List of creator's social media accounts. |

## Example (as JSON)

```json
{
  "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "userName": "TheRock",
  "firstName": "Dwayne",
  "lastName": "Johnson",
  "fullName": "Dwayne Johnson"
}
```


-----------------------------------

# ./doc/models/exercise-update-request.md


# Exercise Update Request

## Structure

`ExerciseUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | A unique identifier for the exercise. |
| `exerciseName` | `string \| undefined` | Optional | Translated Primary Exercise Name |
| `exerciseEquipment` | [`ExerciseEquipment \| undefined`] | Optional | - |
| `exerciseMuscles` | [`ExerciseMuscle[] \| undefined`] | Optional | - |
| `exerciseCategories` | `string[] \| undefined` | Optional | Array of category codes associated with this exercise |
| `relatedExercises` | [`RelatedExerciseListItem[] \| undefined`] | Optional | - |
| `exerciseTypeCode` | `string \| undefined` | Optional | The exerciseTypeCode of the exercise |
| `publishStatusCode` | [`PublishStatusCodeEnum \| undefined`] | Optional | The publish status of the exercise |
| `difficulty` | `number \| undefined` | Optional | Difficulty level of the exercise |
| `metabolicEquivalent` | `number \| undefined` | Optional | Metabolic equivalent of the exercise |
| `isPlateloaded` | `boolean \| undefined` | Optional | Indicates if the exercise is plateloaded |
| `isCardio` | `boolean \| undefined` | Optional | Indicates if the exercise is cardio |
| `olympicRating` | `number \| undefined` | Optional | Olympic rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `powerLifterRating` | `number \| undefined` | Optional | Power lifter rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `calisthenicRating` | `number \| undefined` | Optional | Calisthenic rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `popularityRating` | `number \| undefined` | Optional | Popularity rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `isPlyometric` | `boolean \| undefined` | Optional | Indicates if the exercise is plyometric |
| `isIsometric` | `boolean \| undefined` | Optional | Indicates if the exercise is isometric |
| `isCalisthenic` | `boolean \| undefined` | Optional | Indicates if the exercise is calisthenic |
| `isWeighted` | `boolean \| undefined` | Optional | Indicates if the exercise is weighted |
| `isUnilateral` | `boolean \| undefined` | Optional | Indicates if the exercise is unilateral |
| `isBodyweight` | `boolean \| undefined` | Optional | Indicates if the exercise is bodyweight |
| `isVariant` | `boolean \| undefined` | Optional | Indicates if the exercise is a variant. When true, the exercise won't show up without being searched. |
| `adminNotes` | `string \| undefined` | Optional | Admin notes for the exercise |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL_SQUAT",
  "exerciseName": "Barbell Squat",
  "exerciseCategories": [
    "STRENGTH",
    "CARDIO"
  ],
  "exerciseTypeCode": "STRENGTH",
  "publishStatusCode": "UNREVIEWED",
  "difficulty": 7,
  "metabolicEquivalent": 8.5,
  "isPlateloaded": true,
  "isCardio": false,
  "olympicRating": 5,
  "powerLifterRating": 5,
  "calisthenicRating": 5,
  "popularityRating": 5,
  "isPlyometric": true,
  "isIsometric": false,
  "isCalisthenic": true,
  "isWeighted": false,
  "isUnilateral": true,
  "isBodyweight": true,
  "isVariant": false,
  "adminNotes": "This exercise requires supervision.",
  "exerciseEquipment": {
    "required": [
      [
        "required2",
        "required3",
        "required4"
      ],
      [
        "required2",
        "required3",
        "required4"
      ],
      [
        "required2",
        "required3",
        "required4"
      ]
    ],
    "optional": [
      [
        "optional3"
      ]
    ]
  },
  "exerciseMuscles": [
    {
      "muscleCode": "muscleCode6",
      "targetPercentage": 202,
      "isPrimary": false
    },
    {
      "muscleCode": "muscleCode6",
      "targetPercentage": 202,
      "isPrimary": false
    }
  ]
}
```


-----------------------------------

# ./doc/models/just-gains-error-response-error.md


# Just Gains Error Response Error

## Structure

`JustGainsErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `errors` | `string[] \| undefined` | Optional | A list of error messages that occurred during the operation. |

## Example (as JSON)

```json
{
  "status": "Error",
  "message": "Operation Failed",
  "errors": [
    "Invalid input data",
    "User not found"
  ]
}
```


-----------------------------------

# ./doc/models/equipment.md


# Equipment

Represents a piece of exercise equipment with its details and translations.

## Structure

`Equipment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Required | A unique identifier for the equipment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `equipmentName` | `string \| undefined` | Optional | The name of the equipment, localized. |
| `equipmentThumbnail` | [`MediaAsset \| undefined`] | Optional | - |
| `equipmentEquipmentGroups` | `string[] \| null \| undefined` | Optional | A list of equipment groups this equipment belongs to. |

## Example (as JSON)

```json
{
  "equipmentCode": "BARBELL",
  "equipmentName": "Barbell",
  "equipmentEquipmentGroups": [
    "WEIGHTS",
    "FREE_WEIGHTS"
  ],
  "equipmentThumbnail": {
    "mediaId": "0000103e-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 162,
    "fileFormat": "fileFormat6",
    "description": "description0"
  }
}
```


-----------------------------------

# ./doc/models/published-status-list-response.md


# Published Status List Response

## Structure

`PublishedStatusListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`PublishedStatus[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "publishedStatusCode": "PUBLISHED",
      "userRoleAccess": "ADMIN,USER",
      "publishedStatusName": "Published"
    }
  ]
}
```


-----------------------------------

# ./doc/models/workout-summary.md


# Workout Summary

Summary information about the workout.

## Structure

`WorkoutSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalReps` | `number \| undefined` | Optional | Total number of repetitions across all exercises in the workout. |
| `totalSets` | `number \| undefined` | Optional | Total number of sets across all exercises in the workout. |
| `totalVolume` | `number \| undefined` | Optional | Total volume (weight * reps) across all exercises in the workout. |
| `totalDistance` | `number \| undefined` | Optional | Total distance covered in the workout, if applicable. |
| `estimatedDuration` | `number \| undefined` | Optional | Estimated duration of the workout in minutes. |
| `exerciseCount` | `number \| undefined` | Optional | Number of exercises in the workout. |

## Example (as JSON)

```json
{
  "totalReps": 100,
  "totalSets": 20,
  "totalVolume": 5000.5,
  "totalDistance": 5.5,
  "estimatedDuration": 60,
  "exerciseCount": 8
}
```


-----------------------------------

# ./doc/models/exercise-video.md


# Exercise Video

## Structure

`ExerciseVideo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | Unique identifier for the exercise. |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `userName` | `string \| undefined` | Optional | Username of the user who created the video. |
| `mediaAsset` | [`MediaAsset \| undefined`] | Optional | - |
| `sortOrder` | `number \| undefined` | Optional | The order in which the video should be displayed. |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL_SQUAT",
  "creatorProfileId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
  "userName": "john_doe",
  "sortOrder": 1,
  "mediaAsset": {
    "mediaId": "00001080-0000-0000-0000-000000000000",
    "fileName": "fileName0",
    "filePath": "filePath4",
    "fileUrl": "fileUrl0",
    "fileSize": 212,
    "fileFormat": "fileFormat2",
    "description": "description6"
  }
}
```


-----------------------------------

# ./doc/models/workout-table-item.md


# Workout Table Item

Represents a workout in the system from the My Workouts Page.

## Structure

`WorkoutTableItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string \| undefined` | Optional | Unique identifier for the workout. |
| `originalWorkoutId` | `string \| undefined` | Optional | ID of the original workout if this is a duplicate. |
| `workoutTitle` | `string \| undefined` | Optional | The title of the workout. |
| `workoutSlug` | `string \| undefined` | Optional | The URL slug of the workout. |
| `workoutBackgroundImage` | [`MediaAsset \| undefined`] | Optional | - |
| `isBookmark` | `boolean \| undefined` | Optional | Indicates if the workout is a user's own workout or a bookmarked one from another user. |
| `creatorCredits` | [`CreatorCredit[] \| undefined`] | Optional | List of creator credits associated with this workout. |
| `primaryMuscleGroups` | `string[] \| undefined` | Optional | List of primary muscle group codes targeted in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `equipmentList` | `string[] \| undefined` | Optional | List of equipment codes used in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `secondaryMuscleGroups` | `string[] \| undefined` | Optional | List of secondary muscles targeted in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `createdAt` | `string \| undefined` | Optional | The date and time when the workout was created. |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout was last updated. |
| `lastViewedAt` | `string \| undefined` | Optional | The date and time when the workout was last used. |
| `tags` | `string[] \| undefined` | Optional | NOT IMPLEMENTED:- TODO- List of tags associated with the workout. |
| `workoutSummary` | [`WorkoutSummary \| undefined`] | Optional | Summary information about the workout. |
| `workoutAnalytics` | [`WorkoutAnalytics \| undefined`] | Optional | Analytics data for the workout. |

## Example (as JSON)

```json
{
  "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "originalWorkoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "workoutTitle": "Full Body Strength Training",
  "workoutSlug": "full-body-strength-training",
  "isBookmark": true,
  "primaryMuscleGroups": [
    "CHEST",
    "QUADRICEPS",
    "BACK"
  ],
  "equipmentList": [
    "BARBELL",
    "BENCH",
    "DUMBBELL"
  ],
  "secondaryMuscleGroups": [
    "CHEST",
    "QUADRICEPS",
    "BACK"
  ],
  "createdAt": "07/01/2023 10:00:00",
  "updatedAt": "07/08/2023 14:30:00",
  "lastViewedAt": "07/07/2023 09:15:00",
  "tags": [
    "strength",
    "fullbody",
    "beginner"
  ],
  "WorkoutBackgroundImage": {
    "mediaId": "00000cba-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 14,
    "fileFormat": "fileFormat6",
    "description": "description0"
  }
}
```


-----------------------------------

# ./doc/models/equipment-required.md


# Equipment Required

## Structure

`EquipmentRequired`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `required` | `string[] \| undefined` | Optional | - |
| `optional` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "required": [
    [
      "required8",
      "required9"
    ],
    [
      "required8",
      "required9"
    ]
  ],
  "optional": [
    "optional9",
    "optional0",
    "optional1"
  ]
}
```


-----------------------------------

# ./doc/models/exercise-equipment.md


# Exercise Equipment

## Structure

`ExerciseEquipment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `required` | `string[] \| undefined` | Optional | Array of equipment code arrays that are required for this exercise |
| `optional` | `string[] \| undefined` | Optional | Array of equipment code arrays that are optional for this exercise |

## Example (as JSON)

```json
{
  "required": [
    [
      "BARBELL",
      "WEIGHT_PLATES"
    ],
    [
      "DUMBBELLS"
    ]
  ],
  "optional": [
    [
      "WEIGHT_BELT",
      "WRIST_WRAPS"
    ],
    [
      "RESISTANCE_BANDS"
    ]
  ]
}
```


-----------------------------------

# ./doc/models/muscle-group-list-response.md


# Muscle Group List Response

## Structure

`MuscleGroupListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MuscleGroup[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "muscleGroupCode": "CHEST",
      "muscleGroupName": "Chest",
      "muscleGroupParent": "UPPER_BODY",
      "muscleGroupMuscles": [
        "PECTORALIS_MAJOR_STERNAL_HEAD",
        "ANTERIOR_DELTOID",
        "TRICEPS_BRACHII",
        "RECTUS_ABDOMINIS",
        "LATISSIMUS_DORSI",
        "BICEPS_BRACHII",
        "QUADRICEPS_FEMORIS",
        "HAMSTRINGS",
        "GASTROCNEMIUS"
      ],
      "muscleGroupType": "main_group"
    }
  ]
}
```


-----------------------------------

# ./doc/models/data-2.md


# Data 2

## Structure

`Data2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isAvailable` | `boolean \| undefined` | Optional | Whether the username is available |
| `isValid` | `boolean \| undefined` | Optional | Whether the username is valid |
| `validation` | `string \| undefined` | Optional | The validation result |
| `creatorProfileId` | `string \| null \| undefined` | Optional | The CreatorProfileId of the creator who has this username. Only present if isAvailable is false. |

## Example (as JSON)

```json
{
  "isAvailable": true,
  "isValid": true,
  "validation": "Valid",
  "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000"
}
```


-----------------------------------

# ./doc/models/reset-password-request.md


# Reset Password Request

Request object for resetting password

## Structure

`ResetPasswordRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `newPassword` | `string` | Required | New password to set |

## Example (as JSON)

```json
{
  "newPassword": "NewStrongP@ssw0rd!"
}
```


-----------------------------------

# ./doc/models/exercise-metric-list-response.md


# Exercise Metric List Response

## Structure

`ExerciseMetricListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseMetricData[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "exerciseMetricCode": "WEIGHT",
      "metricName": "Weight",
      "measurementData": "{\r\n  \"unit\": \"lbs\",\r\n  \"precision\": 2\r\n}",
      "exerciseMetricTranslations": [
        {
          "localeCode": "localeCode6",
          "metricName": "metricName8",
          "measurementData": "measurementData4"
        },
        {
          "localeCode": "localeCode6",
          "metricName": "metricName8",
          "measurementData": "measurementData4"
        },
        {
          "localeCode": "localeCode6",
          "metricName": "metricName8",
          "measurementData": "measurementData4"
        }
      ]
    }
  ]
}
```


-----------------------------------

# ./doc/models/creator-credit.md


# Creator Credit

Represents a creator credit for a workout.

## Structure

`CreatorCredit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `workoutSourceURL` | `string \| undefined` | Optional | URL source of the workout, if applicable. |
| `contributionType` | [`ContributionTypeEnum \| undefined`] | Optional | Type of contribution made by the creator. |
| `creatorProfile` | [`CreatorProfile1 \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "creatorProfileId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "workoutSourceURL": "https://www.example.com/workout",
  "contributionType": "ORIGINAL_AUTHOR",
  "creatorProfile": {
    "creatorProfileId": "00001068-0000-0000-0000-000000000000",
    "userId": "00001b82-0000-0000-0000-000000000000",
    "userName": "userName4",
    "firstName": "firstName8",
    "lastName": "lastName6"
  }
}
```


-----------------------------------

# ./doc/models/muscle-group-dto-response.md


# Muscle Group Dto Response

## Structure

`MuscleGroupDtoResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MuscleGroupDto`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "muscleGroupCode": "CHEST",
    "muscleGroupName": "Chest"
  }
}
```


-----------------------------------

# ./doc/models/exercise-response.md


# Exercise Response

## Structure

`ExerciseResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseUpdateRequest`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "exerciseCode": "BARBELL_SQUAT",
    "exerciseName": "Barbell Squat",
    "exerciseCategories": [
      "STRENGTH",
      "CARDIO"
    ],
    "exerciseTypeCode": "STRENGTH",
    "publishStatusCode": "UNREVIEWED",
    "difficulty": 7,
    "metabolicEquivalent": 8.5,
    "isPlateloaded": true,
    "isCardio": false,
    "olympicRating": 5,
    "powerLifterRating": 5,
    "calisthenicRating": 5,
    "popularityRating": 5,
    "isPlyometric": true,
    "isIsometric": false,
    "isCalisthenic": true,
    "isWeighted": false,
    "isUnilateral": true,
    "isBodyweight": true,
    "isVariant": false,
    "adminNotes": "This exercise requires supervision.",
    "exerciseEquipment": {
      "required": [
        [
          "required2",
          "required3",
          "required4"
        ],
        [
          "required2",
          "required3",
          "required4"
        ],
        [
          "required2",
          "required3",
          "required4"
        ]
      ],
      "optional": [
        [
          "optional3"
        ]
      ]
    },
    "exerciseMuscles": [
      {
        "muscleCode": "muscleCode6",
        "targetPercentage": 202,
        "isPrimary": false
      }
    ]
  }
}
```


-----------------------------------

# ./doc/models/workout.md


# Workout

Represents a workout in the system.

## Structure

`Workout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string \| undefined` | Optional | Unique identifier for the workout. |
| `originalWorkoutId` | `string \| undefined` | Optional | ID of the original workout if this is a duplicate. |
| `workoutTitle` | `string \| undefined` | Optional | The title of the workout. |
| `workoutSlug` | `string \| undefined` | Optional | The URL slug of the workout. |
| `workoutBackgroundImage` | [`MediaAsset \| undefined`] | Optional | - |
| `createdAt` | `string \| undefined` | Optional | The date and time when the workout was created. |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout was last updated. |
| `lastViewedAt` | `string \| undefined` | Optional | The date and time when the workout was last used. |
| `workoutSummary` | [`WorkoutSummary \| undefined`] | Optional | Summary information about the workout. |
| `workoutAnalytics` | [`WorkoutAnalytics \| undefined`] | Optional | Analytics data for the workout. |
| `workoutData` | [`WorkoutData[] \| undefined`] | Optional | - |
| `workoutContent` | `unknown \| undefined` | Optional | The content of the workout (JSON formatted output from the JS Editor) |
| `creatorCredits` | [`CreatorCredit[] \| undefined`] | Optional | List of creator credits associated with this workout. |

## Example (as JSON)

```json
{
  "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "originalWorkoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "workoutTitle": "Full Body Strength Training",
  "workoutSlug": "full-body-strength-training",
  "createdAt": "07/01/2023 10:00:00",
  "updatedAt": "07/08/2023 14:30:00",
  "lastViewedAt": "07/07/2023 09:15:00",
  "workoutContent": {},
  "workoutBackgroundImage": {
    "mediaId": "00001014-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 88,
    "fileFormat": "fileFormat4",
    "description": "description8"
  }
}
```


-----------------------------------

# ./doc/models/workout-analytics.md


# Workout Analytics

Analytics data for the workout.

## Structure

`WorkoutAnalytics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalViews` | `number \| undefined` | Optional | Number of views for the workout. |
| `ratingAverage` | `number \| undefined` | Optional | The average rating of the workout. |
| `ratingCount` | `number \| undefined` | Optional | The number of ratings for the workout. |

## Example (as JSON)

```json
{
  "totalViews": 1000,
  "ratingAverage": 4.7,
  "ratingCount": 4578
}
```


-----------------------------------

# ./doc/models/exercise-translation-list-response.md


# Exercise Translation List Response

## Structure

`ExerciseTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseTranslation[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "localeCode": "en-US",
      "exerciseName": "exerciseName2",
      "isPrimary": false
    }
  ]
}
```


-----------------------------------

# ./doc/models/social-media-platform.md


# Social Media Platform

## Structure

`SocialMediaPlatform`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string \| undefined` | Optional | Unique identifier for the social media platform |
| `socialMediaPlatformName` | `string \| undefined` | Optional | Name of the social media platform |
| `socialMediaPlatformUrlFormat` | `string \| undefined` | Optional | URL format for the platform's profile pages |
| `socialMediaPlatformIcon` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "socialMediaPlatformCode": "TWITTER",
  "socialMediaPlatformName": "Twitter",
  "socialMediaPlatformUrlFormat": "https://twitter.com/{username}",
  "socialMediaPlatformIcon": {
    "mediaId": "000004fe-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 18,
    "fileFormat": "fileFormat6",
    "description": "description0"
  }
}
```


-----------------------------------

# ./doc/models/muscle.md


# Muscle

## Structure

`Muscle`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Required | Unique identifier for the muscle |
| `muscleName` | `string \| undefined` | Optional | The name of the muscle in the default language (typically English) |

## Example (as JSON)

```json
{
  "muscleCode": "BICEPS_BRACHII",
  "muscleName": "Biceps Brachii"
}
```


-----------------------------------

# ./doc/models/publish-status-code-enum.md


# Publish Status Code Enum

The publish status of the exercise

## Enumeration

`PublishStatusCodeEnum`

## Fields

| Name |
|  --- |
| `UNREVIEWED` |
| `REVIEWED` |
| `PUBLISHED` |

## Example

```
UNREVIEWED
```


-----------------------------------

# ./doc/models/workout-content.md


# Workout Content

## Structure

`WorkoutContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutID` | `string \| undefined` | Optional | The ID of the workout |
| `workoutContent` | `unknown \| undefined` | Optional | The content of the workout (JSON formatted output from the JS Editor) |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout content was last updated. |

## Example (as JSON)

```json
{
  "workoutID": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "updatedAt": "07/08/2023 14:30:00",
  "workoutContent": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


-----------------------------------

# ./doc/models/muscle-group.md


# Muscle Group

## Structure

`MuscleGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | Unique identifier for the muscle group. |
| `muscleGroupName` | `string \| undefined` | Optional | Name of the muscle group, localized. |
| `muscleGroupParent` | `string \| null \| undefined` | Optional | parent group CODE for hierarchical structuring. |
| `muscleGroupMuscles` | `string[] \| undefined` | Optional | An array of muscle codes associated with this muscle group.<br>Each muscle code represents a specific muscle or muscle group targeted in exercises.<br>The codes are used to identify muscles across different languages and provide<br>consistency in muscle targeting for various exercises. |
| `muscleGroupType` | [`MuscleGroupTypeEnum \| undefined`] | Optional | - |
| `muscleGroupThumbnail` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "muscleGroupCode": "CHEST",
  "muscleGroupName": "Chest",
  "muscleGroupParent": "UPPER_BODY",
  "muscleGroupMuscles": [
    "PECTORALIS_MAJOR_STERNAL_HEAD",
    "ANTERIOR_DELTOID",
    "TRICEPS_BRACHII",
    "RECTUS_ABDOMINIS",
    "LATISSIMUS_DORSI",
    "BICEPS_BRACHII",
    "QUADRICEPS_FEMORIS",
    "HAMSTRINGS",
    "GASTROCNEMIUS"
  ],
  "muscleGroupType": "main_group"
}
```


-----------------------------------

# ./doc/models/exercise-instruction.md


# Exercise Instruction

## Structure

`ExerciseInstruction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Required | The exerciseCode of the exercise to add instructions to. |
| `userId` | `string \| undefined` | Optional | The userId of the creator related to this instruction |
| `localeCode` | `string` | Required | Language code for the instructions |
| `instructionJSON` | [`InstructionJSON`] | Required | - |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL-BENCH-PRESS",
  "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
  "localeCode": "en-US",
  "instructionJSON": {
    "time": 1625832000000,
    "version": "2.24.3",
    "blocks": [
      {
        "id": "id6",
        "type": "paragraph",
        "data": {
          "text": "text0"
        }
      },
      {
        "id": "id6",
        "type": "paragraph",
        "data": {
          "text": "text0"
        }
      }
    ]
  }
}
```


-----------------------------------

# ./doc/models/user-login-request.md


# User Login Request

Data transfer object for user login

## Structure

`UserLoginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | User's email address |
| `password` | `string` | Required | User's password |

## Example (as JSON)

```json
{
  "email": "john.doe@example.com",
  "password": "StrongP@ssw0rd!"
}
```


-----------------------------------

# ./doc/models/exercise-list-item.md


# Exercise List Item

## Structure

`ExerciseListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | Unique identifier for the exercise. |
| `exerciseName` | `string \| undefined` | Optional | Translated Primary Exercise Name for the chosen Locale |
| `exerciseTypeCode` | `string \| undefined` | Optional | The exerciseTypeCode of the exercise |
| `exerciseCategories` | `string[] \| undefined` | Optional | Array of category codes associated with this exercise |
| `publishedStatus` | `string \| undefined` | Optional | The publish status of the exercise |
| `exerciseMuscles` | [`ExerciseMuscle[] \| undefined`] | Optional | - |
| `exerciseThumbnail` | [`MediaAsset \| undefined`] | Optional | - |
| `exerciseMetrics` | `string[] \| undefined` | Optional | Array of metric codes associated with this exercise |
| `relatedExercises` | [`RelatedExerciseListItem[] \| undefined`] | Optional | - |
| `recentOrder` | `number \| undefined` | Optional | Used for sorting by most recently used exercises. |

## Example (as JSON)

```json
{
  "exerciseCode": "BENCH_PRESS",
  "exerciseName": "Bench Press",
  "exerciseTypeCode": "STRENGTH",
  "exerciseCategories": [
    "STRENGTH",
    "CARDIO"
  ],
  "publishedStatus": "PUBLISHED",
  "exerciseMuscles": [
    {
      "muscleCode": "PECTORALIS_MAJOR",
      "targetPercentage": 50,
      "isPrimary": true
    },
    {
      "muscleCode": "ANTERIOR_DELTOID",
      "targetPercentage": 30,
      "isPrimary": false
    },
    {
      "muscleCode": "TRICEPS_BRACHII",
      "targetPercentage": 20,
      "isPrimary": false
    }
  ],
  "exerciseMetrics": [
    "WEIGHT",
    "REPS",
    "DISTANCE"
  ],
  "recentOrder": 1
}
```


-----------------------------------

# ./doc/models/workout-response.md


# Workout Response

## Structure

`WorkoutResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Workout`] | Required | Represents a workout in the system. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
    "originalWorkoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
    "workoutTitle": "Full Body Strength Training",
    "workoutSlug": "full-body-strength-training",
    "createdAt": "07/01/2023 10:00:00",
    "updatedAt": "07/08/2023 14:30:00",
    "lastViewedAt": "07/07/2023 09:15:00",
    "workoutContent": {},
    "workoutBackgroundImage": {
      "mediaId": "00001014-0000-0000-0000-000000000000",
      "fileName": "fileName2",
      "filePath": "filePath2",
      "fileUrl": "fileUrl2",
      "fileSize": 88,
      "fileFormat": "fileFormat4",
      "description": "description8"
    }
  }
}
```


-----------------------------------

# ./doc/models/creator-social-media-account.md


# Creator Social Media Account

Represents a social media account associated with a creator.

## Structure

`CreatorSocialMediaAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string \| undefined` | Optional | The ID of the social media platform from the predefined list. |
| `socialMediaAccountUsername` | `string \| undefined` | Optional | The creator's username on this platform. |

## Example (as JSON)

```json
{
  "socialMediaPlatformCode": "TWITTER",
  "socialMediaAccountUsername": "example_user"
}
```


-----------------------------------

# ./doc/models/muscle-group-translation-list-response.md


# Muscle Group Translation List Response

## Structure

`MuscleGroupTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MuscleGroupTranslation[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "localeCode": "en-US",
      "muscleGroupName": "Quadriceps",
      "muscleGroupDescription": "The quadriceps femoris is a large muscle group located on the front of the thigh."
    }
  ]
}
```


-----------------------------------

# ./doc/models/equipment-translation.md


# Equipment Translation

## Structure

`EquipmentTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| null \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `10` |
| `equipmentName` | `string` | Required | **Constraints**: *Minimum Length*: `1` |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "equipmentName": "Barbell"
}
```


-----------------------------------

# ./doc/models/workout-table-list-response.md


# Workout Table List Response

## Structure

`WorkoutTableListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`WorkoutTableItem[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
      "originalWorkoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
      "workoutTitle": "Full Body Strength Training",
      "workoutSlug": "full-body-strength-training",
      "isBookmark": true,
      "primaryMuscleGroups": [
        "CHEST",
        "QUADRICEPS",
        "BACK"
      ],
      "equipmentList": [
        "BARBELL",
        "BENCH",
        "DUMBBELL"
      ],
      "secondaryMuscleGroups": [
        "CHEST",
        "QUADRICEPS",
        "BACK"
      ],
      "createdAt": "07/01/2023 10:00:00",
      "updatedAt": "07/08/2023 14:30:00",
      "lastViewedAt": "07/07/2023 09:15:00",
      "tags": [
        "strength",
        "fullbody",
        "beginner"
      ],
      "WorkoutBackgroundImage": {
        "mediaId": "00000cba-0000-0000-0000-000000000000",
        "fileName": "fileName4",
        "filePath": "filePath0",
        "fileUrl": "fileUrl4",
        "fileSize": 14,
        "fileFormat": "fileFormat6",
        "description": "description0"
      }
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


-----------------------------------

# ./doc/models/equipment-group-list-response.md


# Equipment Group List Response

## Structure

`EquipmentGroupListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`EquipmentGroup[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "equipmentGroupCode": "DUMBBELLS",
      "equipmentGroupName": "Dumbbells",
      "equipmentGroupParent": "FREE_WEIGHTS",
      "sortOrder": 0,
      "equipmentGroupEquipment": [
        "equipmentGroupEquipment5",
        "equipmentGroupEquipment6",
        "equipmentGroupEquipment7"
      ],
      "equipmentGroupThumbnail": {
        "mediaId": "00000372-0000-0000-0000-000000000000",
        "fileName": "fileName8",
        "filePath": "filePath6",
        "fileUrl": "fileUrl8",
        "fileSize": 182,
        "fileFormat": "fileFormat0",
        "description": "description4"
      }
    }
  ]
}
```


-----------------------------------

# ./doc/models/muscle-group-type-enum.md


# Muscle Group Type Enum

## Enumeration

`MuscleGroupTypeEnum`

## Fields

| Name |
|  --- |
| `MainGroup` |
| `Subgroup` |
| `ExerciseGroup` |

## Example

```
main_group
```


-----------------------------------

# ./doc/models/equipment-list-response.md


# Equipment List Response

## Structure

`EquipmentListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Equipment[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "equipmentCode": "BARBELL",
      "equipmentName": "Barbell",
      "equipmentEquipmentGroups": [
        "WEIGHTS",
        "FREE_WEIGHTS"
      ],
      "equipmentThumbnail": {
        "mediaId": "0000103e-0000-0000-0000-000000000000",
        "fileName": "fileName4",
        "filePath": "filePath0",
        "fileUrl": "fileUrl4",
        "fileSize": 162,
        "fileFormat": "fileFormat6",
        "description": "description0"
      }
    }
  ]
}
```


-----------------------------------

# ./doc/models/exercise-category-translation-list-response.md


# Exercise Category Translation List Response

## Structure

`ExerciseCategoryTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseCategoryTranslation[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "localeCode": "en-US",
      "exerciseCategoryName": "Strength Training"
    }
  ]
}
```


-----------------------------------

# ./doc/models/muscle-group-dto.md


# Muscle Group Dto

## Structure

`MuscleGroupDto`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | The unique code of the muscle group |
| `muscleGroupName` | `string \| undefined` | Optional | The localized name of the muscle group |

## Example (as JSON)

```json
{
  "muscleGroupCode": "CHEST",
  "muscleGroupName": "Chest"
}
```


-----------------------------------

# ./doc/models/workouts-duplicate-request.md


# Workouts Duplicate Request

## Structure

`WorkoutsDuplicateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `newWorkoutTitle` | `string` | Required | The title for the new duplicated workout |

## Example (as JSON)

```json
{
  "newWorkoutTitle": "My Modified Full Body Workout"
}
```


-----------------------------------

# ./doc/models/media-asset.md


# Media Asset

## Structure

`MediaAsset`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaId` | `string` | Required | Unique identifier for the media element. |
| `fileName` | `string` | Required | The name of the file, which may be useful for generating URLs or simple validations. |
| `filePath` | `string` | Required | The relative path to the file within the storage system, useful for constructing URLs. |
| `fileUrl` | `string \| undefined` | Optional | The URL to the media file, which may be useful for embedding or downloading. |
| `fileSize` | `number` | Required | File size in bytes |
| `fileFormat` | `string \| undefined` | Optional | File format, extension |
| `description` | `string \| undefined` | Optional | Description of the media element |

## Example (as JSON)

```json
{
  "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
  "fileName": "workout_routine.mp4",
  "filePath": "media/videos/routines/workout_routine.mp4",
  "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
  "fileSize": 15728640,
  "fileFormat": "video/mp4",
  "description": "High-intensity interval training (HIIT) workout routine for beginners"
}
```


-----------------------------------

# ./doc/models/exercise-video-list-item.md


# Exercise Video List Item

## Structure

`ExerciseVideoListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Optional | Unique identifier for the user. |
| `userName` | `string \| undefined` | Optional | Username of the user who created the video. |
| `dateUpdated` | `string \| undefined` | Optional | - |
| `dateCreated` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
  "userName": "john_doe",
  "dateUpdated": "2023-07-10T11:45:00Z",
  "dateCreated": "2023-06-15T08:30:00Z"
}
```


-----------------------------------

# ./doc/models/user-info-response.md


# User Info Response

## Structure

`UserInfoResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`User`] | Required | Represents a user in the system. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "userName": "fitness_enthusiast_42",
    "emailConfirmed": true,
    "email": "jane.doe@example.com",
    "password": "$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5",
    "oAuthProvider": "Google",
    "roles": [
      "user"
    ],
    "LastSignInAt": "06/14/2023 09:30:00"
  }
}
```


-----------------------------------

# ./doc/models/muscle-translation.md


# Muscle Translation

## Structure

`MuscleTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Required | The muscle code of the translation |
| `localeCode` | `string` | Required | The locale code of the translation |
| `muscleName` | `string \| undefined` | Optional | The translated name of the muscle |

## Example (as JSON)

```json
{
  "muscleCode": "QUAD",
  "localeCode": "en-US",
  "muscleName": "Quadriceps"
}
```


-----------------------------------

# ./doc/models/equipment-group-translation-list-response.md


# Equipment Group Translation List Response

## Structure

`EquipmentGroupTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`EquipmentGroupTranslation`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "localeCode": "en-US",
    "equipmentGroupName": "Weightlifting Equipment",
    "equipmentGroupDescription": "Equipment used for weightlifting exercises"
  }
}
```


-----------------------------------

# ./doc/models/update-user-request.md


# Update User Request

## Structure

`UpdateUserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `email` | `string \| undefined` | Optional | The user's email address. |

## Example (as JSON)

```json
{
  "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
  "email": "jane.doe@example.com"
}
```


-----------------------------------

# ./doc/models/o-auth-state-data.md


# O Auth State Data

Data object containing OAuth state information

## Structure

`OAuthStateData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uri` | `string` | Required | The authorization URL to redirect the user to |
| `pkceVerifier` | `string` | Required | The PKCE verifier code for the OAuth flow |

## Example (as JSON)

```json
{
  "uri": "https://oauth-provider.com/auth?client_id=123&redirect_uri=...",
  "pkceVerifier": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
}
```


-----------------------------------

# ./doc/models/locale-response.md


# Locale Response

## Structure

`LocaleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Locale`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "localeCode": "en-US",
    "localeName": "English (United States)",
    "published": true,
    "localeIcon": {
      "mediaId": "00000dd0-0000-0000-0000-000000000000",
      "fileName": "fileName2",
      "filePath": "filePath2",
      "fileUrl": "fileUrl2",
      "fileSize": 20,
      "fileFormat": "fileFormat4",
      "description": "description8"
    }
  }
}
```


-----------------------------------

# ./doc/models/exercises-videos-response-1.md


# Exercises Videos Response 1

## Structure

`ExercisesVideosResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`ExerciseVideoResponse[] \| undefined`] | Optional | - |
| `message` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "message": {
    "key1": "val1",
    "key2": "val2"
  },
  "data": [
    {
      "status": "status2",
      "message": "message0",
      "data": {
        "exerciseCode": "exerciseCode2",
        "creatorProfileId": "00000d8c-0000-0000-0000-000000000000",
        "userName": "userName2",
        "mediaAsset": {
          "mediaId": "00001080-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 212,
          "fileFormat": "fileFormat2",
          "description": "description6"
        },
        "sortOrder": 70
      }
    }
  ]
}
```


-----------------------------------

# ./doc/models/just-gains-response-error.md


# Just Gains Response Error

## Structure

`JustGainsResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


-----------------------------------

# ./doc/models/workout-data-list-response.md


# Workout Data List Response

## Structure

`WorkoutDataListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`WorkoutData[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "exerciseCode": "BARBELL_SQUAT",
      "exerciseNotes": "Keep your core tight throughout the movement",
      "exerciseOrder": 2,
      "exerciseGroupID": 1,
      "exerciseGroupType": "SUPERSET",
      "exerciseThumbnail": {
        "mediaId": "000024ec-0000-0000-0000-000000000000",
        "fileName": "fileName8",
        "filePath": "filePath6",
        "fileUrl": "fileUrl8",
        "fileSize": 240,
        "fileFormat": "fileFormat0",
        "description": "description6"
      },
      "exerciseMetrics": [
        {
          "metricCode": "metricCode6",
          "metricUnit": "metricUnit0"
        }
      ]
    }
  ]
}
```


-----------------------------------

# ./doc/models/auth-response.md


# Auth Response

Response object for authentication operations

## Structure

`AuthResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`AuthData`] | Required | Authentication data containing tokens and user information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "accessToken": "accessToken8",
    "refreshToken": "refreshToken8",
    "tokenExpiration": "tokenExpiration4",
    "userInfo": {
      "userId": "0000084a-0000-0000-0000-000000000000",
      "userName": "userName4",
      "emailConfirmed": false,
      "email": "email4",
      "password": "password6"
    }
  }
}
```


-----------------------------------

# ./doc/models/social-media-platform-update.md


# Social Media Platform Update

## Structure

`SocialMediaPlatformUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformName` | `string \| undefined` | Optional | Updated name of the social media platform |
| `socialMediaPlatformUrlFormat` | `string \| undefined` | Optional | Updated URL format for the platform's profile pages |
| `socialMediaPlatformIcon` | `string \| undefined` | Optional | Updated UUID of the associated MediaAsset for the platform's icon |

## Example (as JSON)

```json
{
  "socialMediaPlatformName": "Instagram",
  "socialMediaPlatformUrlFormat": "https://www.instagram.com/{username}",
  "socialMediaPlatformIcon": "123e4567-e89b-12d3-a456-426614174000"
}
```


-----------------------------------

# ./doc/models/media-asset-list-response.md


# Media Asset List Response

## Structure

`MediaAssetListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MediaAsset[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
      "fileName": "workout_routine.mp4",
      "filePath": "media/videos/routines/workout_routine.mp4",
      "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
      "fileSize": 15728640,
      "fileFormat": "video/mp4",
      "description": "High-intensity interval training (HIIT) workout routine for beginners"
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


-----------------------------------

# ./doc/models/users-roles-response.md


# Users Roles Response

## Structure

`UsersRolesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | `string[]` | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    "admin",
    "user"
  ]
}
```


-----------------------------------

# ./doc/models/exercise-video-list-response.md


# Exercise Video List Response

## Structure

`ExerciseVideoListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseVideoListItem[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
      "userName": "john_doe",
      "dateUpdated": "2023-07-10T11:45:00Z",
      "dateCreated": "2023-06-15T08:30:00Z"
    }
  ]
}
```


-----------------------------------

# ./doc/models/auth-initiate-response.md


# Auth Initiate Response

## Structure

`AuthInitiateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`OAuthStateData`] | Required | Data object containing OAuth state information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "uri": "https://oauth-provider.com/auth?client_id=123&redirect_uri=...",
    "pkceVerifier": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
  }
}
```


-----------------------------------

# ./doc/models/forgot-password-request.md


# Forgot Password Request

Request object for initiating password reset

## Structure

`ForgotPasswordRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | Email address associated with the account |

## Example (as JSON)

```json
{
  "email": "john.doe@example.com"
}
```


-----------------------------------

# ./doc/models/muscles-400-error.md


# Muscles 400 Error

## Structure

`Muscles400Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `errors` | `string[] \| undefined` | Optional | A list of error messages that occurred during the operation. |
| `error` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Error",
  "message": "Operation Failed",
  "errors": [
    "Invalid input data",
    "User not found"
  ],
  "error": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


-----------------------------------

# ./doc/models/sort-order-enum.md


# Sort Order Enum

## Enumeration

`SortOrderEnum`

## Fields

| Name |
|  --- |
| `Asc` |
| `Desc` |


-----------------------------------

# ./doc/models/exercise-metric-1.md


# Exercise Metric 1

## Structure

`ExerciseMetric1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metricCode` | `string \| undefined` | Optional | The code of the metric being recorded. |
| `metricUnit` | `string \| undefined` | Optional | The unit of measurement for this metric. |

## Example (as JSON)

```json
{
  "metricCode": "metricCode2",
  "metricUnit": "metricUnit4"
}
```


-----------------------------------

# ./doc/models/creator-profile.md


# Creator Profile

Represents a creator's profile information.

## Structure

`CreatorProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `userId` | `string \| undefined` | Optional | Associated user ID, if applicable. |
| `userName` | `string \| undefined` | Optional | Creator's username. |
| `firstName` | `string \| undefined` | Optional | Creator's first name. |
| `lastName` | `string \| undefined` | Optional | Creator's last name. |
| `fullName` | `string \| undefined` | Optional | Creator's full name. |
| `profilePhoto` | [`MediaAsset \| undefined`] | Optional | - |
| `socialMediaAccounts` | [`CreatorSocialMediaAccount[] \| undefined`] | Optional | List of creator's social media accounts. |

## Example (as JSON)

```json
{
  "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "userName": "TheRock",
  "firstName": "Dwayne",
  "lastName": "Johnson",
  "fullName": "Dwayne Johnson"
}
```


-----------------------------------

# ./doc/models/locale.md


# Locale

## Structure

`Locale`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Optional | A unique code for the locale. |
| `localeName` | `string \| undefined` | Optional | The name of the locale. |
| `published` | `boolean \| undefined` | Optional | Indicates whether the locale is published. |
| `localeIcon` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "localeName": "English (United States)",
  "published": true,
  "localeIcon": {
    "mediaId": "00000dd0-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 20,
    "fileFormat": "fileFormat4",
    "description": "description8"
  }
}
```


-----------------------------------

# ./doc/models/instruction-json.md


# Instruction JSON

## Structure

`InstructionJSON`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `time` | `bigint \| undefined` | Optional | - |
| `blocks` | [`InstructionBlock[] \| undefined`] | Optional | - |
| `version` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "time": 1625832000000,
  "version": "2.24.3",
  "blocks": [
    {
      "id": "id6",
      "type": "paragraph",
      "data": {
        "text": "text0"
      }
    },
    {
      "id": "id6",
      "type": "paragraph",
      "data": {
        "text": "text0"
      }
    }
  ]
}
```


-----------------------------------

# ./doc/models/muscles-translations-response-1.md


# Muscles Translations Response 1

## Structure

`MusclesTranslationsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "message": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


-----------------------------------

# ./doc/models/workout-muscle-groups-secondary.md


# Workout Muscle Groups Secondary

## Structure

`WorkoutMuscleGroupsSecondary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | Unique identifier for the muscle group. |
| `muscleGroupName` | `string \| undefined` | Optional | Name of the muscle group, localized. |
| `muscleGroupThumbnail` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "muscleGroupCode": "CHEST",
  "muscleGroupName": "Chest",
  "muscleGroupThumbnail": {
    "mediaId": "000002a2-0000-0000-0000-000000000000",
    "fileName": "fileName0",
    "filePath": "filePath4",
    "fileUrl": "fileUrl0",
    "fileSize": 246,
    "fileFormat": "fileFormat2",
    "description": "description6"
  }
}
```


-----------------------------------

# ./doc/models/exercise-metric.md


# Exercise Metric

Represents a metric associated with an exercise, including how it should be displayed.

## Structure

`ExerciseMetric`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseMetricCode` | `string \| undefined` | Optional | A unique identifier for the exercise metric. |
| `exerciseMetricTranslations` | [`ExerciseMetricTranslation[] \| undefined`] | Optional | Array of translations for the metric |

## Example (as JSON)

```json
{
  "exerciseMetricCode": "WEIGHT",
  "exerciseMetricTranslations": [
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    },
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    }
  ]
}
```


-----------------------------------

# ./doc/models/exercise-list-response.md


# Exercise List Response

## Structure

`ExerciseListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseListItem[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "exerciseCode": "BENCH_PRESS",
      "exerciseName": "Bench Press",
      "exerciseTypeCode": "STRENGTH",
      "exerciseCategories": [
        "STRENGTH",
        "CARDIO"
      ],
      "publishedStatus": "PUBLISHED",
      "exerciseMuscles": [
        {
          "muscleCode": "PECTORALIS_MAJOR",
          "targetPercentage": 50,
          "isPrimary": true
        },
        {
          "muscleCode": "ANTERIOR_DELTOID",
          "targetPercentage": 30,
          "isPrimary": false
        },
        {
          "muscleCode": "TRICEPS_BRACHII",
          "targetPercentage": 20,
          "isPrimary": false
        }
      ],
      "exerciseMetrics": [
        "WEIGHT",
        "REPS",
        "DISTANCE"
      ],
      "recentOrder": 1
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


-----------------------------------

# ./doc/models/exercise-metric-translation.md


# Exercise Metric Translation

## Structure

`ExerciseMetricTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Optional | The locale code for this translation |
| `metricName` | `string \| undefined` | Optional | Translated name of the metric |
| `measurementData` | `string \| undefined` | Optional | a custom JSON object that can be used to store any additional data related to the metric |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "measurementData": "{\r\n  \"unit\": \"lbs\",\r\n  \"precision\": 2\r\n}",
  "metricName": "metricName8"
}
```


-----------------------------------

# ./doc/models/equipment-response.md


# Equipment Response

## Structure

`EquipmentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Equipment`] | Required | Represents a piece of exercise equipment with its details and translations. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "equipmentCode": "BARBELL",
    "equipmentName": "Barbell",
    "equipmentEquipmentGroups": [
      "WEIGHTS",
      "FREE_WEIGHTS"
    ],
    "equipmentThumbnail": {
      "mediaId": "0000103e-0000-0000-0000-000000000000",
      "fileName": "fileName4",
      "filePath": "filePath0",
      "fileUrl": "fileUrl4",
      "fileSize": 162,
      "fileFormat": "fileFormat6",
      "description": "description0"
    }
  }
}
```


-----------------------------------

# ./doc/models/o-auth-settings-data.md


# O Auth Settings Data

Data object containing OAuth provider settings

## Structure

`OAuthSettingsData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Required | The OAuth client ID |
| `authorizeUrl` | `string` | Required | The authorization endpoint URL |
| `tokenUrl` | `string` | Required | The token endpoint URL |
| `scopes` | `string[]` | Required | Available OAuth scopes |

## Example (as JSON)

```json
{
  "clientId": "clientId2",
  "authorizeUrl": "authorizeUrl4",
  "tokenUrl": "tokenUrl8",
  "scopes": [
    "scopes4",
    "scopes5",
    "scopes6"
  ]
}
```


-----------------------------------

# ./doc/models/exercise-instruction-list-response.md


# Exercise Instruction List Response

## Structure

`ExerciseInstructionListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseInstructionListItem[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
      "userName": "john_doe",
      "localeCode": "en-US",
      "dateUpdated": "2023-07-10T11:45:00Z",
      "dateCreated": "2023-06-15T08:30:00Z"
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


-----------------------------------

# ./doc/models/exercise-instruction-response.md


# Exercise Instruction Response

## Structure

`ExerciseInstructionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseInstruction`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "exerciseCode": "BARBELL-BENCH-PRESS",
    "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
    "localeCode": "en-US",
    "instructionJSON": {
      "time": 1625832000000,
      "version": "2.24.3",
      "blocks": [
        {
          "id": "id6",
          "type": "paragraph",
          "data": {
            "text": "text0"
          }
        },
        {
          "id": "id6",
          "type": "paragraph",
          "data": {
            "text": "text0"
          }
        }
      ]
    }
  }
}
```


-----------------------------------

# ./doc/models/just-gains-basic-response.md


# Just Gains Basic Response

## Structure

`JustGainsBasicResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully."
}
```


-----------------------------------

# ./doc/models/equipment-group-translation.md


# Equipment Group Translation

## Structure

`EquipmentGroupTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Required | The locale code for this translation |
| `equipmentGroupName` | `string` | Required | The translated name of the equipment group |
| `equipmentGroupDescription` | `string \| undefined` | Optional | The translated description of the equipment group |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "equipmentGroupName": "Weightlifting Equipment",
  "equipmentGroupDescription": "Equipment used for weightlifting exercises"
}
```


-----------------------------------

# ./doc/models/locale-list-response.md


# Locale List Response

## Structure

`LocaleListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Locale[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "localeCode": "en-US",
      "localeName": "English (United States)",
      "published": true,
      "localeIcon": {
        "mediaId": "00000dd0-0000-0000-0000-000000000000",
        "fileName": "fileName2",
        "filePath": "filePath2",
        "fileUrl": "fileUrl2",
        "fileSize": 20,
        "fileFormat": "fileFormat4",
        "description": "description8"
      }
    }
  ]
}
```


-----------------------------------

# ./doc/models/workout-muscle-groups-primary.md


# Workout Muscle Groups Primary

## Structure

`WorkoutMuscleGroupsPrimary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | Unique identifier for the muscle group. |
| `muscleGroupName` | `string \| undefined` | Optional | Name of the muscle group, localized. |
| `muscleGroupThumbnail` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "muscleGroupCode": "CHEST",
  "muscleGroupName": "Chest",
  "muscleGroupThumbnail": {
    "mediaId": "000002a2-0000-0000-0000-000000000000",
    "fileName": "fileName0",
    "filePath": "filePath4",
    "fileUrl": "fileUrl0",
    "fileSize": 246,
    "fileFormat": "fileFormat2",
    "description": "description6"
  }
}
```


-----------------------------------

# ./doc/models/workout-request.md


# Workout Request

A new workout being created by POST - All fields optional

## Structure

`WorkoutRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutTitle` | `string \| undefined` | Optional | The title of the workout. |
| `workoutBackgroundImage` | [`MediaAsset \| undefined`] | Optional | - |
| `workoutContent` | `unknown \| undefined` | Optional | The content of the workout (JSON formatted output from the JS Editor) |
| `workoutData` | [`WorkoutData[] \| undefined`] | Optional | - |
| `creatorCredits` | [`CreatorCredit[] \| undefined`] | Optional | List of creator credits associated with this workout. |

## Example (as JSON)

```json
{
  "workoutTitle": "Full Body Strength Training",
  "workoutContent": {},
  "workoutBackgroundImage": {
    "mediaId": "00001014-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 88,
    "fileFormat": "fileFormat4",
    "description": "description8"
  },
  "workoutData": [
    {
      "exerciseCode": "exerciseCode2",
      "exerciseNotes": "exerciseNotes8",
      "exerciseThumbnail": {
        "mediaId": "000024ec-0000-0000-0000-000000000000",
        "fileName": "fileName8",
        "filePath": "filePath6",
        "fileUrl": "fileUrl8",
        "fileSize": 240,
        "fileFormat": "fileFormat0",
        "description": "description6"
      },
      "exerciseMetrics": [
        {
          "metricCode": "metricCode6",
          "metricUnit": "metricUnit0"
        },
        {
          "metricCode": "metricCode6",
          "metricUnit": "metricUnit0"
        }
      ],
      "exerciseOrder": 132
    },
    {
      "exerciseCode": "exerciseCode2",
      "exerciseNotes": "exerciseNotes8",
      "exerciseThumbnail": {
        "mediaId": "000024ec-0000-0000-0000-000000000000",
        "fileName": "fileName8",
        "filePath": "filePath6",
        "fileUrl": "fileUrl8",
        "fileSize": 240,
        "fileFormat": "fileFormat0",
        "description": "description6"
      },
      "exerciseMetrics": [
        {
          "metricCode": "metricCode6",
          "metricUnit": "metricUnit0"
        },
        {
          "metricCode": "metricCode6",
          "metricUnit": "metricUnit0"
        }
      ],
      "exerciseOrder": 132
    }
  ],
  "creatorCredits": [
    {
      "creatorProfileId": "00002506-0000-0000-0000-000000000000",
      "workoutSourceURL": "workoutSourceURL2",
      "contributionType": "ORIGINAL_AUTHOR",
      "creatorProfile": {
        "creatorProfileId": "00001068-0000-0000-0000-000000000000",
        "userId": "00001b82-0000-0000-0000-000000000000",
        "userName": "userName4",
        "firstName": "firstName8",
        "lastName": "lastName6"
      }
    },
    {
      "creatorProfileId": "00002506-0000-0000-0000-000000000000",
      "workoutSourceURL": "workoutSourceURL2",
      "contributionType": "ORIGINAL_AUTHOR",
      "creatorProfile": {
        "creatorProfileId": "00001068-0000-0000-0000-000000000000",
        "userId": "00001b82-0000-0000-0000-000000000000",
        "userName": "userName4",
        "firstName": "firstName8",
        "lastName": "lastName6"
      }
    },
    {
      "creatorProfileId": "00002506-0000-0000-0000-000000000000",
      "workoutSourceURL": "workoutSourceURL2",
      "contributionType": "ORIGINAL_AUTHOR",
      "creatorProfile": {
        "creatorProfileId": "00001068-0000-0000-0000-000000000000",
        "userId": "00001b82-0000-0000-0000-000000000000",
        "userName": "userName4",
        "firstName": "firstName8",
        "lastName": "lastName6"
      }
    }
  ]
}
```


-----------------------------------

# ./doc/models/auth-data.md


# Auth Data

Authentication data containing tokens and user information

## Structure

`AuthData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessToken` | `string \| undefined` | Optional | JWT access token for authenticated requests |
| `refreshToken` | `string \| undefined` | Optional | JWT refresh token for obtaining new access tokens |
| `tokenExpiration` | `string \| undefined` | Optional | Expiration time of the access token |
| `userInfo` | [`User \| undefined`] | Optional | Represents a user in the system. |

## Example (as JSON)

```json
{
  "accessToken": "accessToken8",
  "refreshToken": "refreshToken8",
  "tokenExpiration": "tokenExpiration4",
  "userInfo": {
    "userId": "0000084a-0000-0000-0000-000000000000",
    "userName": "userName4",
    "emailConfirmed": false,
    "email": "email4",
    "password": "password6"
  }
}
```


-----------------------------------

# ./doc/models/exercise-video-response.md


# Exercise Video Response

## Structure

`ExerciseVideoResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseVideo`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "exerciseCode": "BARBELL_SQUAT",
    "creatorProfileId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
    "userName": "john_doe",
    "sortOrder": 1,
    "mediaAsset": {
      "mediaId": "00001080-0000-0000-0000-000000000000",
      "fileName": "fileName0",
      "filePath": "filePath4",
      "fileUrl": "fileUrl0",
      "fileSize": 212,
      "fileFormat": "fileFormat2",
      "description": "description6"
    }
  }
}
```


-----------------------------------

# ./doc/models/social-media-platforms-validate-username-response.md


# Social Media Platforms Validate Username Response

## Structure

`SocialMediaPlatformsValidateUsernameResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Data2`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "isAvailable": true,
    "isValid": true,
    "validation": "Valid",
    "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000"
  }
}
```


-----------------------------------

# ./doc/models/role.md


# Role

## Structure

`Role`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleId` | `number \| undefined` | Optional | - |
| `roleName` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "roleId": 62,
  "roleName": "roleName0",
  "description": "description6"
}
```


-----------------------------------

# ./doc/models/exercise-muscle.md


# Exercise Muscle

## Structure

`ExerciseMuscle`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string \| undefined` | Optional | muscleCode that belongs to this exercise<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `targetPercentage` | `number \| undefined` | Optional | The percentage of effort targeted at this muscle in the exercise.<br>**Constraints**: `>= 0`, `<= 100` |
| `isPrimary` | `boolean \| undefined` | Optional | Indicates whether this muscle is the primary muscle used in the exercise. |

## Example (as JSON)

```json
{
  "muscleCode": "TRICEPS_BRACHII",
  "targetPercentage": 50,
  "isPrimary": true
}
```


-----------------------------------

# ./doc/models/user-register-request.md


# User Register Request

Data transfer object for user registration

## Structure

`UserRegisterRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | User's email address |
| `password` | `string` | Required | User's password (should meet security requirements) |
| `firstName` | `string \| undefined` | Optional | User's first name |
| `lastName` | `string \| undefined` | Optional | User's last name |
| `username` | `string` | Required | User's chosen username |
| `redirectUrl` | `string \| undefined` | Optional | URL to redirect after successful registration |

## Example (as JSON)

```json
{
  "email": "john.doe@example.com",
  "password": "StrongP@ssw0rd!",
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe123",
  "redirectUrl": "https://example.com/welcome"
}
```


-----------------------------------

# ./doc/models/auth-signin-response.md


# Auth Signin Response

## Structure

`AuthSigninResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`AuthData`] | Required | Authentication data containing tokens and user information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "accessToken": "accessToken8",
    "refreshToken": "refreshToken8",
    "tokenExpiration": "tokenExpiration4",
    "userInfo": {
      "userId": "0000084a-0000-0000-0000-000000000000",
      "userName": "userName4",
      "emailConfirmed": false,
      "email": "email4",
      "password": "password6"
    }
  }
}
```


-----------------------------------

# ./doc/models/exercise-category.md


# Exercise Category

Represents a category for exercises, including its code and translations.

## Structure

`ExerciseCategory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string \| undefined` | Optional | Unique identifier for the exercise category. |
| `exerciseCategoryName` | `string \| undefined` | Optional | The name of the exercise category in the default language (typically English). This is a read-only field derived from translations. |

## Example (as JSON)

```json
{
  "exerciseCategoryCode": "STRENGTH_TRAINING",
  "exerciseCategoryName": "Strength Training"
}
```


-----------------------------------

# ./doc/models/user-response.md


# User Response

## Structure

`UserResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`User`] | Required | Represents a user in the system. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "userName": "fitness_enthusiast_42",
    "emailConfirmed": true,
    "email": "jane.doe@example.com",
    "password": "$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5",
    "oAuthProvider": "Google",
    "roles": [
      "user"
    ],
    "LastSignInAt": "06/14/2023 09:30:00"
  }
}
```


-----------------------------------

# ./doc/models/published-status.md


# Published Status

## Structure

`PublishedStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string \| undefined` | Optional | The unique code for the published status |
| `userRoleAccess` | `string \| undefined` | Optional | Comma-separated list of user roles that have access |
| `publishedStatusName` | `string \| undefined` | Optional | The name of the published status |

## Example (as JSON)

```json
{
  "publishedStatusCode": "PUBLISHED",
  "userRoleAccess": "ADMIN,USER",
  "publishedStatusName": "Published"
}
```


-----------------------------------

# ./doc/models/just-gains-pagination-response.md


# Just Gains Pagination Response

## Structure

`JustGainsPaginationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | `unknown` | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "key1": "val1",
    "key2": "val2"
  },
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


-----------------------------------

# ./doc/models/user-info-list-response.md


# User Info List Response

## Structure

`UserInfoListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`User[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "userId": "123e4567-e89b-12d3-a456-426614174000",
      "userName": "fitness_enthusiast_42",
      "emailConfirmed": true,
      "email": "jane.doe@example.com",
      "password": "$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5",
      "oAuthProvider": "Google",
      "roles": [
        "user"
      ],
      "LastSignInAt": "06/14/2023 09:30:00"
    }
  ]
}
```


-----------------------------------

# ./doc/models/user.md


# User

Represents a user in the system.

## Structure

`User`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Optional | Unique identifier for the user. |
| `userName` | `string \| undefined` | Optional | The user's chosen username for the platform. |
| `emailConfirmed` | `boolean \| undefined` | Optional | Indicates if the user's email has been confirmed |
| `email` | `string \| undefined` | Optional | The user's email address. |
| `password` | `string \| undefined` | Optional | The user's hashed password. This should never be exposed in API responses. |
| `oAuthProvider` | `string \| undefined` | Optional | The name of the OAuth provider if the user signed up using OAuth. |
| `roles` | `string[] \| undefined` | Optional | The user's role in the system, determining their permissions. |
| `lastSignInAt` | `string \| undefined` | Optional | Timestamp of the user's last login |
| `creatorProfile` | [`CreatorProfile1 \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "userName": "fitness_enthusiast_42",
  "emailConfirmed": true,
  "email": "jane.doe@example.com",
  "password": "$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5",
  "oAuthProvider": "Google",
  "roles": [
    "user"
  ],
  "LastSignInAt": "06/14/2023 09:30:00"
}
```


-----------------------------------

# ./doc/models/target-muscle-dto.md


# Target Muscle DTO

## Structure

`TargetMuscleDTO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `muscleName` | `string \| undefined` | Optional | - |
| `targetPercentage` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 100` |

## Example (as JSON)

```json
{
  "muscle_name": "BICEP",
  "id": 244,
  "target_percentage": 80
}
```


-----------------------------------

# ./doc/models/muscle-list-response.md


# Muscle List Response

## Structure

`MuscleListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Muscle[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "muscleCode": "BICEPS_BRACHII",
      "muscleName": "Biceps Brachii"
    }
  ]
}
```


-----------------------------------

# ./doc/models/exercise-thumbnail.md


# Exercise Thumbnail

## Structure

`ExerciseThumbnail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Required | Unique identifier for the exercise. |
| `userId` | `string` | Required | The user ID of the user who created the thumbnail. |
| `userName` | `string \| undefined` | Optional | Username of the user who created this Exercise Theme. |
| `mediaAsset` | [`MediaAsset`] | Required | - |

## Example (as JSON)

```json
{
  "exerciseCode": "SQUAT",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "userName": "john_doe",
  "mediaAsset": {
    "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
    "fileName": "workout_routine.mp4",
    "filePath": "media/videos/routines/workout_routine.mp4",
    "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
    "fileSize": 15728640,
    "fileFormat": "video/mp4",
    "description": "High-intensity interval training (HIIT) workout routine for beginners"
  }
}
```


-----------------------------------

# ./doc/models/social-media-platform-create.md


# Social Media Platform Create

## Structure

`SocialMediaPlatformCreate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Required | Unique identifier for the social media platform |
| `socialMediaPlatformName` | `string` | Required | Name of the social media platform |
| `socialMediaPlatformUrlFormat` | `string` | Required | URL format for the platform's profile pages |
| `socialMediaPlatformIcon` | `string \| undefined` | Optional | UUID of the associated MediaAsset for the platform's icon |

## Example (as JSON)

```json
{
  "socialMediaPlatformCode": "INSTAGRAM",
  "socialMediaPlatformName": "Instagram",
  "socialMediaPlatformUrlFormat": "https://www.instagram.com/{username}",
  "socialMediaPlatformIcon": "123e4567-e89b-12d3-a456-426614174000"
}
```


-----------------------------------

# ./doc/models/pagination.md


# Pagination

## Structure

`Pagination`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currentPage` | `number \| undefined` | Optional | The current page number |
| `totalPages` | `number \| undefined` | Optional | The total number of pages |
| `pageSize` | `number \| undefined` | Optional | The number of items per page |
| `totalCount` | `number \| undefined` | Optional | The total number of items across all pages |
| `hasPrevious` | `boolean \| undefined` | Optional | Indicates if there is a previous page |
| `hasNext` | `boolean \| undefined` | Optional | Indicates if there is a next page |

## Example (as JSON)

```json
{
  "currentPage": 1,
  "totalPages": 8,
  "pageSize": 10,
  "totalCount": 75,
  "hasPrevious": false,
  "hasNext": true
}
```


-----------------------------------

# ./doc/models/exercise-group-type-enum.md


# Exercise Group Type Enum

The type of group this exercise belongs to, if any. Null if not part of a group.

## Enumeration

`ExerciseGroupTypeEnum`

## Fields

| Name |
|  --- |
| `SUPERSET` |
| `INTERVAL` |
| `WARMUP` |
| `COOLDOWN` |
| `SECTION` |

## Example

```
SUPERSET
```


-----------------------------------

# ./doc/models/media-asset-assignment.md


# Media Asset Assignment

## Structure

`MediaAssetAssignment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaId` | `string \| undefined` | Optional | Unique identifier for the media element. |

## Example (as JSON)

```json
{
  "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b"
}
```


-----------------------------------

# ./doc/models/o-auth-state-response.md


# O Auth State Response

Response object for OAuth state

## Structure

`OAuthStateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`OAuthStateData`] | Required | Data object containing OAuth state information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "uri": "https://oauth-provider.com/auth?client_id=123&redirect_uri=...",
    "pkceVerifier": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
  }
}
```


-----------------------------------

# ./doc/models/exercise-draft-dto.md


# Exercise Draft DTO

## Structure

`ExerciseDraftDTO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `fileName` | `string \| undefined` | Optional | - |
| `exerciseCode` | `string \| undefined` | Optional | - |
| `exerciseName` | `string \| undefined` | Optional | - |
| `alternateNames` | `string[] \| undefined` | Optional | - |
| `publishStatus` | [`PublishStatusEnum \| undefined`] | Optional | - |
| `models` | [`ExerciseModelDTO[] \| undefined`] | Optional | - |
| `exerciseType` | `string[] \| undefined` | Optional | - |
| `exerciseMetrics` | `string[] \| undefined` | Optional | - |
| `exerciseDifficulty` | `number \| undefined` | Optional | **Constraints**: `>= 1`, `<= 5` |
| `metabolicEquivalent` | `number \| undefined` | Optional | - |
| `equipmentRequired` | [`EquipmentRequired \| undefined`] | Optional | - |
| `primaryMuscleGroups` | [`TargetMuscleDTO[] \| undefined`] | Optional | - |
| `secondaryMuscleGroups` | [`TargetMuscleDTO[] \| undefined`] | Optional | - |
| `isPlateloaded` | `boolean \| undefined` | Optional | - |
| `isCardio` | `boolean \| undefined` | Optional | - |
| `olympicRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `powerlifterRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `calisthenicRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `popularityRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `exerciseTechnicalComplexity` | `number \| null \| undefined` | Optional | - |
| `isPlyometric` | `boolean \| undefined` | Optional | - |
| `isIsometric` | `boolean \| undefined` | Optional | - |
| `isCalisthenic` | `boolean \| undefined` | Optional | - |
| `isWeighted` | `boolean \| undefined` | Optional | - |
| `isUnilateral` | `boolean \| undefined` | Optional | - |
| `isBodyweight` | `boolean \| undefined` | Optional | - |
| `aiNotes` | `string \| undefined` | Optional | - |
| `exerciseInstructions` | [`ExerciseInstruction \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "id": 236,
  "file_name": "file_name4",
  "exercise_code": "exercise_code6",
  "exercise_name": "exercise_name6",
  "alternate_names": [
    "alternate_names1"
  ]
}
```


-----------------------------------

# ./doc/models/exercise-metric-data.md


# Exercise Metric Data

## Structure

`ExerciseMetricData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseMetricCode` | `string \| undefined` | Optional | A unique identifier for the exercise metric. |
| `exerciseMetricTranslations` | [`ExerciseMetricTranslation[] \| undefined`] | Optional | Array of translations for the metric |
| `metricName` | `string \| undefined` | Optional | Translated name of the metric in the requested locale |
| `measurementData` | `string \| undefined` | Optional | a custom JSON object that can be used to store any additional data related to the metric |

## Example (as JSON)

```json
{
  "exerciseMetricCode": "WEIGHT",
  "metricName": "Weight",
  "measurementData": "{\r\n  \"unit\": \"lbs\",\r\n  \"precision\": 2\r\n}",
  "exerciseMetricTranslations": [
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    },
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    },
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    }
  ]
}
```


-----------------------------------

# ./doc/models/users-roles-response-1.md


# Users Roles Response 1

## Structure

`UsersRolesResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Role[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "roleId": 82,
      "roleName": "roleName4",
      "description": "description0"
    }
  ]
}
```


-----------------------------------

# ./doc/models/workout-content-response.md


# Workout Content Response

## Structure

`WorkoutContentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`WorkoutContent`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "workoutID": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
    "updatedAt": "07/08/2023 14:30:00",
    "workoutContent": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```


-----------------------------------

# ./doc/models/role-create-request.md


# Role Create Request

## Structure

`RoleCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleName` | `string` | Required | - |
| `description` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "roleName": "roleName8",
  "description": "description8"
}
```


-----------------------------------

# ./doc/models/instruction-block.md


# Instruction Block

## Structure

`InstructionBlock`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `type` | [`TypeEnum \| undefined`] | Optional | - |
| `data` | [`Data \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "id": "cPYuP2KtocT",
  "type": "paragraph",
  "data": {
    "text": "text0"
  }
}
```


-----------------------------------

# ./doc/models/exercise-thumbnail-list-response.md


# Exercise Thumbnail List Response

## Structure

`ExerciseThumbnailListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseThumbnail[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "exerciseCode": "SQUAT",
      "userId": "123e4567-e89b-12d3-a456-426614174000",
      "userName": "john_doe",
      "mediaAsset": {
        "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
        "fileName": "workout_routine.mp4",
        "filePath": "media/videos/routines/workout_routine.mp4",
        "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
        "fileSize": 15728640,
        "fileFormat": "video/mp4",
        "description": "High-intensity interval training (HIIT) workout routine for beginners"
      }
    }
  ]
}
```


-----------------------------------

# ./doc/models/social-media-platform-response.md


# Social Media Platform Response

## Structure

`SocialMediaPlatformResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`SocialMediaPlatform`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "socialMediaPlatformCode": "TWITTER",
    "socialMediaPlatformName": "Twitter",
    "socialMediaPlatformUrlFormat": "https://twitter.com/{username}",
    "socialMediaPlatformIcon": {
      "mediaId": "000004fe-0000-0000-0000-000000000000",
      "fileName": "fileName4",
      "filePath": "filePath0",
      "fileUrl": "fileUrl4",
      "fileSize": 18,
      "fileFormat": "fileFormat6",
      "description": "description0"
    }
  }
}
```


-----------------------------------

# ./doc/models/exercise-set.md


# Exercise Set

## Structure

`ExerciseSet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `setNumber` | `number` | Required | The number of the set within the exercise. |
| `metricValues` | `Record<string, number>` | Required | A map of metric codes to their corresponding values for this set. |

## Example (as JSON)

```json
{
  "setNumber": 1,
  "metricValues": {
    "WEIGHT": 100.5,
    "REPS": 10.0
  }
}
```


-----------------------------------

# ./doc/models/exercise-model-dto.md


# Exercise Model DTO

## Structure

`ExerciseModelDTO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `modelName` | `string \| undefined` | Optional | - |
| `videoId` | `string \| undefined` | Optional | - |
| `videoUrl` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 118,
  "model_name": "model_name6",
  "video_id": "video_id6",
  "video_url": "video_url8"
}
```


-----------------------------------

# ./doc/models/type-enum.md


# Type Enum

## Enumeration

`TypeEnum`

## Fields

| Name |
|  --- |
| `Paragraph` |
| `Delimiter` |

## Example

```
paragraph
```


-----------------------------------

# ./doc/models/just-gains-response.md


# Just Gains Response

## Structure

`JustGainsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


-----------------------------------

# ./doc/models/o-auth-settings.md


# O Auth Settings

OAuth provider settings response

## Structure

`OAuthSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`OAuthSettingsData`] | Required | Data object containing OAuth provider settings |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "clientId": "clientId4",
    "authorizeUrl": "authorizeUrl6",
    "tokenUrl": "tokenUrl0",
    "scopes": [
      "scopes6",
      "scopes5"
    ]
  }
}
```


-----------------------------------

# ./doc/models/workout-preview.md


# Workout Preview

Represents a workout in the system.

## Structure

`WorkoutPreview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string \| undefined` | Optional | Unique identifier for the workout. |
| `workoutTitle` | `string \| undefined` | Optional | The title of the workout. |
| `workoutBackgroundImage` | [`MediaAsset \| undefined`] | Optional | - |
| `workoutMuscleGroupsPrimary` | [`WorkoutMuscleGroupsPrimary[] \| undefined`] | Optional | - |
| `workoutMuscleGroupsSecondary` | [`WorkoutMuscleGroupsSecondary[] \| undefined`] | Optional | - |
| `workoutEquipmentGroups` | [`WorkoutEquipmentGroup[] \| undefined`] | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout was last updated. |
| `lastViewedAt` | `string \| undefined` | Optional | The date and time when the workout was last used. |
| `workoutData` | [`WorkoutData[] \| undefined`] | Optional | - |
| `workoutContent` | [`WorkoutContent \| undefined`] | Optional | - |
| `workoutSummary` | [`WorkoutSummary \| undefined`] | Optional | Summary information about the workout. |
| `workoutAnalytics` | [`WorkoutAnalytics \| undefined`] | Optional | Analytics data for the workout. |
| `creatorCredits` | [`CreatorCredit[] \| undefined`] | Optional | List of creator credits associated with this workout. |

## Example (as JSON)

```json
{
  "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "workoutTitle": "Full Body Strength Training",
  "updatedAt": "07/08/2023 14:30:00",
  "lastViewedAt": "07/07/2023 09:15:00",
  "workoutBackgroundImage": {
    "mediaId": "00001014-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 88,
    "fileFormat": "fileFormat4",
    "description": "description8"
  },
  "workoutMuscleGroupsPrimary": [
    {
      "muscleGroupCode": "muscleGroupCode8",
      "muscleGroupName": "muscleGroupName8",
      "muscleGroupThumbnail": {
        "mediaId": "000002a2-0000-0000-0000-000000000000",
        "fileName": "fileName0",
        "filePath": "filePath4",
        "fileUrl": "fileUrl0",
        "fileSize": 246,
        "fileFormat": "fileFormat2",
        "description": "description6"
      }
    },
    {
      "muscleGroupCode": "muscleGroupCode8",
      "muscleGroupName": "muscleGroupName8",
      "muscleGroupThumbnail": {
        "mediaId": "000002a2-0000-0000-0000-000000000000",
        "fileName": "fileName0",
        "filePath": "filePath4",
        "fileUrl": "fileUrl0",
        "fileSize": 246,
        "fileFormat": "fileFormat2",
        "description": "description6"
      }
    },
    {
      "muscleGroupCode": "muscleGroupCode8",
      "muscleGroupName": "muscleGroupName8",
      "muscleGroupThumbnail": {
        "mediaId": "000002a2-0000-0000-0000-000000000000",
        "fileName": "fileName0",
        "filePath": "filePath4",
        "fileUrl": "fileUrl0",
        "fileSize": 246,
        "fileFormat": "fileFormat2",
        "description": "description6"
      }
    }
  ],
  "workoutMuscleGroupsSecondary": [
    {
      "muscleGroupCode": "muscleGroupCode0",
      "muscleGroupName": "muscleGroupName6",
      "muscleGroupThumbnail": {
        "mediaId": "000002a2-0000-0000-0000-000000000000",
        "fileName": "fileName0",
        "filePath": "filePath4",
        "fileUrl": "fileUrl0",
        "fileSize": 246,
        "fileFormat": "fileFormat2",
        "description": "description6"
      }
    }
  ]
}
```


-----------------------------------

# ./doc/models/equipment-group.md


# Equipment Group

## Structure

`EquipmentGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string \| undefined` | Optional | Unique identifier for the equipment group. |
| `equipmentGroupName` | `string \| undefined` | Optional | Name of the equipment group, localized. |
| `equipmentGroupParent` | `string \| null \| undefined` | Optional | parent group CODE for hierarchical structuring. |
| `equipmentGroupEquipment` | `string[] \| undefined` | Optional | - |
| `equipmentGroupThumbnail` | [`MediaAsset \| undefined`] | Optional | - |
| `sortOrder` | `number \| undefined` | Optional | Used to sort the equipment groups<br>**Default**: `0` |

## Example (as JSON)

```json
{
  "equipmentGroupCode": "DUMBBELLS",
  "equipmentGroupName": "Dumbbells",
  "equipmentGroupParent": "FREE_WEIGHTS",
  "sortOrder": 0,
  "equipmentGroupEquipment": [
    "equipmentGroupEquipment9"
  ],
  "equipmentGroupThumbnail": {
    "mediaId": "00000372-0000-0000-0000-000000000000",
    "fileName": "fileName8",
    "filePath": "filePath6",
    "fileUrl": "fileUrl8",
    "fileSize": 182,
    "fileFormat": "fileFormat0",
    "description": "description4"
  }
}
```


-----------------------------------

# ./doc/controllers/exercise-library-muscles.md

# Exercise Library Muscles

```ts
const exerciseLibraryMusclesController = new ExerciseLibraryMusclesController(client);
```

## Class Name

`ExerciseLibraryMusclesController`

## Methods

* [Get Muscles]
* [Get Muscle Translations]
* [Update Muscle Translations]


# Get Muscles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscles(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code to filter muscles by language<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesController.getMuscles(localeCode);
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
| 400 | Failed to retrieve muscles | [`Muscles400Error`] |


# Get Muscle Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscleTranslations(  muscleCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Template, Required | The unique identifier code of the muscle to retrieve translations for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleTranslationListResponse`]

## Example Usage

```ts
const muscleCode = 'muscleCode0';

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesController.getMuscleTranslations(muscleCode);
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
| 400 | Failed to retrieve muscle translations | [`JustGainsErrorResponseError`] |
| 404 | Muscle not found | [`JustGainsErrorResponseError`] |


# Update Muscle Translations

```ts
async updateMuscleTranslations(  muscleCode: string,
  body: MuscleTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<MusclesTranslationsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Template, Required | The unique identifier code of the muscle to update translations for |
| `body` | [`MuscleTranslation[]`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MusclesTranslationsResponse1`]

## Example Usage

```ts
const muscleCode = 'muscleCode0';

const body: MuscleTranslation[] = [
  {
    muscleCode: '',
    localeCode: 'en-US',
    muscleName: 'Quadriceps',
  }
];

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesController.updateMuscleTranslations(
  muscleCode,
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
| 400 | Failed to update muscle translations | [`JustGainsErrorResponseError`] |
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |
| 404 | Muscle not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/common-media-assets.md

# Common Media Assets

```ts
const commonMediaAssetsController = new CommonMediaAssetsController(client);
```

## Class Name

`CommonMediaAssetsController`

## Methods

* [Get Media Assets]
* [Upload a New Media Asset]
* [Get Media Asset]
* [Update a Media Asset]
* [Delete a Media Asset]
* [Get Media Asset Detail]


# Get Media Assets

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMediaAssets(  page?: number,
  pageSize?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | **Default**: `1` |
| `pageSize` | `number \| undefined` | Query, Optional | **Default**: `20` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetListResponse`]

## Example Usage

```ts
const page = 1;

const pageSize = 20;

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.getMediaAssets(
  page,
  pageSize
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


# Upload a New Media Asset

```ts
async uploadANewMediaAsset(  file?: FileWrapper,
  mediaType?: string,
  description?: string,
  uploadDirectory?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `file` | `FileWrapper \| undefined` | Form, Optional | - |
| `mediaType` | `string \| undefined` | Form, Optional | **Constraints**: *Pattern*: `^[a-z]+/[a-z]+$` |
| `description` | `string \| undefined` | Form, Optional | - |
| `uploadDirectory` | `string \| undefined` | Form, Optional | Optional. Specify a custom upload directory. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetResponse`]

## Example Usage

```ts
const mediaType = 'image/jpeg';

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.uploadANewMediaAsset(
  undefined,
  mediaType
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


# Get Media Asset

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMediaAsset(  mediaAssetId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetResponse`]

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.getMediaAsset(mediaAssetId);
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
| 404 | Media asset not found | [`JustGainsErrorResponseError`] |


# Update a Media Asset

```ts
async updateAMediaAsset(  mediaAssetId: string,
  body: MediaAsset,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `body` | [`MediaAsset`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetResponse`]

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

const body: MediaAsset = {
  mediaId: '7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b',
  fileName: '',
  filePath: '',
  fileSize: 0,
};

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.updateAMediaAsset(
  mediaAssetId,
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
| 404 | Media asset not found | [`JustGainsErrorResponseError`] |


# Delete a Media Asset

```ts
async deleteAMediaAsset(  mediaAssetId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.deleteAMediaAsset(mediaAssetId);
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
| 404 | Media asset not found | [`JustGainsErrorResponseError`] |


# Get Media Asset Detail

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMediaAssetDetail(  mediaAssetId: string,
  fileName: string,
requestOptions?: RequestOptions): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `fileName` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

const fileName = 'fileName4';

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.getMediaAssetDetail(
  mediaAssetId,
  fileName
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
| 404 | Media asset not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/workouts.md

# Workouts

Core workout management functionality.

```ts
const workoutsController = new WorkoutsController(client);
```

## Class Name

`WorkoutsController`

## Methods

* [Get a Paginated List of Workouts]
* [Create a New Workout]
* [Get a Workout by ID]
* [Update a Workout by ID]
* [Delete a Workout]
* [Get a Workout by Workout Slug]
* [Bookmark Workout]
* [Remove Workout Bookmark]
* [Duplicate a Workout]


# Get a Paginated List of Workouts

```ts
async getAPaginatedListOfWorkouts(  page?: number,
  pageSize?: number,
  sortBy?: string,
  sortOrder?: SortOrderEnum,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutTableListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | The page number to retrieve<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to retrieve per page<br>**Default**: `20`<br>**Constraints**: `>= 1`, `<= 100` |
| `sortBy` | `string \| undefined` | Query, Optional | - |
| `sortOrder` | [`SortOrderEnum \| undefined`] | Query, Optional | The order to sort the results in<br>**Default**: `SortOrderEnum.Desc` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutTableListResponse`]

## Example Usage

```ts
const page = 1;

const pageSize = 20;

const sortOrder = SortOrderEnum.Desc;

try {
  const { result, ...httpResponse } = await workoutsController.getAPaginatedListOfWorkouts(
  page,
  pageSize,
  undefined,
  sortOrder
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
| 400 | Invalid pagination parameters | [`JustGainsErrorResponseError`] |


# Create a New Workout

Creates a new workout with the provided data. Requires authentication. All fields are optional and update based on what's submitted.

```ts
async createANewWorkout(  body: WorkoutRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WorkoutRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`]

## Example Usage

```ts
const body: WorkoutRequest = {
  workoutTitle: 'Full Body Strength Training',
  workoutContent: {  },
};

try {
  const { result, ...httpResponse } = await workoutsController.createANewWorkout(body);
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
| 400 | Invalid workout data | [`JustGainsErrorResponseError`] |


# Get a Workout by ID

```ts
async getAWorkoutByID(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsController.getAWorkoutByID(workoutId);
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Update a Workout by ID

Updates an existing workout with the provided data. Requires authentication. All fields are optional and update based on what's submitted.

```ts
async updateAWorkoutByID(  workoutId: string,
  body: WorkoutRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to update |
| `body` | [`WorkoutRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const body: WorkoutRequest = {
  workoutTitle: 'Full Body Strength Training',
  workoutContent: {  },
};

try {
  const { result, ...httpResponse } = await workoutsController.updateAWorkoutByID(
  workoutId,
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
| 400 | Invalid workout data | [`JustGainsErrorResponseError`] |
| 403 | Permission denied | [`JustGainsErrorResponseError`] |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Delete a Workout

Soft-deletes a workout and all associated data

```ts
async deleteAWorkout(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to delete |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsController.deleteAWorkout(workoutId);
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
| 400 | Invalid workout ID format | [`JustGainsErrorResponseError`] |
| 403 | Permission denied | [`JustGainsErrorResponseError`] |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Get a Workout by Workout Slug

```ts
async getAWorkoutByWorkoutSlug(  workoutSlug: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutSlug` | `string` | Template, Required | The URL slug of the workout |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`]

## Example Usage

```ts
const workoutSlug = 'full-body-strength-training';

try {
  const { result, ...httpResponse } = await workoutsController.getAWorkoutByWorkoutSlug(workoutSlug);
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Bookmark Workout

Adds the specified workout to the current user's bookmarks. If the workout is already bookmarked, the request is idempotent and will not create a duplicate.

:information_source: **Note** This endpoint does not require authentication.

```ts
async bookmarkWorkout(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier of the workout to bookmark |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const workoutId = '00000e9a-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await workoutsController.bookmarkWorkout(workoutId);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | - | `ApiError` |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Remove Workout Bookmark

Removes the specified workout from the current user's bookmarks. If the workout is not bookmarked, the request is idempotent and will not result in an error.

:information_source: **Note** This endpoint does not require authentication.

```ts
async removeWorkoutBookmark(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier of the workout to remove from bookmarks |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const workoutId = '00000e9a-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await workoutsController.removeWorkoutBookmark(workoutId);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | - | `ApiError` |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Duplicate a Workout

Creates a copy of an existing workout, preserving creator credits and adding the current user as a new contributor.

```ts
async duplicateAWorkout(  workoutId: string,
  body: WorkoutsDuplicateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to duplicate |
| `body` | [`WorkoutsDuplicateRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const body: WorkoutsDuplicateRequest = {
  newWorkoutTitle: 'My Modified Full Body Workout',
};

try {
  const { result, ...httpResponse } = await workoutsController.duplicateAWorkout(
  workoutId,
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
| 400 | Invalid request data | [`JustGainsErrorResponseError`] |
| 403 | Permission denied | [`JustGainsErrorResponseError`] |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/exercise-library-exercises.md

# Exercise Library Exercises

```ts
const exerciseLibraryExercisesController = new ExerciseLibraryExercisesController(client);
```

## Class Name

`ExerciseLibraryExercisesController`

## Methods

* [Get Exercises]
* [Create a New Exercise]
* [Get Exercise]
* [Update an Exercise]
* [Delete an Exercise]
* [Get Exercise Translations]
* [Update Exercise Translations]
* [Get Exercise Muscle Group]


# Get Exercises

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExercises(  nameSearch?: string,
  exerciseCategoryCodes?: string[],
  exerciseTypeCodes?: string[],
  exerciseEquipmentCodes?: string[],
  exerciseMuscleCodes?: string[],
  exerciseMetricCodes?: string[],
  publishedStatusCodes?: string[],
  localeCode?: string,
  pageIndex?: number,
  pageSize?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nameSearch` | `string \| undefined` | Query, Optional | List of exercise names to filter by |
| `exerciseCategoryCodes` | `string[] \| undefined` | Query, Optional | List of exercise category codes to filter by<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `exerciseTypeCodes` | `string[] \| undefined` | Query, Optional | List of exercise types to filter by<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `exerciseEquipmentCodes` | `string[] \| undefined` | Query, Optional | List of exercise equipment to filter by<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `exerciseMuscleCodes` | `string[] \| undefined` | Query, Optional | List of exercise muscles to filter by (not muscle group)<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `exerciseMetricCodes` | `string[] \| undefined` | Query, Optional | List of exercise metrics to filter by<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `publishedStatusCodes` | `string[] \| undefined` | Query, Optional | List of publish statuses to filter by<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `localeCode` | `string \| undefined` | Query, Optional | Locale to filter by<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `pageIndex` | `number \| undefined` | Query, Optional | Page index for pagination<br>**Default**: `1` |
| `pageSize` | `number \| undefined` | Query, Optional | Page size for pagination<br>**Default**: `100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseListResponse`]

## Example Usage

```ts
const nameSearch = 'Bench Press';

const exerciseCategoryCodes: string[] = [
  'STRENGTH',
  'CARDIO'
];

const localeCode = 'en-US';

const pageIndex = 1;

const pageSize = 100;

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.getExercises(
  nameSearch,
  exerciseCategoryCodes,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  localeCode,
  pageIndex,
  pageSize
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Create a New Exercise

```ts
async createANewExercise(  body: ExerciseUpdateRequest,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseUpdateRequest`] | Body, Required | - |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code to specify the language to return the newly created exercise in.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseResponse`]

## Example Usage

```ts
const body: ExerciseUpdateRequest = {
  exerciseCode: 'BARBELL_SQUAT',
  exerciseCategories: [
    'STRENGTH',
    'CARDIO'
  ],
  exerciseTypeCode: 'STRENGTH',
  publishStatusCode: PublishStatusCodeEnum.UNREVIEWED,
  difficulty: 7,
  metabolicEquivalent: 8.5,
  isPlateloaded: true,
  isCardio: false,
  olympicRating: 5,
  powerLifterRating: 5,
  calisthenicRating: 5,
  popularityRating: 5,
  isPlyometric: true,
  isIsometric: false,
  isCalisthenic: true,
  isWeighted: false,
  isUnilateral: true,
  isBodyweight: true,
  isVariant: false,
  adminNotes: 'This exercise requires supervision.',
};

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.createANewExercise(
  body,
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
| 400 | Invalid exercise data | [`JustGainsErrorResponseError`] |


# Get Exercise

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExercise(  exerciseCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | - |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code to specify the language for exercise details<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.getExercise(
  exerciseCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise not found | [`JustGainsErrorResponseError`] |


# Update an Exercise

```ts
async updateAnExercise(  exerciseCode: string,
  body: ExerciseUpdateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | - |
| `body` | [`ExerciseUpdateRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const body: ExerciseUpdateRequest = {
  exerciseCode: 'BARBELL_SQUAT',
  exerciseCategories: [
    'STRENGTH',
    'CARDIO'
  ],
  exerciseTypeCode: 'STRENGTH',
  publishStatusCode: PublishStatusCodeEnum.UNREVIEWED,
  difficulty: 7,
  metabolicEquivalent: 8.5,
  isPlateloaded: true,
  isCardio: false,
  olympicRating: 5,
  powerLifterRating: 5,
  calisthenicRating: 5,
  popularityRating: 5,
  isPlyometric: true,
  isIsometric: false,
  isCalisthenic: true,
  isWeighted: false,
  isUnilateral: true,
  isBodyweight: true,
  isVariant: false,
  adminNotes: 'This exercise requires supervision.',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.updateAnExercise(
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
| 400 | Invalid exercise data | [`JustGainsErrorResponseError`] |


# Delete an Exercise

```ts
async deleteAnExercise(  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.deleteAnExercise(exerciseCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |
| 404 | Exercise not found | [`JustGainsErrorResponseError`] |


# Get Exercise Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseTranslations(  exerciseCode: string,
  localeCode?: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The unique code of the exercise |
| `localeCode` | `string[] \| undefined` | Query, Optional | The locale codes to filter by (e.g., 'en-US', 'es-ES')<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseTranslationListResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.getExerciseTranslations(exerciseCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise translations not found | [`JustGainsErrorResponseError`] |


# Update Exercise Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateExerciseTranslations(  exerciseCode: string,
  body: ExerciseTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The unique code of the exercise |
| `body` | [`ExerciseTranslation[]`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const body: ExerciseTranslation[] = [
  {
    localeCode: 'en-US',
  }
];

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.updateExerciseTranslations(
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise not found | [`JustGainsErrorResponseError`] |
| 422 | Validation error | [`JustGainsErrorResponseError`] |


# Get Exercise Muscle Group

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseMuscleGroup(  exerciseCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleGroupDtoResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The unique code of the exercise |
| `localeCode` | `string \| undefined` | Query, Optional | The locale code for the muscle group names (e.g., 'en-US', 'es-ES')<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleGroupDtoResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.getExerciseMuscleGroup(
  exerciseCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/users.md

# Users

User account management operations.

```ts
const usersController = new UsersController(client);
```

## Class Name

`UsersController`

## Methods

* [Get a List of All Users for Admin Management]
* [Get a User by ID]
* [Update a User]
* [Delete a User]
* [Assign User Creator Profile]


# Get a List of All Users for Admin Management

```ts
async getAListOfAllUsersForAdminManagement(requestOptions?: RequestOptions): Promise<ApiResponse<UserInfoListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserInfoListResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersController.getAListOfAllUsersForAdminManagement();
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
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 403 | Access denied | [`JustGainsErrorResponseError`] |


# Get a User by ID

```ts
async getAUserByID(  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | **Constraints**: *Pattern*: `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`]

## Example Usage

```ts
const userId = '123e4567-e89b-12d3-a456-426614174000';

try {
  const { result, ...httpResponse } = await usersController.getAUserByID(userId);
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
| 400 | Invalid user ID format | [`JustGainsErrorResponseError`] |
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 403 | Access denied | [`JustGainsErrorResponseError`] |
| 404 | User not found | [`JustGainsErrorResponseError`] |


# Update a User

```ts
async updateAUser(  userId: string,
  body: UpdateUserRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `body` | [`UpdateUserRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`]

## Example Usage

```ts
const userId = 'userId0';

const body: UpdateUserRequest = {
  creatorProfileId: '123e4567-e89b-12d3-a456-426614174000',
  email: 'jane.doe@example.com',
};

try {
  const { result, ...httpResponse } = await usersController.updateAUser(
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
| 400 | Invalid user data | [`JustGainsErrorResponseError`] |
| 404 | User not found | [`JustGainsErrorResponseError`] |


# Delete a User

```ts
async deleteAUser(  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await usersController.deleteAUser(userId);
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
| 404 | User not found | [`JustGainsErrorResponseError`] |


# Assign User Creator Profile

```ts
async assignUserCreatorProfile(  creatorProfileId: string,
  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | The ID of the creator profile to assign to the user |
| `userId` | `string` | Template, Required | The ID of the user to assign the creator profile to |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### userRoles

`ADMIN`

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const creatorProfileId = '12345678-1234-1234-1234-123456789012';

const userId = '12345678-1234-1234-1234-123456789012';

try {
  const { result, ...httpResponse } = await usersController.assignUserCreatorProfile(
  creatorProfileId,
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
| 400 | Failed to assign creator profile to user | [`JustGainsErrorResponseError`] |
| 409 | Creator profile is already assigned to another user | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/exercise-library-exercise-drafts.md

# Exercise Library Exercise Drafts

```ts
const exerciseLibraryExerciseDraftsController = new ExerciseLibraryExerciseDraftsController(client);
```

## Class Name

`ExerciseLibraryExerciseDraftsController`


# Create Update an Exercise With Exercise Draft DTO

```ts
async createUpdateAnExerciseWithExerciseDraftDTO(  body: ExerciseDraftDTO,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseDraftDTO`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseResponse`]

## Example Usage

```ts
const body: ExerciseDraftDTO = {};

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseDraftsController.createUpdateAnExerciseWithExerciseDraftDTO(body);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/exercise-library-muscles-muscle-groups.md

# Exercise Library Muscles Muscle Groups

```ts
const exerciseLibraryMusclesMuscleGroupsController = new ExerciseLibraryMusclesMuscleGroupsController(client);
```

## Class Name

`ExerciseLibraryMusclesMuscleGroupsController`

## Methods

* [Get Muscle Groups]
* [Create a New Muscle Group]
* [Update Muscle Group]
* [Delete a Muscle Group]
* [Get Muscle Group Translations]
* [Update Muscle Group Translations]


# Get Muscle Groups

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscleGroups(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleGroupListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized muscle group names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleGroupListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.getMuscleGroups(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Muscle Group

```ts
async createANewMuscleGroup(  body: MuscleGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MuscleGroup`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: MuscleGroup = {
  muscleGroupCode: 'CHEST',
  muscleGroupParent: 'UPPER_BODY',
  muscleGroupMuscles: [
    'PECTORALIS_MAJOR_STERNAL_HEAD',
    'ANTERIOR_DELTOID',
    'TRICEPS_BRACHII',
    'RECTUS_ABDOMINIS',
    'LATISSIMUS_DORSI',
    'BICEPS_BRACHII',
    'QUADRICEPS_FEMORIS',
    'HAMSTRINGS',
    'GASTROCNEMIUS'
  ],
  muscleGroupType: MuscleGroupTypeEnum.MainGroup,
};

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.createANewMuscleGroup(body);
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
| 400 | Invalid muscle group data | [`JustGainsErrorResponseError`] |
| 401 | Authentication required | [`JustGainsErrorResponseError`] |


# Update Muscle Group

```ts
async updateMuscleGroup(  muscleGroupCode: string,
  body: MuscleGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The muscle group code to update.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`MuscleGroup`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

const body: MuscleGroup = {
  muscleGroupCode: 'CHEST',
  muscleGroupParent: 'UPPER_BODY',
  muscleGroupMuscles: [
    'PECTORALIS_MAJOR_STERNAL_HEAD',
    'ANTERIOR_DELTOID',
    'TRICEPS_BRACHII',
    'RECTUS_ABDOMINIS',
    'LATISSIMUS_DORSI',
    'BICEPS_BRACHII',
    'QUADRICEPS_FEMORIS',
    'HAMSTRINGS',
    'GASTROCNEMIUS'
  ],
  muscleGroupType: MuscleGroupTypeEnum.MainGroup,
};

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.updateMuscleGroup(
  muscleGroupCode,
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
| 400 | Invalid muscle group data | [`JustGainsErrorResponseError`] |
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 404 | Muscle group not found | [`JustGainsErrorResponseError`] |


# Delete a Muscle Group

```ts
async deleteAMuscleGroup(  muscleGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The muscle group code to delete.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.deleteAMuscleGroup(muscleGroupCode);
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
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 404 | Muscle group not found | [`JustGainsErrorResponseError`] |


# Get Muscle Group Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscleGroupTranslations(  muscleGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleGroupTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The unique code of the muscle group<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleGroupTranslationListResponse`]

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.getMuscleGroupTranslations(muscleGroupCode);
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
| 400 | Failed to retrieve muscle group translations | [`JustGainsErrorResponseError`] |
| 404 | Muscle group not found | [`JustGainsErrorResponseError`] |


# Update Muscle Group Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateMuscleGroupTranslations(  muscleGroupCode: string,
  body: MuscleGroupTranslation[],
  localeCodes?: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The unique code of the muscle group<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`MuscleGroupTranslation[]`] | Body, Required | - |
| `localeCodes` | `string[] \| undefined` | Query, Optional | The array of locales for the instructions (e.g., 'en-US', 'es-ES')<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

const body: MuscleGroupTranslation[] = [
  {
    localeCode: 'en-US',
    muscleGroupName: 'Quadriceps',
    muscleGroupDescription: 'The quadriceps femoris is a large muscle group located on the front of the thigh.',
  }
];

const localeCodes: string[] = [
  'en-US',
  'es-ES'
];

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.updateMuscleGroupTranslations(
  muscleGroupCode,
  body,
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
| 400 | Failed to update muscle group translations | [`JustGainsErrorResponseError`] |
| 404 | Muscle group not found | [`JustGainsErrorResponseError`] |
| 422 | Validation error | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/exercise-library-exercises-exercise-instructions.md

# Exercise Library Exercises Exercise Instructions

```ts
const exerciseLibraryExercisesExerciseInstructionsController = new ExerciseLibraryExercisesExerciseInstructionsController(client);
```

## Class Name

`ExerciseLibraryExercisesExerciseInstructionsController`

## Methods

* [Get Exercise Instructions]
* [Get Exercise Instruction]
* [Update Exercise Instructions]


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

[`ExerciseInstructionListResponse`]

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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise instructions not found | [`JustGainsErrorResponseError`] |


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

[`ExerciseInstructionResponse`]

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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise instructions not found | [`JustGainsErrorResponseError`] |


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
| `body` | [`ExerciseInstruction`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseInstructionResponse`]

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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |
| 404 | Exercise instructions not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/users-roles.md

# Users Roles

Manage User roles.

```ts
const usersRolesController = new UsersRolesController(client);
```

## Class Name

`UsersRolesController`

## Methods

* [Assign a Role to a User]
* [Get User Roles]
* [Get All Roles]
* [Create a New Role]
* [Update a Role]
* [Delete a Role]


# Assign a Role to a User

:information_source: **Note** This endpoint does not require authentication.

```ts
async assignARoleToAUser(  userId: string,
  body: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<UsersRolesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `body` | `string[]` | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsersRolesResponse`]

## Example Usage

```ts
const userId = '000013ec-0000-0000-0000-000000000000';

const body: string[] = [
  'body4',
  'body5'
];

try {
  const { result, ...httpResponse } = await usersRolesController.assignARoleToAUser(
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


# Get User Roles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getUserRoles(  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<UsersRolesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsersRolesResponse1`]

## Example Usage

```ts
const userId = '000013ec-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await usersRolesController.getUserRoles(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Roles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAllRoles(requestOptions?: RequestOptions): Promise<ApiResponse<RolesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RolesResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersRolesController.getAllRoles();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Role

:information_source: **Note** This endpoint does not require authentication.

```ts
async createANewRole(  body: RoleCreateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<RolesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RoleCreateRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RolesResponse1`]

## Example Usage

```ts
const body: RoleCreateRequest = {
  roleName: 'roleName0',
};

try {
  const { result, ...httpResponse } = await usersRolesController.createANewRole(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Role

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateARole(  roleName: string,
  body: RoleUpdateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<RolesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleName` | `string` | Template, Required | - |
| `body` | [`RoleUpdateRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RolesResponse1`]

## Example Usage

```ts
const roleName = 'roleName6';

const body: RoleUpdateRequest = {};

try {
  const { result, ...httpResponse } = await usersRolesController.updateARole(
  roleName,
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


# Delete a Role

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteARole(  roleName: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleName` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const roleName = 'roleName6';

try {
  const { result, ...httpResponse } = await usersRolesController.deleteARole(roleName);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


-----------------------------------

# ./doc/controllers/users-social-media-accounts.md

# Users Social Media Accounts

```ts
const usersSocialMediaAccountsController = new UsersSocialMediaAccountsController(client);
```

## Class Name

`UsersSocialMediaAccountsController`

## Methods

* [List Users Social Media Accounts]
* [Create Social Media Platform]
* [Get Social Media Platform]
* [Update Social Media Platform]
* [Delete Social Media Platform]
* [Validate Social Media Username]


# List Users Social Media Accounts

Retrieve a list of Users|Social Media Accounts with optional name filter

:information_source: **Note** This endpoint does not require authentication.

```ts
async listUsersSocialMediaAccounts(  name?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Query, Optional | Filter platforms by name |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformListResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.listUsersSocialMediaAccounts();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Social Media Platform

Create a new social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async createSocialMediaPlatform(  body: SocialMediaPlatformCreate,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SocialMediaPlatformCreate`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformResponse`]

## Example Usage

```ts
const body: SocialMediaPlatformCreate = {
  socialMediaPlatformCode: 'INSTAGRAM',
  socialMediaPlatformName: 'Instagram',
  socialMediaPlatformUrlFormat: 'https://www.instagram.com/{username}',
  socialMediaPlatformIcon: '123e4567-e89b-12d3-a456-426614174000',
};

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.createSocialMediaPlatform(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Social Media Platform

Retrieve details of a specific social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async getSocialMediaPlatform(  socialMediaPlatformCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The unique code of the social media platform |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformResponse`]

## Example Usage

```ts
const socialMediaPlatformCode = 'socialMediaPlatformCode4';

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.getSocialMediaPlatform(socialMediaPlatformCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Social Media Platform

Update an existing social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateSocialMediaPlatform(  socialMediaPlatformCode: string,
  body: SocialMediaPlatformUpdate,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The unique code of the social media platform |
| `body` | [`SocialMediaPlatformUpdate`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformResponse`]

## Example Usage

```ts
const socialMediaPlatformCode = 'socialMediaPlatformCode4';

const body: SocialMediaPlatformUpdate = {
  socialMediaPlatformName: 'Instagram',
  socialMediaPlatformUrlFormat: 'https://www.instagram.com/{username}',
  socialMediaPlatformIcon: '123e4567-e89b-12d3-a456-426614174000',
};

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.updateSocialMediaPlatform(
  socialMediaPlatformCode,
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


# Delete Social Media Platform

Delete a social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteSocialMediaPlatform(  socialMediaPlatformCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The unique code of the social media platform |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const socialMediaPlatformCode = 'socialMediaPlatformCode4';

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.deleteSocialMediaPlatform(socialMediaPlatformCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Validate Social Media Username

:information_source: **Note** This endpoint does not require authentication.

```ts
async validateSocialMediaUsername(  socialMediaPlatformCode: string,
  username: string,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformsValidateUsernameResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The code of the social media platform to check against<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `username` | `string` | Template, Required | The username to validate |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformsValidateUsernameResponse`]

## Example Usage

```ts
const socialMediaPlatformCode = 'INSTAGRAM';

const username = 'fitness_guru';

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.validateSocialMediaUsername(
  socialMediaPlatformCode,
  username
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/exercise-library-equipment.md

# Exercise Library Equipment

```ts
const exerciseLibraryEquipmentController = new ExerciseLibraryEquipmentController(client);
```

## Class Name

`ExerciseLibraryEquipmentController`

## Methods

* [Get Equipments]
* [Create Equipment]
* [Get Equipment]
* [Update Equipment]
* [Delete Equipment]
* [Get Equipment Translations]
* [Update Equipment Translations]


# Get Equipments

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipments(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized equipment names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.getEquipments(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Equipment

```ts
async createEquipment(  body: Equipment,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Equipment`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: Equipment = {
  equipmentCode: 'BARBELL',
  equipmentEquipmentGroups: [
    'WEIGHTS',
    'FREE_WEIGHTS'
  ],
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.createEquipment(body);
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
| 400 | Invalid request data. | [`JustGainsErrorResponseError`] |


# Get Equipment

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipment(  equipmentCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment. |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized equipment names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentResponse`]

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.getEquipment(
  equipmentCode,
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
| 404 | Equipment not found with the given code. | [`JustGainsErrorResponseError`] |


# Update Equipment

```ts
async updateEquipment(  equipmentCode: string,
  body: Equipment,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment to update. |
| `body` | [`Equipment`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const body: Equipment = {
  equipmentCode: 'BARBELL',
  equipmentEquipmentGroups: [
    'WEIGHTS',
    'FREE_WEIGHTS'
  ],
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.updateEquipment(
  equipmentCode,
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
| 400 | Bad request. Invalid input data. | [`JustGainsErrorResponseError`] |
| 404 | Equipment not found with the given code. | [`JustGainsErrorResponseError`] |
| 409 | Conflict. The equipment code already exists for a different equipment. | [`JustGainsErrorResponseError`] |


# Delete Equipment

```ts
async deleteEquipment(  equipmentCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.deleteEquipment(equipmentCode);
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
| 400 | Failed to delete the equipment or equipment does not exist. | [`JustGainsErrorResponseError`] |


# Get Equipment Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipmentTranslations(  equipmentCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code of the equipment |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentTranslationListResponse`]

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.getEquipmentTranslations(equipmentCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Equipment not found | [`JustGainsErrorResponseError`] |


# Update Equipment Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateEquipmentTranslations(  equipmentCode: string,
  body: EquipmentTranslation,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code of the equipment |
| `body` | [`EquipmentTranslation`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const body: EquipmentTranslation = {
  equipmentName: 'Barbell',
  localeCode: 'en-US',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.updateEquipmentTranslations(
  equipmentCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Equipment not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/common-published-status.md

# Common Published Status

```ts
const commonPublishedStatusController = new CommonPublishedStatusController(client);
```

## Class Name

`CommonPublishedStatusController`

## Methods

* [Get All Published Status]
* [Create Update a Published Status]
* [Delete a Published Status]


# Get All Published Status

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAllPublishedStatus(requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusListResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await commonPublishedStatusController.getAllPublishedStatus();
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Create Update a Published Status

```ts
async createUpdateAPublishedStatus(  publishedStatusCode: string,
  body: PublishedStatus,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | **Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`PublishedStatus`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

const body: PublishedStatus = {
  userRoleAccess: 'ADMIN,USER',
};

try {
  const { result, ...httpResponse } = await commonPublishedStatusController.createUpdateAPublishedStatus(
  publishedStatusCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Published status not found | [`JustGainsErrorResponseError`] |


# Delete a Published Status

```ts
async deleteAPublishedStatus(  publishedStatusCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | **Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

try {
  const { result, ...httpResponse } = await commonPublishedStatusController.deleteAPublishedStatus(publishedStatusCode);
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
| 404 | Published status not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/common-locales.md

# Common Locales

```ts
const commonLocalesController = new CommonLocalesController(client);
```

## Class Name

`CommonLocalesController`

## Methods

* [Get Locales]
* [Create a New Locale]
* [Get Locale]
* [Update a Locale]
* [Delete a Locale]


# Get Locales

:information_source: **Note** This endpoint does not require authentication.

```ts
async getLocales(  showAll: boolean,
requestOptions?: RequestOptions): Promise<ApiResponse<LocaleListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `showAll` | `boolean` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocaleListResponse`]

## Example Usage

```ts
const showAll = false;

try {
  const { result, ...httpResponse } = await commonLocalesController.getLocales(showAll);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Locale

```ts
async createANewLocale(  body: Locale,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Locale`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: Locale = {
  localeName: 'English (United States)',
  published: true,
};

try {
  const { result, ...httpResponse } = await commonLocalesController.createANewLocale(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Locale

:information_source: **Note** This endpoint does not require authentication.

```ts
async getLocale(  localeCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<LocaleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Template, Required | The locale code to retrieve.<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocaleResponse`]

## Example Usage

```ts
const localeCode = 'localeCode2';

try {
  const { result, ...httpResponse } = await commonLocalesController.getLocale(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Locale

```ts
async updateALocale(  localeCode: string,
  body: Locale,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Template, Required | The locale code to update.<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `body` | [`Locale`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const localeCode = 'localeCode2';

const body: Locale = {
  localeName: 'English (United States)',
  published: true,
};

try {
  const { result, ...httpResponse } = await commonLocalesController.updateALocale(
  localeCode,
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


# Delete a Locale

```ts
async deleteALocale(  localeCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Template, Required | The locale code to delete.<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const localeCode = 'localeCode2';

try {
  const { result, ...httpResponse } = await commonLocalesController.deleteALocale(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


-----------------------------------

# ./doc/controllers/status.md

# Status

Verify API status.

```ts
const statusController = new StatusController(client);
```

## Class Name

`StatusController`

## Methods

* [Check Server Alive]
* [Test Unauthorized]


# Check Server Alive

Returns a simple message to indicate that the API is working.

:information_source: **Note** This endpoint does not require authentication.

```ts
async checkServerAlive(requestOptions?: RequestOptions): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await statusController.checkServerAlive();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
"All is working!"
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 404 | Not found | `ApiError` |


# Test Unauthorized

Returns a JSON response simulating an unauthorized access attempt.

:information_source: **Note** This endpoint does not require authentication.

```ts
async testUnauthorized(requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await statusController.testUnauthorized();
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
| 401 | Unauthorized response | [`JustGainsResponseError`] |


-----------------------------------

# ./doc/controllers/exercise-library-exercise-metrics.md

# Exercise Library Exercise Metrics

```ts
const exerciseLibraryExerciseMetricsController = new ExerciseLibraryExerciseMetricsController(client);
```

## Class Name

`ExerciseLibraryExerciseMetricsController`

## Methods

* [Get Exercise Metrics]
* [Create a New Exercise Metric]
* [Update an Exercise Metric]
* [Delete an Exercise Metric]


# Get Exercise Metrics

Retrieve a list of all exercise metrics - Since the exercise type is never displayed, we don't have a translation for it.

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

[`ExerciseMetricListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseMetricsController.getExerciseMetrics(localeCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Create a New Exercise Metric

```ts
async createANewExerciseMetric(  body: ExerciseMetric,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseMetric`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: ExerciseMetric = {
  exerciseMetricCode: 'WEIGHT',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseMetricsController.createANewExerciseMetric(body);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


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
| `body` | [`ExerciseMetric`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const metricCode = 'metricCode4';

const body: ExerciseMetric = {
  exerciseMetricCode: 'WEIGHT',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseMetricsController.updateAnExerciseMetric(
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise metric not found | [`JustGainsErrorResponseError`] |


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

[`JustGainsResponse`]

## Example Usage

```ts
const metricCode = 'metricCode4';

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseMetricsController.deleteAnExerciseMetric(metricCode);
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
| 404 | Exercise metric not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/workouts-workout-data.md

# Workouts Workout Data

```ts
const workoutsWorkoutDataController = new WorkoutsWorkoutDataController(client);
```

## Class Name

`WorkoutsWorkoutDataController`

## Methods

* [Get Workout Data by Id]
* [Update Workout Data by Workout ID]
* [Get Workout Detail by Id]
* [Update Exercise in the Workout]
* [Deletes an Exercise From the Workout]


# Get Workout Data by Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getWorkoutDataById(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataListResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.getWorkoutDataById(workoutId);
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Update Workout Data by Workout ID

```ts
async updateWorkoutDataByWorkoutID(  workoutId: string,
  body: WorkoutData[],
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | - |
| `body` | [`WorkoutData[]`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataListResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const body: WorkoutData[] = [
  {
    exerciseCode: 'BARBELL_SQUAT',
    exerciseNotes: 'Keep your core tight throughout the movement',
    exerciseOrder: 2,
    exerciseGroupID: 1,
    exerciseGroupType: ExerciseGroupTypeEnum.SUPERSET,
  }
];

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.updateWorkoutDataByWorkoutID(
  workoutId,
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
| 400 | Invalid workout data | [`JustGainsErrorResponseError`] |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Get Workout Detail by Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getWorkoutDetailById(  workoutId: string,
  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier code of the workout to retrieve the exercise from |
| `exerciseCode` | `string` | Template, Required | The unique identifier code of the exercise to retrieve<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.getWorkoutDetailById(
  workoutId,
  exerciseCode
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
| 404 | Workout or exercise not found | [`JustGainsErrorResponseError`] |


# Update Exercise in the Workout

```ts
async updateExerciseInTheWorkout(  workoutId: string,
  exerciseCode: string,
  body: WorkoutData,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier code of the workout to update the exercise in |
| `exerciseCode` | `string` | Template, Required | The unique identifier code of the exercise to update<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`WorkoutData`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const exerciseCode = 'SQUAT';

const body: WorkoutData = {
  exerciseCode: 'BARBELL_SQUAT',
  exerciseNotes: 'Keep your core tight throughout the movement',
  exerciseOrder: 2,
  exerciseGroupID: 1,
  exerciseGroupType: ExerciseGroupTypeEnum.SUPERSET,
};

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.updateExerciseInTheWorkout(
  workoutId,
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
| 400 | Invalid exercise data | [`JustGainsErrorResponseError`] |
| 404 | Workout or exercise not found | [`JustGainsErrorResponseError`] |


# Deletes an Exercise From the Workout

```ts
async deletesAnExerciseFromTheWorkout(  workoutId: string,
  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier code of the workout to remove the exercise from |
| `exerciseCode` | `string` | Template, Required | The unique identifier code of the exercise to remove<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.deletesAnExerciseFromTheWorkout(
  workoutId,
  exerciseCode
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
| 404 | Workout or exercise not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/exercise-library-exercises-exercise-thumbnails.md

# Exercise Library Exercises Exercise Thumbnails

```ts
const exerciseLibraryExercisesExerciseThumbnailsController = new ExerciseLibraryExercisesExerciseThumbnailsController(client);
```

## Class Name

`ExerciseLibraryExercisesExerciseThumbnailsController`

## Methods

* [Get Exercise Thumbnails]
* [Get Exercise Thumbnail by User Id]
* [Add or Update Exercise Thumbnail]
* [Delete an Exercise Thumbnail]


# Get Exercise Thumbnails

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseThumbnails(  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseThumbnailListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve thumbnails for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseThumbnailListResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseThumbnailsController.getExerciseThumbnails(exerciseCode);
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
| 400 | Invalid exercise code | [`JustGainsErrorResponseError`] |
| 404 | Exercise thumbnails not found | [`JustGainsErrorResponseError`] |


# Get Exercise Thumbnail by User Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseThumbnailByUserId(  exerciseCode: string,
  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseThumbnailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve thumbnail for |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the creator whose thumbnail we're referencing |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseThumbnailResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseThumbnailsController.getExerciseThumbnailByUserId(
  exerciseCode,
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
| 400 | Invalid exercise code or user ID | [`JustGainsErrorResponseError`] |
| 404 | Exercise thumbnail not found | [`JustGainsErrorResponseError`] |


# Add or Update Exercise Thumbnail

```ts
async addOrUpdateExerciseThumbnail(  exerciseCode: string,
  creatorProfileId: string,
  body: MediaAssetAssignment,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseThumbnailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to add or update thumbnail for |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the thumbnail creator |
| `body` | [`MediaAssetAssignment`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseThumbnailResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

const body: MediaAssetAssignment = {
  mediaId: '7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseThumbnailsController.addOrUpdateExerciseThumbnail(
  exerciseCode,
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
| 400 | Invalid exercise thumbnail data | [`JustGainsErrorResponseError`] |
| 401 | Authentication required | [`JustGainsErrorResponseError`] |


# Delete an Exercise Thumbnail

```ts
async deleteAnExerciseThumbnail(  exerciseCode: string,
  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the thumbnail creator |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseThumbnailsController.deleteAnExerciseThumbnail(
  exerciseCode,
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
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 404 | Exercise thumbnail not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/exercise-library-equipment-equipment-groups.md

# Exercise Library Equipment Equipment Groups

```ts
const exerciseLibraryEquipmentEquipmentGroupsController = new ExerciseLibraryEquipmentEquipmentGroupsController(client);
```

## Class Name

`ExerciseLibraryEquipmentEquipmentGroupsController`

## Methods

* [Get Equipment Groups]
* [Add Equipment Group]
* [Update Equipment Group]
* [Delete an Equipment Group]
* [Get Equipment Group Translations]
* [Update Equipment Group Translations]


# Get Equipment Groups

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipmentGroups(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentGroupListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized equipment group names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentGroupListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.getEquipmentGroups(localeCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Add Equipment Group

```ts
async addEquipmentGroup(  body: EquipmentGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`EquipmentGroup`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: EquipmentGroup = {
  equipmentGroupCode: 'DUMBBELLS',
  equipmentGroupParent: 'FREE_WEIGHTS',
  sortOrder: 0,
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.addEquipmentGroup(body);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Update Equipment Group

```ts
async updateEquipmentGroup(  equipmentGroupCode: string,
  body: EquipmentGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The equipment group code to update. |
| `body` | [`EquipmentGroup`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const equipmentGroupCode = 'equipmentGroupCode8';

const body: EquipmentGroup = {
  equipmentGroupCode: 'DUMBBELLS',
  equipmentGroupParent: 'FREE_WEIGHTS',
  sortOrder: 0,
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.updateEquipmentGroup(
  equipmentGroupCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Delete an Equipment Group

```ts
async deleteAnEquipmentGroup(  equipmentGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The equipment group code to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const equipmentGroupCode = 'equipmentGroupCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.deleteAnEquipmentGroup(equipmentGroupCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Equipment Group Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipmentGroupTranslations(  equipmentGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentGroupTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The unique code of the equipment group |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentGroupTranslationListResponse`]

## Example Usage

```ts
const equipmentGroupCode = 'equipmentGroupCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.getEquipmentGroupTranslations(equipmentGroupCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Equipment group not found | [`JustGainsErrorResponseError`] |


# Update Equipment Group Translations

Updates the translations for a specific equipment group identified by its code.

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateEquipmentGroupTranslations(  equipmentGroupCode: string,
  body: EquipmentGroupTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The unique code of the equipment group |
| `body` | [`EquipmentGroupTranslation[]`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const equipmentGroupCode = 'EQP-001';

const body: EquipmentGroupTranslation[] = [
  {
    localeCode: 'en-US',
    equipmentGroupName: 'Weightlifting Equipment',
    equipmentGroupDescription: 'Equipment used for weightlifting exercises',
  }
];

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.updateEquipmentGroupTranslations(
  equipmentGroupCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Equipment group not found | [`JustGainsErrorResponseError`] |
| 422 | Validation error | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/users-creator-profiles.md

# Users Creator Profiles

```ts
const usersCreatorProfilesController = new UsersCreatorProfilesController(client);
```

## Class Name

`UsersCreatorProfilesController`

## Methods

* [Get Creator Profiles]
* [Create Creator Profile]
* [Get Creator Profile]
* [Update Creator Profile]
* [Delete Creator Profile]


# Get Creator Profiles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getCreatorProfiles(  page?: number,
  mvpAssetsOnly?: boolean,
  limit?: number,
  search?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page number for pagination<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `mvpAssetsOnly` | `boolean \| undefined` | Query, Optional | Filter creator profiles with MVP assets only |
| `limit` | `number \| undefined` | Query, Optional | Number of items per page<br>**Default**: `20`<br>**Constraints**: `>= 1`, `<= 100` |
| `search` | `string \| undefined` | Query, Optional | Optional search term to filter creator profiles. The search is case-insensitive and matches against:<br><br>- Creator's username<br>- Creator's social media account usernames<br>- Creator's full name (first name + last name)<br><br>Examples:<br><br>- search=john (matches usernames, social media accounts, or names containing "john")<br>- search=@twitter (matches social media accounts containing "@twitter")<br>- search="John Doe" (matches full names containing "John Doe")<br><br>Leave empty to retrieve all profiles without filtering. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileListResponse`]

## Example Usage

```ts
const page = 1;

const limit = 20;

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.getCreatorProfiles(
  page,
  undefined,
  limit
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Create Creator Profile

```ts
async createCreatorProfile(  body: CreatorProfile,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatorProfile`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileResponse`]

## Example Usage

```ts
const body: CreatorProfile = {
  firstName: 'Dwayne',
  lastName: 'Johnson',
};

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.createCreatorProfile(body);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |


# Get Creator Profile

:information_source: **Note** This endpoint does not require authentication.

```ts
async getCreatorProfile(  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileResponse`]

## Example Usage

```ts
const creatorProfileId = '000008d2-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.getCreatorProfile(creatorProfileId);
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
| 404 | Creator profile not found | [`JustGainsErrorResponseError`] |


# Update Creator Profile

```ts
async updateCreatorProfile(  creatorProfileId: string,
  body: CreatorProfile,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `body` | [`CreatorProfile`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileResponse`]

## Example Usage

```ts
const creatorProfileId = '000008d2-0000-0000-0000-000000000000';

const body: CreatorProfile = {
  firstName: 'Dwayne',
  lastName: 'Johnson',
};

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.updateCreatorProfile(
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |
| 404 | Creator profile not found | [`JustGainsErrorResponseError`] |


# Delete Creator Profile

```ts
async deleteCreatorProfile(  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const creatorProfileId = '000008d2-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.deleteCreatorProfile(creatorProfileId);
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
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |
| 404 | Creator profile not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/workouts-workout-content.md

# Workouts Workout Content

```ts
const workoutsWorkoutContentController = new WorkoutsWorkoutContentController(client);
```

## Class Name

`WorkoutsWorkoutContentController`

## Methods

* [Get Workout Content by ID]
* [Update Workout Content by ID]


# Get Workout Content by ID

```ts
async getWorkoutContentByID(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutContentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutContentResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsWorkoutContentController.getWorkoutContentByID(workoutId);
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Update Workout Content by ID

```ts
async updateWorkoutContentByID(  workoutId: string,
  body?: WorkoutContent,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutContentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to update |
| `body` | [`WorkoutContent \| undefined`] | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutContentResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const body: WorkoutContent = {
  workoutID: '9f897bfa-716d-4caa-b8fb-20bf3f2f3416',
};

try {
  const { result, ...httpResponse } = await workoutsWorkoutContentController.updateWorkoutContentByID(
  workoutId,
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/authentication.md

# Authentication

Endpoints for user authentication, including registration, login, logout, and token refresh.

```ts
const authenticationController = new AuthenticationController(client);
```

## Class Name

`AuthenticationController`

## Methods

* [Get User Info]
* [Update User Info]
* [Register User]
* [Login User]
* [Resend Confirmation Email]
* [Forgot Password]
* [Reset Password]
* [Refresh Token]
* [Signout]
* [Initiate Auth]
* [Handle Callback]
* [Get Settings]


# Get User Info

```ts
async getUserInfo(requestOptions?: RequestOptions): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await authenticationController.getUserInfo();
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
| 401 | Failed to retrieve user information | [`JustGainsErrorResponseError`] |


# Update User Info

```ts
async updateUserInfo(  body: UpdateUserRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateUserRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const body: UpdateUserRequest = {
  creatorProfileId: '123e4567-e89b-12d3-a456-426614174000',
  email: 'jane.doe@example.com',
};

try {
  const { result, ...httpResponse } = await authenticationController.updateUserInfo(body);
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
| 400 | Failed to update user information | [`JustGainsErrorResponseError`] |


# Register User

:information_source: **Note** This endpoint does not require authentication.

```ts
async registerUser(  body: UserRegisterRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UserRegisterRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`]

## Example Usage

```ts
const body: UserRegisterRequest = {
  email: 'john.doe@example.com',
  password: 'StrongP@ssw0rd!',
  username: 'johndoe123',
  firstName: 'John',
  lastName: 'Doe',
  redirectUrl: 'https://example.com/welcome',
};

try {
  const { result, ...httpResponse } = await authenticationController.registerUser(body);
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
| 400 | Invalid parameters | [`JustGainsErrorResponseError`] |


# Login User

:information_source: **Note** This endpoint does not require authentication.

```ts
async loginUser(  body: UserLoginRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthSigninResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UserLoginRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthSigninResponse`]

## Example Usage

```ts
const body: UserLoginRequest = {
  email: 'john.doe@example.com',
  password: 'StrongP@ssw0rd!',
};

try {
  const { result, ...httpResponse } = await authenticationController.loginUser(body);
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
| 400 | Invalid credentials | [`JustGainsErrorResponseError`] |


# Resend Confirmation Email

:information_source: **Note** This endpoint does not require authentication.

```ts
async resendConfirmationEmail(  body: ConfirmEmailRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConfirmEmailRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: ConfirmEmailRequest = {
  email: 'john.doe@example.com',
};

try {
  const { result, ...httpResponse } = await authenticationController.resendConfirmationEmail(body);
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
| 400 | Failed to send confirmation email | [`JustGainsErrorResponseError`] |


# Forgot Password

:information_source: **Note** This endpoint does not require authentication.

```ts
async forgotPassword(  body: ForgotPasswordRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ForgotPasswordRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const body: ForgotPasswordRequest = {
  email: 'john.doe@example.com',
};

try {
  const { result, ...httpResponse } = await authenticationController.forgotPassword(body);
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
| 404 | Failed to send password reset email | [`JustGainsErrorResponseError`] |


# Reset Password

:information_source: **Note** This endpoint does not require authentication.

```ts
async resetPassword(  body: ResetPasswordRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ResetPasswordRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: ResetPasswordRequest = {
  newPassword: 'NewStrongP@ssw0rd!',
};

try {
  const { result, ...httpResponse } = await authenticationController.resetPassword(body);
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
| 400 | Failed to reset password | [`JustGainsErrorResponseError`] |


# Refresh Token

:information_source: **Note** This endpoint does not require authentication.

```ts
async refreshToken(requestOptions?: RequestOptions): Promise<ApiResponse<AuthRefreshTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthRefreshTokenResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await authenticationController.refreshToken();
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
| 400 | Failed to refresh token | [`JustGainsErrorResponseError`] |


# Signout

```ts
async signout(requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await authenticationController.signout();
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
| 400 | Failed to sign out user | [`JustGainsErrorResponseError`] |


# Initiate Auth

:information_source: **Note** This endpoint does not require authentication.

```ts
async initiateAuth(  provider: string,
  body: InitiateAuthRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthInitiateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `provider` | `string` | Template, Required | OAuth provider name (e.g., 'google', 'facebook') |
| `body` | [`InitiateAuthRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthInitiateResponse`]

## Example Usage

```ts
const provider = 'google';

const body: InitiateAuthRequest = {
  redirectUrl: 'https://example.com/callback',
};

try {
  const { result, ...httpResponse } = await authenticationController.initiateAuth(
  provider,
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
| 400 | Failed to initiate OAuth flow | [`JustGainsErrorResponseError`] |


# Handle Callback

:information_source: **Note** This endpoint does not require authentication.

```ts
async handleCallback(  provider: string,
  code: string,
  error?: string,
  errorDescription?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthCallbackResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `provider` | `string` | Template, Required | OAuth provider name (e.g., 'google', 'facebook') |
| `code` | `string` | Query, Required | Authorization code from OAuth provider |
| `error` | `string \| undefined` | Query, Optional | Error code from OAuth provider |
| `errorDescription` | `string \| undefined` | Query, Optional | Detailed error description from OAuth provider |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthCallbackResponse`]

## Example Usage

```ts
const provider = 'google';

const code = 'code8';

try {
  const { result, ...httpResponse } = await authenticationController.handleCallback(
  provider,
  code
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
| 400 | Failed to handle OAuth callback | [`JustGainsErrorResponseError`] |


# Get Settings

:information_source: **Note** This endpoint does not require authentication.

```ts
async getSettings(  provider: string,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthSettingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `provider` | `string` | Template, Required | OAuth provider name (e.g., 'google', 'facebook') |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthSettingsResponse`]

## Example Usage

```ts
const provider = 'google';

try {
  const { result, ...httpResponse } = await authenticationController.getSettings(provider);
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
| 400 | Failed to retrieve OAuth provider settings | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/workouts-workout-preview.md

# Workouts Workout Preview

```ts
const workoutsWorkoutPreviewController = new WorkoutsWorkoutPreviewController(client);
```

## Class Name

`WorkoutsWorkoutPreviewController`


# Get Workout Preview by ID

```ts
async getWorkoutPreviewByID(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutPreviewResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutPreviewResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsWorkoutPreviewController.getWorkoutPreviewByID(workoutId);
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/exercise-library-exercises-exercise-videos.md

# Exercise Library Exercises Exercise Videos

```ts
const exerciseLibraryExercisesExerciseVideosController = new ExerciseLibraryExercisesExerciseVideosController(client);
```

## Class Name

`ExerciseLibraryExercisesExerciseVideosController`

## Methods

* [Get Exercise Video On]
* [Get Exercise Video by User Id]
* [Add New Exercise Videos to the Specified Creator Theme]
* [Delete an Exercise Video]


# Get Exercise Video On

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseVideoOn(  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseVideoListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve videos for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseVideoListResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.getExerciseVideoOn(exerciseCode);
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
| 400 | Invalid exercise code | [`JustGainsErrorResponseError`] |
| 404 | Exercise videos not found | [`JustGainsErrorResponseError`] |


# Get Exercise Video by User Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseVideoByUserId(  exerciseCode: string,
  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExercisesVideosResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve videos for |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the creator whose videos we're referencing |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExercisesVideosResponse1`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.getExerciseVideoByUserId(
  exerciseCode,
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
| 400 | Invalid exercise code | [`JustGainsErrorResponseError`] |
| 404 | Exercise videos not found | [`JustGainsErrorResponseError`] |


# Add New Exercise Videos to the Specified Creator Theme

```ts
async addNewExerciseVideosToTheSpecifiedCreatorTheme(  exerciseCode: string,
  creatorProfileId: string,
  body: MediaAssetAssignment,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseVideoResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to add videos to |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the video creator |
| `body` | [`MediaAssetAssignment`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseVideoResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

const body: MediaAssetAssignment = {
  mediaId: '7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.addNewExerciseVideosToTheSpecifiedCreatorTheme(
  exerciseCode,
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
| 400 | Invalid exercise video data | [`JustGainsErrorResponseError`] |
| 401 | Authentication required | [`JustGainsErrorResponseError`] |


# Delete an Exercise Video

```ts
async deleteAnExerciseVideo(  exerciseCode: string,
  creatorProfileId: string,
  exerciseVideoId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the video creator |
| `exerciseVideoId` | `number` | Template, Required | The exercise video ID to delete |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

const exerciseVideoId = 66;

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.deleteAnExerciseVideo(
  exerciseCode,
  creatorProfileId,
  exerciseVideoId
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
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 404 | Exercise video not found | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/controllers/exercise-library-exercise-categories.md

# Exercise Library Exercise Categories

```ts
const exerciseLibraryExerciseCategoriesController = new ExerciseLibraryExerciseCategoriesController(client);
```

## Class Name

`ExerciseLibraryExerciseCategoriesController`

## Methods

* [Get Exercise Categories]
* [Create Exercise Category]
* [Update Exercise Category]
* [Delete an Exercise Category]
* [Get Exercise Category Translations]
* [Update Exercise Category Translations]


# Get Exercise Categories

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseCategories(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoryListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale for returned category names<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoryListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.getExerciseCategories(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Exercise Category

```ts
async createExerciseCategory(  body: ExerciseCategory,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseCategory`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: ExerciseCategory = {
  exerciseCategoryCode: 'STRENGTH_TRAINING',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.createExerciseCategory(body);
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
| 400 | Bad Request | [`JustGainsErrorResponseError`] |


# Update Exercise Category

```ts
async updateExerciseCategory(  exerciseCategoryCode: string,
  body: ExerciseCategory,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | - |
| `body` | [`ExerciseCategory`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

const body: ExerciseCategory = {
  exerciseCategoryCode: 'STRENGTH_TRAINING',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.updateExerciseCategory(
  exerciseCategoryCode,
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
| 400 | Bad Request | [`JustGainsErrorResponseError`] |
| 404 | Category not found | [`JustGainsErrorResponseError`] |


# Delete an Exercise Category

```ts
async deleteAnExerciseCategory(  exerciseCategoryCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.deleteAnExerciseCategory(exerciseCategoryCode);
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
| 404 | Category not found | [`JustGainsErrorResponseError`] |


# Get Exercise Category Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseCategoryTranslations(  exerciseCategoryCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoryTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | The unique code of the exercise category |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoryTranslationListResponse`]

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.getExerciseCategoryTranslations(exerciseCategoryCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise category not found | [`JustGainsErrorResponseError`] |


# Update Exercise Category Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateExerciseCategoryTranslations(  exerciseCategoryCode: string,
  body: ExerciseCategoryTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | The unique code of the exercise category |
| `body` | [`ExerciseCategoryTranslation[]`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

const body: ExerciseCategoryTranslation[] = [
  {
    localeCode: 'en-US',
    exerciseCategoryName: 'Strength Training',
  }
];

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.updateExerciseCategoryTranslations(
  exerciseCategoryCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise category not found | [`JustGainsErrorResponseError`] |
| 422 | Validation error | [`JustGainsErrorResponseError`] |


-----------------------------------

# ./doc/auth/oauth-2-bearer-token.md


# OAuth 2 Bearer token



Documentation for accessing and setting credentials for bearerAuth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| AccessToken | `string` | The OAuth 2.0 Access Token to use for API requests. | `accessToken` |



**Note:** Auth credentials can be set using `bearerAuthCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  bearerAuthCredentials: {
    accessToken: 'AccessToken'
  },
});
```



-----------------------------------

# ./doc/auth/custom-header-signature.md


# Custom Header Signature



Documentation for accessing and setting credentials for userRoles.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| X-User-Role | `string` | User role required for the operation | `xUserRole` |



**Note:** Auth credentials can be set using `userRolesCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  userRolesCredentials: {
    'X-User-Role': 'X-User-Role'
  },
});
```



-----------------------------------

# ./doc/client.md


# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Testing`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `bearerAuthCredentials` | [`BearerAuthCredentials`] | The credential object for bearerAuth |
| `userRolesCredentials` | [`UserRolesCredentials`] | The credential object for userRoles |

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


-----------------------------------

# ./doc/api-error.md


# ApiError

Thrown when the HTTP status code is not okay.

The ApiError extends the ApiResponse interface, so all ApiResponse properties are available.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| request | HttpRequest | Original request that resulted in this response. |
| statusCode | number | Response status code. |
| headers | Record<string, string> | Response headers. |
| result | T | Response data. |
| body | string \| Blob \| NodeJS.ReadableStream | Original body from the response. |


-----------------------------------

# ./doc/api-response.md


# ApiResponse

An interface for the result of an API call.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| request | HttpRequest | Original request that resulted in this response. |
| statusCode | number | Response status codee. |
| headers | Record<string, string> | Response headers. |
| result | T | Response data. |
| body | string \| Blob \| NodeJS.ReadableStream | Original body from the response. |


-----------------------------------

# ./README.md


# Getting Started with JustGains-API

## Introduction

API for managing workout programs, exercises, and user accounts. Includes endpoints for creating, updating, and deleting workouts, exercises, and user profiles, as well as managing exercise instructions, videos, and equipment data.

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install just-gains-api-sdk@0.2.2
```

For additional package details, see the [Npm page for the just-gains-api-sdk@0.2.2 npm].

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

**_Note:_** Documentation for the client can be found [here.]

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Testing`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `bearerAuthCredentials` | [`BearerAuthCredentials`] | The credential object for bearerAuth |
| `userRolesCredentials` | [`UserRolesCredentials`] | The credential object for userRoles |

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

* [`bearerAuth (OAuth 2 Bearer token)`]
* [`userRoles (Custom Header Signature)`]

## List of APIs

* [Users Creator Profiles]
* [Users Social Media Accounts]
* [Exercise Library Exercises]
* [Exercise Library Exercises Exercise Instructions]
* [Exercise Library Exercises Exercise Videos]
* [Exercise Library Exercises Exercise Thumbnails]
* [Exercise Library Muscles]
* [Exercise Library Muscles Muscle Groups]
* [Exercise Library Equipment]
* [Exercise Library Equipment Equipment Groups]
* [Exercise Library Exercise Drafts]
* [Exercise Library Exercise Categories]
* [Exercise Library Exercise Metrics]
* [Workouts Workout Data]
* [Workouts Workout Content]
* [Workouts Workout Preview]
* [Common Media Assets]
* [Common Locales]
* [Common Published Status]
* [Status]
* [Authentication]
* [Users]
* [Users Roles]
* [Workouts]

## Classes Documentation

* [ApiResponse]
* [ApiError]


-----------------------------------


---------------------------------------

# ./doc/models/exercise-thumbnail-response.md


# Exercise Thumbnail Response

## Structure

`ExerciseThumbnailResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseThumbnail`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "exerciseCode": "SQUAT",
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "userName": "john_doe",
    "mediaAsset": {
      "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
      "fileName": "workout_routine.mp4",
      "filePath": "media/videos/routines/workout_routine.mp4",
      "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
      "fileSize": 15728640,
      "fileFormat": "video/mp4",
      "description": "High-intensity interval training (HIIT) workout routine for beginners"
    }
  }
}
```


---------------------------------------

# ./doc/models/exercise-category-list-response.md


# Exercise Category List Response

## Structure

`ExerciseCategoryListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseCategory[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "exerciseCategoryCode": "STRENGTH_TRAINING",
      "exerciseCategoryName": "Strength Training"
    }
  ]
}
```


---------------------------------------

# ./doc/models/workout-preview-response.md


# Workout Preview Response

## Structure

`WorkoutPreviewResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`WorkoutPreview`] | Required | Represents a workout in the system. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
    "workoutTitle": "Full Body Strength Training",
    "updatedAt": "07/08/2023 14:30:00",
    "lastViewedAt": "07/07/2023 09:15:00",
    "workoutBackgroundImage": {
      "mediaId": "00001014-0000-0000-0000-000000000000",
      "fileName": "fileName2",
      "filePath": "filePath2",
      "fileUrl": "fileUrl2",
      "fileSize": 88,
      "fileFormat": "fileFormat4",
      "description": "description8"
    },
    "workoutMuscleGroupsPrimary": [
      {
        "muscleGroupCode": "muscleGroupCode8",
        "muscleGroupName": "muscleGroupName8",
        "muscleGroupThumbnail": {
          "mediaId": "000002a2-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 246,
          "fileFormat": "fileFormat2",
          "description": "description6"
        }
      },
      {
        "muscleGroupCode": "muscleGroupCode8",
        "muscleGroupName": "muscleGroupName8",
        "muscleGroupThumbnail": {
          "mediaId": "000002a2-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 246,
          "fileFormat": "fileFormat2",
          "description": "description6"
        }
      },
      {
        "muscleGroupCode": "muscleGroupCode8",
        "muscleGroupName": "muscleGroupName8",
        "muscleGroupThumbnail": {
          "mediaId": "000002a2-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 246,
          "fileFormat": "fileFormat2",
          "description": "description6"
        }
      }
    ],
    "workoutMuscleGroupsSecondary": [
      {
        "muscleGroupCode": "muscleGroupCode0",
        "muscleGroupName": "muscleGroupName6",
        "muscleGroupThumbnail": {
          "mediaId": "000002a2-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 246,
          "fileFormat": "fileFormat2",
          "description": "description6"
        }
      },
      {
        "muscleGroupCode": "muscleGroupCode0",
        "muscleGroupName": "muscleGroupName6",
        "muscleGroupThumbnail": {
          "mediaId": "000002a2-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 246,
          "fileFormat": "fileFormat2",
          "description": "description6"
        }
      }
    ]
  }
}
```


---------------------------------------

# ./doc/models/exercise-category-translation.md


# Exercise Category Translation

Represents a translation of an exercise category name for a specific locale.

## Structure

`ExerciseCategoryTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Required | The locale code for this translation (e.g., 'en-US', 'es-ES'). |
| `exerciseCategoryName` | `string` | Required | The translated name of the exercise category in the specified locale. |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "exerciseCategoryName": "Strength Training"
}
```


---------------------------------------

# ./doc/models/related-exercise-list-item.md


# Related Exercise List Item

Represents a variant relationship between two exercises, tracking how they are related and differ from each other.

## Structure

`RelatedExerciseListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Required | Unique identifier for the exercise. |
| `variantSlug` | `string \| undefined` | Optional | A short slug that explains the variation of the exercise. |

## Example (as JSON)

```json
{
  "exerciseCode": "BENCH_PRESS",
  "VariantSlug": "Wide"
}
```


---------------------------------------

# ./doc/models/role-update-request.md


# Role Update Request

## Structure

`RoleUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleName` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "roleName": "roleName4",
  "description": "description2"
}
```


---------------------------------------

# ./doc/models/creator-profile-response.md


# Creator Profile Response

## Structure

`CreatorProfileResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`CreatorProfile`] | Required | Represents a creator's profile information. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "userName": "TheRock",
    "firstName": "Dwayne",
    "lastName": "Johnson",
    "fullName": "Dwayne Johnson"
  }
}
```


---------------------------------------

# ./doc/models/auth-callback-response.md


# Auth Callback Response

## Structure

`AuthCallbackResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`AuthData`] | Required | Authentication data containing tokens and user information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "accessToken": "accessToken8",
    "refreshToken": "refreshToken8",
    "tokenExpiration": "tokenExpiration4",
    "userInfo": {
      "userId": "0000084a-0000-0000-0000-000000000000",
      "userName": "userName4",
      "emailConfirmed": false,
      "email": "email4",
      "password": "password6"
    }
  }
}
```


---------------------------------------

# ./doc/models/muscle-group-translation.md


# Muscle Group Translation

## Structure

`MuscleGroupTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Required | The locale code for this translation (e.g., 'en-US', 'es-ES') |
| `muscleGroupName` | `string` | Required | The translated name of the muscle group |
| `muscleGroupDescription` | `string \| undefined` | Optional | The translated description of the muscle group (optional) |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "muscleGroupName": "Quadriceps",
  "muscleGroupDescription": "The quadriceps femoris is a large muscle group located on the front of the thigh."
}
```


---------------------------------------

# ./doc/models/publish-status-enum.md


# Publish Status Enum

## Enumeration

`PublishStatusEnum`

## Fields

| Name |
|  --- |
| `Unreviewed` |
| `Reviewed` |
| `Published` |


---------------------------------------

# ./doc/models/workout-data.md


# Workout Data

## Structure

`WorkoutData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | Unique identifier for the exercise. |
| `exerciseNotes` | `string \| undefined` | Optional | Additional notes or instructions for this specific instance of the exercise. |
| `exerciseThumbnail` | [`MediaAsset \| undefined`] | Optional | - |
| `exerciseMetrics` | [`ExerciseMetric1[] \| undefined`] | Optional | List of metric codes and their units used for this exercise, in order |
| `exerciseOrder` | `number \| undefined` | Optional | The order of this exercise within the workout or its group. |
| `exerciseGroupID` | `number \| null \| undefined` | Optional | Identifier for the group this exercise belongs to, if any. Null if not part of a group. |
| `exerciseGroupType` | [`ExerciseGroupTypeEnum \| null \| undefined`] | Optional | The type of group this exercise belongs to, if any. Null if not part of a group. |
| `exerciseData` | [`ExerciseSet[] \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL_SQUAT",
  "exerciseNotes": "Keep your core tight throughout the movement",
  "exerciseOrder": 2,
  "exerciseGroupID": 1,
  "exerciseGroupType": "SUPERSET",
  "exerciseThumbnail": {
    "mediaId": "000024ec-0000-0000-0000-000000000000",
    "fileName": "fileName8",
    "filePath": "filePath6",
    "fileUrl": "fileUrl8",
    "fileSize": 240,
    "fileFormat": "fileFormat0",
    "description": "description6"
  },
  "exerciseMetrics": [
    {
      "metricCode": "metricCode6",
      "metricUnit": "metricUnit0"
    },
    {
      "metricCode": "metricCode6",
      "metricUnit": "metricUnit0"
    }
  ]
}
```


---------------------------------------

# ./doc/models/auth-settings-response.md


# Auth Settings Response

## Structure

`AuthSettingsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`OAuthSettingsData`] | Required | Data object containing OAuth provider settings |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "clientId": "clientId4",
    "authorizeUrl": "authorizeUrl6",
    "tokenUrl": "tokenUrl0",
    "scopes": [
      "scopes6",
      "scopes5"
    ]
  }
}
```


---------------------------------------

# ./doc/models/social-media-platform-list-response.md


# Social Media Platform List Response

## Structure

`SocialMediaPlatformListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`SocialMediaPlatform[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "socialMediaPlatformCode": "TWITTER",
      "socialMediaPlatformName": "Twitter",
      "socialMediaPlatformUrlFormat": "https://twitter.com/{username}",
      "socialMediaPlatformIcon": {
        "mediaId": "000004fe-0000-0000-0000-000000000000",
        "fileName": "fileName4",
        "filePath": "filePath0",
        "fileUrl": "fileUrl4",
        "fileSize": 18,
        "fileFormat": "fileFormat6",
        "description": "description0"
      }
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


---------------------------------------

# ./doc/models/muscle-translation-list-response.md


# Muscle Translation List Response

## Structure

`MuscleTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MuscleTranslation[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "muscleCode": "QUAD",
      "localeCode": "en-US",
      "muscleName": "Quadriceps"
    }
  ]
}
```


---------------------------------------

# ./doc/models/creator-profile-list-response.md


# Creator Profile List Response

## Structure

`CreatorProfileListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`CreatorProfile[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
      "userId": "123e4567-e89b-12d3-a456-426614174000",
      "userName": "TheRock",
      "firstName": "Dwayne",
      "lastName": "Johnson",
      "fullName": "Dwayne Johnson"
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


---------------------------------------

# ./doc/models/equipment-translation-list-response.md


# Equipment Translation List Response

## Structure

`EquipmentTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`EquipmentTranslation[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "localeCode": "en-US",
      "equipmentName": "Barbell"
    }
  ]
}
```


---------------------------------------

# ./doc/models/auth-refresh-token-response.md


# Auth Refresh Token Response

## Structure

`AuthRefreshTokenResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`AuthData`] | Required | Authentication data containing tokens and user information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "accessToken": "accessToken8",
    "refreshToken": "refreshToken8",
    "tokenExpiration": "tokenExpiration4",
    "userInfo": {
      "userId": "0000084a-0000-0000-0000-000000000000",
      "userName": "userName4",
      "emailConfirmed": false,
      "email": "email4",
      "password": "password6"
    }
  }
}
```


---------------------------------------

# ./doc/models/exercise-instruction-list-item.md


# Exercise Instruction List Item

## Structure

`ExerciseInstructionListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Optional | - |
| `userName` | `string \| undefined` | Optional | Username of the user who created this instruction. |
| `localeCode` | `string \| undefined` | Optional | Language code for the instructions |
| `dateUpdated` | `string \| undefined` | Optional | - |
| `dateCreated` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
  "userName": "john_doe",
  "localeCode": "en-US",
  "dateUpdated": "2023-07-10T11:45:00Z",
  "dateCreated": "2023-06-15T08:30:00Z"
}
```


---------------------------------------

# ./doc/models/contribution-type-enum.md


# Contribution Type Enum

Type of contribution made by the creator.

## Enumeration

`ContributionTypeEnum`

## Fields

| Name |
|  --- |
| `ORIGINALAUTHOR` |
| `PARTIALCONTRIBUTOR` |
| `SUBMITTER` |
| `CURATOR` |

## Example

```
ORIGINAL_AUTHOR
```


---------------------------------------

# ./doc/models/initiate-auth-request.md


# Initiate Auth Request

Request object for initiating OAuth authentication

## Structure

`InitiateAuthRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `redirectUrl` | `string` | Required | The URL to redirect to after authentication |

## Example (as JSON)

```json
{
  "redirectUrl": "https://example.com/callback"
}
```


---------------------------------------

# ./doc/models/media-asset-response.md


# Media Asset Response

## Structure

`MediaAssetResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MediaAsset`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
    "fileName": "workout_routine.mp4",
    "filePath": "media/videos/routines/workout_routine.mp4",
    "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
    "fileSize": 15728640,
    "fileFormat": "video/mp4",
    "description": "High-intensity interval training (HIIT) workout routine for beginners"
  }
}
```


---------------------------------------

# ./doc/models/confirm-email-request.md


# Confirm Email Request

Request object for email confirmation

## Structure

`ConfirmEmailRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | Email address to confirm |

## Example (as JSON)

```json
{
  "email": "john.doe@example.com"
}
```


---------------------------------------

# ./doc/models/workout-equipment-group.md


# Workout Equipment Group

## Structure

`WorkoutEquipmentGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string \| undefined` | Optional | Unique identifier for the equipment. |
| `equipmentName` | `string \| undefined` | Optional | Name of the equipment, localized. |
| `equipmentThumbnail` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "equipmentCode": "BARBELL",
  "equipmentName": "Barbell",
  "equipmentThumbnail": {
    "mediaId": "0000103e-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 162,
    "fileFormat": "fileFormat6",
    "description": "description0"
  }
}
```


---------------------------------------

# ./doc/models/roles-response-1.md


# Roles Response 1

## Structure

`RolesResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Role`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "roleId": 82,
    "roleName": "roleName4",
    "description": "description0"
  }
}
```


---------------------------------------

# ./doc/models/data.md


# Data

## Structure

`Data`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `text` | `string \| null \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "text": "Lie on a flat bench with your feet flat on the ground."
}
```


---------------------------------------

# ./doc/models/roles-response.md


# Roles Response

## Structure

`RolesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Role[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "roleId": 82,
      "roleName": "roleName4",
      "description": "description0"
    }
  ]
}
```


---------------------------------------

# ./doc/models/workout-data-response.md


# Workout Data Response

## Structure

`WorkoutDataResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`WorkoutData`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "exerciseCode": "BARBELL_SQUAT",
    "exerciseNotes": "Keep your core tight throughout the movement",
    "exerciseOrder": 2,
    "exerciseGroupID": 1,
    "exerciseGroupType": "SUPERSET",
    "exerciseThumbnail": {
      "mediaId": "000024ec-0000-0000-0000-000000000000",
      "fileName": "fileName8",
      "filePath": "filePath6",
      "fileUrl": "fileUrl8",
      "fileSize": 240,
      "fileFormat": "fileFormat0",
      "description": "description6"
    },
    "exerciseMetrics": [
      {
        "metricCode": "metricCode6",
        "metricUnit": "metricUnit0"
      }
    ]
  }
}
```


---------------------------------------

# ./doc/models/exercise-translation.md


# Exercise Translation

## Structure

`ExerciseTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Optional | The locale code of the translation |
| `exerciseName` | `string \| undefined` | Optional | Translated Primary Exercise Name for the chosen Locale |
| `isPrimary` | `boolean \| undefined` | Optional | Is this the primary translation for the exercise in the chosen locale |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "exerciseName": "exerciseName8",
  "isPrimary": false
}
```


---------------------------------------

# ./doc/models/creator-profile-1.md


# Creator Profile 1

## Structure

`CreatorProfile1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `userId` | `string \| undefined` | Optional | Associated user ID, if applicable. |
| `userName` | `string \| undefined` | Optional | Creator's username. |
| `firstName` | `string \| undefined` | Optional | Creator's first name. |
| `lastName` | `string \| undefined` | Optional | Creator's last name. |
| `fullName` | `string \| undefined` | Optional | Creator's full name. |
| `profilePhoto` | [`MediaAsset \| undefined`] | Optional | - |
| `socialMediaAccounts` | [`CreatorSocialMediaAccount[] \| undefined`] | Optional | List of creator's social media accounts. |

## Example (as JSON)

```json
{
  "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "userName": "TheRock",
  "firstName": "Dwayne",
  "lastName": "Johnson",
  "fullName": "Dwayne Johnson"
}
```


---------------------------------------

# ./doc/models/exercise-update-request.md


# Exercise Update Request

## Structure

`ExerciseUpdateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | A unique identifier for the exercise. |
| `exerciseName` | `string \| undefined` | Optional | Translated Primary Exercise Name |
| `exerciseEquipment` | [`ExerciseEquipment \| undefined`] | Optional | - |
| `exerciseMuscles` | [`ExerciseMuscle[] \| undefined`] | Optional | - |
| `exerciseCategories` | `string[] \| undefined` | Optional | Array of category codes associated with this exercise |
| `relatedExercises` | [`RelatedExerciseListItem[] \| undefined`] | Optional | - |
| `exerciseTypeCode` | `string \| undefined` | Optional | The exerciseTypeCode of the exercise |
| `publishStatusCode` | [`PublishStatusCodeEnum \| undefined`] | Optional | The publish status of the exercise |
| `difficulty` | `number \| undefined` | Optional | Difficulty level of the exercise |
| `metabolicEquivalent` | `number \| undefined` | Optional | Metabolic equivalent of the exercise |
| `isPlateloaded` | `boolean \| undefined` | Optional | Indicates if the exercise is plateloaded |
| `isCardio` | `boolean \| undefined` | Optional | Indicates if the exercise is cardio |
| `olympicRating` | `number \| undefined` | Optional | Olympic rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `powerLifterRating` | `number \| undefined` | Optional | Power lifter rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `calisthenicRating` | `number \| undefined` | Optional | Calisthenic rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `popularityRating` | `number \| undefined` | Optional | Popularity rating of the exercise<br>**Default**: `0`<br>**Constraints**: `>= 0`, `<= 5` |
| `isPlyometric` | `boolean \| undefined` | Optional | Indicates if the exercise is plyometric |
| `isIsometric` | `boolean \| undefined` | Optional | Indicates if the exercise is isometric |
| `isCalisthenic` | `boolean \| undefined` | Optional | Indicates if the exercise is calisthenic |
| `isWeighted` | `boolean \| undefined` | Optional | Indicates if the exercise is weighted |
| `isUnilateral` | `boolean \| undefined` | Optional | Indicates if the exercise is unilateral |
| `isBodyweight` | `boolean \| undefined` | Optional | Indicates if the exercise is bodyweight |
| `isVariant` | `boolean \| undefined` | Optional | Indicates if the exercise is a variant. When true, the exercise won't show up without being searched. |
| `adminNotes` | `string \| undefined` | Optional | Admin notes for the exercise |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL_SQUAT",
  "exerciseName": "Barbell Squat",
  "exerciseCategories": [
    "STRENGTH",
    "CARDIO"
  ],
  "exerciseTypeCode": "STRENGTH",
  "publishStatusCode": "UNREVIEWED",
  "difficulty": 7,
  "metabolicEquivalent": 8.5,
  "isPlateloaded": true,
  "isCardio": false,
  "olympicRating": 5,
  "powerLifterRating": 5,
  "calisthenicRating": 5,
  "popularityRating": 5,
  "isPlyometric": true,
  "isIsometric": false,
  "isCalisthenic": true,
  "isWeighted": false,
  "isUnilateral": true,
  "isBodyweight": true,
  "isVariant": false,
  "adminNotes": "This exercise requires supervision.",
  "exerciseEquipment": {
    "required": [
      [
        "required2",
        "required3",
        "required4"
      ],
      [
        "required2",
        "required3",
        "required4"
      ],
      [
        "required2",
        "required3",
        "required4"
      ]
    ],
    "optional": [
      [
        "optional3"
      ]
    ]
  },
  "exerciseMuscles": [
    {
      "muscleCode": "muscleCode6",
      "targetPercentage": 202,
      "isPrimary": false
    },
    {
      "muscleCode": "muscleCode6",
      "targetPercentage": 202,
      "isPrimary": false
    }
  ]
}
```


---------------------------------------

# ./doc/models/just-gains-error-response-error.md


# Just Gains Error Response Error

## Structure

`JustGainsErrorResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `errors` | `string[] \| undefined` | Optional | A list of error messages that occurred during the operation. |

## Example (as JSON)

```json
{
  "status": "Error",
  "message": "Operation Failed",
  "errors": [
    "Invalid input data",
    "User not found"
  ]
}
```


---------------------------------------

# ./doc/models/equipment.md


# Equipment

Represents a piece of exercise equipment with its details and translations.

## Structure

`Equipment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Required | A unique identifier for the equipment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `equipmentName` | `string \| undefined` | Optional | The name of the equipment, localized. |
| `equipmentThumbnail` | [`MediaAsset \| undefined`] | Optional | - |
| `equipmentEquipmentGroups` | `string[] \| null \| undefined` | Optional | A list of equipment groups this equipment belongs to. |

## Example (as JSON)

```json
{
  "equipmentCode": "BARBELL",
  "equipmentName": "Barbell",
  "equipmentEquipmentGroups": [
    "WEIGHTS",
    "FREE_WEIGHTS"
  ],
  "equipmentThumbnail": {
    "mediaId": "0000103e-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 162,
    "fileFormat": "fileFormat6",
    "description": "description0"
  }
}
```


---------------------------------------

# ./doc/models/published-status-list-response.md


# Published Status List Response

## Structure

`PublishedStatusListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`PublishedStatus[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "publishedStatusCode": "PUBLISHED",
      "userRoleAccess": "ADMIN,USER",
      "publishedStatusName": "Published"
    }
  ]
}
```


---------------------------------------

# ./doc/models/workout-summary.md


# Workout Summary

Summary information about the workout.

## Structure

`WorkoutSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalReps` | `number \| undefined` | Optional | Total number of repetitions across all exercises in the workout. |
| `totalSets` | `number \| undefined` | Optional | Total number of sets across all exercises in the workout. |
| `totalVolume` | `number \| undefined` | Optional | Total volume (weight * reps) across all exercises in the workout. |
| `totalDistance` | `number \| undefined` | Optional | Total distance covered in the workout, if applicable. |
| `estimatedDuration` | `number \| undefined` | Optional | Estimated duration of the workout in minutes. |
| `exerciseCount` | `number \| undefined` | Optional | Number of exercises in the workout. |

## Example (as JSON)

```json
{
  "totalReps": 100,
  "totalSets": 20,
  "totalVolume": 5000.5,
  "totalDistance": 5.5,
  "estimatedDuration": 60,
  "exerciseCount": 8
}
```


---------------------------------------

# ./doc/models/exercise-video.md


# Exercise Video

## Structure

`ExerciseVideo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | Unique identifier for the exercise. |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `userName` | `string \| undefined` | Optional | Username of the user who created the video. |
| `mediaAsset` | [`MediaAsset \| undefined`] | Optional | - |
| `sortOrder` | `number \| undefined` | Optional | The order in which the video should be displayed. |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL_SQUAT",
  "creatorProfileId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
  "userName": "john_doe",
  "sortOrder": 1,
  "mediaAsset": {
    "mediaId": "00001080-0000-0000-0000-000000000000",
    "fileName": "fileName0",
    "filePath": "filePath4",
    "fileUrl": "fileUrl0",
    "fileSize": 212,
    "fileFormat": "fileFormat2",
    "description": "description6"
  }
}
```


---------------------------------------

# ./doc/models/workout-table-item.md


# Workout Table Item

Represents a workout in the system from the My Workouts Page.

## Structure

`WorkoutTableItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string \| undefined` | Optional | Unique identifier for the workout. |
| `originalWorkoutId` | `string \| undefined` | Optional | ID of the original workout if this is a duplicate. |
| `workoutTitle` | `string \| undefined` | Optional | The title of the workout. |
| `workoutSlug` | `string \| undefined` | Optional | The URL slug of the workout. |
| `workoutBackgroundImage` | [`MediaAsset \| undefined`] | Optional | - |
| `isBookmark` | `boolean \| undefined` | Optional | Indicates if the workout is a user's own workout or a bookmarked one from another user. |
| `creatorCredits` | [`CreatorCredit[] \| undefined`] | Optional | List of creator credits associated with this workout. |
| `primaryMuscleGroups` | `string[] \| undefined` | Optional | List of primary muscle group codes targeted in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `equipmentList` | `string[] \| undefined` | Optional | List of equipment codes used in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `secondaryMuscleGroups` | `string[] \| undefined` | Optional | List of secondary muscles targeted in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `createdAt` | `string \| undefined` | Optional | The date and time when the workout was created. |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout was last updated. |
| `lastViewedAt` | `string \| undefined` | Optional | The date and time when the workout was last used. |
| `tags` | `string[] \| undefined` | Optional | NOT IMPLEMENTED:- TODO- List of tags associated with the workout. |
| `workoutSummary` | [`WorkoutSummary \| undefined`] | Optional | Summary information about the workout. |
| `workoutAnalytics` | [`WorkoutAnalytics \| undefined`] | Optional | Analytics data for the workout. |

## Example (as JSON)

```json
{
  "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "originalWorkoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "workoutTitle": "Full Body Strength Training",
  "workoutSlug": "full-body-strength-training",
  "isBookmark": true,
  "primaryMuscleGroups": [
    "CHEST",
    "QUADRICEPS",
    "BACK"
  ],
  "equipmentList": [
    "BARBELL",
    "BENCH",
    "DUMBBELL"
  ],
  "secondaryMuscleGroups": [
    "CHEST",
    "QUADRICEPS",
    "BACK"
  ],
  "createdAt": "07/01/2023 10:00:00",
  "updatedAt": "07/08/2023 14:30:00",
  "lastViewedAt": "07/07/2023 09:15:00",
  "tags": [
    "strength",
    "fullbody",
    "beginner"
  ],
  "WorkoutBackgroundImage": {
    "mediaId": "00000cba-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 14,
    "fileFormat": "fileFormat6",
    "description": "description0"
  }
}
```


---------------------------------------

# ./doc/models/equipment-required.md


# Equipment Required

## Structure

`EquipmentRequired`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `required` | `string[] \| undefined` | Optional | - |
| `optional` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "required": [
    [
      "required8",
      "required9"
    ],
    [
      "required8",
      "required9"
    ]
  ],
  "optional": [
    "optional9",
    "optional0",
    "optional1"
  ]
}
```


---------------------------------------

# ./doc/models/exercise-equipment.md


# Exercise Equipment

## Structure

`ExerciseEquipment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `required` | `string[] \| undefined` | Optional | Array of equipment code arrays that are required for this exercise |
| `optional` | `string[] \| undefined` | Optional | Array of equipment code arrays that are optional for this exercise |

## Example (as JSON)

```json
{
  "required": [
    [
      "BARBELL",
      "WEIGHT_PLATES"
    ],
    [
      "DUMBBELLS"
    ]
  ],
  "optional": [
    [
      "WEIGHT_BELT",
      "WRIST_WRAPS"
    ],
    [
      "RESISTANCE_BANDS"
    ]
  ]
}
```


---------------------------------------

# ./doc/models/muscle-group-list-response.md


# Muscle Group List Response

## Structure

`MuscleGroupListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MuscleGroup[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "muscleGroupCode": "CHEST",
      "muscleGroupName": "Chest",
      "muscleGroupParent": "UPPER_BODY",
      "muscleGroupMuscles": [
        "PECTORALIS_MAJOR_STERNAL_HEAD",
        "ANTERIOR_DELTOID",
        "TRICEPS_BRACHII",
        "RECTUS_ABDOMINIS",
        "LATISSIMUS_DORSI",
        "BICEPS_BRACHII",
        "QUADRICEPS_FEMORIS",
        "HAMSTRINGS",
        "GASTROCNEMIUS"
      ],
      "muscleGroupType": "main_group"
    }
  ]
}
```


---------------------------------------

# ./doc/models/data-2.md


# Data 2

## Structure

`Data2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `isAvailable` | `boolean \| undefined` | Optional | Whether the username is available |
| `isValid` | `boolean \| undefined` | Optional | Whether the username is valid |
| `validation` | `string \| undefined` | Optional | The validation result |
| `creatorProfileId` | `string \| null \| undefined` | Optional | The CreatorProfileId of the creator who has this username. Only present if isAvailable is false. |

## Example (as JSON)

```json
{
  "isAvailable": true,
  "isValid": true,
  "validation": "Valid",
  "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000"
}
```


---------------------------------------

# ./doc/models/reset-password-request.md


# Reset Password Request

Request object for resetting password

## Structure

`ResetPasswordRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `newPassword` | `string` | Required | New password to set |

## Example (as JSON)

```json
{
  "newPassword": "NewStrongP@ssw0rd!"
}
```


---------------------------------------

# ./doc/models/exercise-metric-list-response.md


# Exercise Metric List Response

## Structure

`ExerciseMetricListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseMetricData[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "exerciseMetricCode": "WEIGHT",
      "metricName": "Weight",
      "measurementData": "{\r\n  \"unit\": \"lbs\",\r\n  \"precision\": 2\r\n}",
      "exerciseMetricTranslations": [
        {
          "localeCode": "localeCode6",
          "metricName": "metricName8",
          "measurementData": "measurementData4"
        },
        {
          "localeCode": "localeCode6",
          "metricName": "metricName8",
          "measurementData": "measurementData4"
        },
        {
          "localeCode": "localeCode6",
          "metricName": "metricName8",
          "measurementData": "measurementData4"
        }
      ]
    }
  ]
}
```


---------------------------------------

# ./doc/models/creator-credit.md


# Creator Credit

Represents a creator credit for a workout.

## Structure

`CreatorCredit`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `workoutSourceURL` | `string \| undefined` | Optional | URL source of the workout, if applicable. |
| `contributionType` | [`ContributionTypeEnum \| undefined`] | Optional | Type of contribution made by the creator. |
| `creatorProfile` | [`CreatorProfile1 \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "creatorProfileId": "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "workoutSourceURL": "https://www.example.com/workout",
  "contributionType": "ORIGINAL_AUTHOR",
  "creatorProfile": {
    "creatorProfileId": "00001068-0000-0000-0000-000000000000",
    "userId": "00001b82-0000-0000-0000-000000000000",
    "userName": "userName4",
    "firstName": "firstName8",
    "lastName": "lastName6"
  }
}
```


---------------------------------------

# ./doc/models/muscle-group-dto-response.md


# Muscle Group Dto Response

## Structure

`MuscleGroupDtoResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MuscleGroupDto`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "muscleGroupCode": "CHEST",
    "muscleGroupName": "Chest"
  }
}
```


---------------------------------------

# ./doc/models/exercise-response.md


# Exercise Response

## Structure

`ExerciseResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseUpdateRequest`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "exerciseCode": "BARBELL_SQUAT",
    "exerciseName": "Barbell Squat",
    "exerciseCategories": [
      "STRENGTH",
      "CARDIO"
    ],
    "exerciseTypeCode": "STRENGTH",
    "publishStatusCode": "UNREVIEWED",
    "difficulty": 7,
    "metabolicEquivalent": 8.5,
    "isPlateloaded": true,
    "isCardio": false,
    "olympicRating": 5,
    "powerLifterRating": 5,
    "calisthenicRating": 5,
    "popularityRating": 5,
    "isPlyometric": true,
    "isIsometric": false,
    "isCalisthenic": true,
    "isWeighted": false,
    "isUnilateral": true,
    "isBodyweight": true,
    "isVariant": false,
    "adminNotes": "This exercise requires supervision.",
    "exerciseEquipment": {
      "required": [
        [
          "required2",
          "required3",
          "required4"
        ],
        [
          "required2",
          "required3",
          "required4"
        ],
        [
          "required2",
          "required3",
          "required4"
        ]
      ],
      "optional": [
        [
          "optional3"
        ]
      ]
    },
    "exerciseMuscles": [
      {
        "muscleCode": "muscleCode6",
        "targetPercentage": 202,
        "isPrimary": false
      }
    ]
  }
}
```


---------------------------------------

# ./doc/models/workout.md


# Workout

Represents a workout in the system.

## Structure

`Workout`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string \| undefined` | Optional | Unique identifier for the workout. |
| `originalWorkoutId` | `string \| undefined` | Optional | ID of the original workout if this is a duplicate. |
| `workoutTitle` | `string \| undefined` | Optional | The title of the workout. |
| `workoutSlug` | `string \| undefined` | Optional | The URL slug of the workout. |
| `workoutBackgroundImage` | [`MediaAsset \| undefined`] | Optional | - |
| `createdAt` | `string \| undefined` | Optional | The date and time when the workout was created. |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout was last updated. |
| `lastViewedAt` | `string \| undefined` | Optional | The date and time when the workout was last used. |
| `workoutSummary` | [`WorkoutSummary \| undefined`] | Optional | Summary information about the workout. |
| `workoutAnalytics` | [`WorkoutAnalytics \| undefined`] | Optional | Analytics data for the workout. |
| `workoutData` | [`WorkoutData[] \| undefined`] | Optional | - |
| `workoutContent` | `unknown \| undefined` | Optional | The content of the workout (JSON formatted output from the JS Editor) |
| `creatorCredits` | [`CreatorCredit[] \| undefined`] | Optional | List of creator credits associated with this workout. |

## Example (as JSON)

```json
{
  "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "originalWorkoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "workoutTitle": "Full Body Strength Training",
  "workoutSlug": "full-body-strength-training",
  "createdAt": "07/01/2023 10:00:00",
  "updatedAt": "07/08/2023 14:30:00",
  "lastViewedAt": "07/07/2023 09:15:00",
  "workoutContent": {},
  "workoutBackgroundImage": {
    "mediaId": "00001014-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 88,
    "fileFormat": "fileFormat4",
    "description": "description8"
  }
}
```


---------------------------------------

# ./doc/models/workout-analytics.md


# Workout Analytics

Analytics data for the workout.

## Structure

`WorkoutAnalytics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalViews` | `number \| undefined` | Optional | Number of views for the workout. |
| `ratingAverage` | `number \| undefined` | Optional | The average rating of the workout. |
| `ratingCount` | `number \| undefined` | Optional | The number of ratings for the workout. |

## Example (as JSON)

```json
{
  "totalViews": 1000,
  "ratingAverage": 4.7,
  "ratingCount": 4578
}
```


---------------------------------------

# ./doc/models/exercise-translation-list-response.md


# Exercise Translation List Response

## Structure

`ExerciseTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseTranslation[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "localeCode": "en-US",
      "exerciseName": "exerciseName2",
      "isPrimary": false
    }
  ]
}
```


---------------------------------------

# ./doc/models/social-media-platform.md


# Social Media Platform

## Structure

`SocialMediaPlatform`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string \| undefined` | Optional | Unique identifier for the social media platform |
| `socialMediaPlatformName` | `string \| undefined` | Optional | Name of the social media platform |
| `socialMediaPlatformUrlFormat` | `string \| undefined` | Optional | URL format for the platform's profile pages |
| `socialMediaPlatformIcon` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "socialMediaPlatformCode": "TWITTER",
  "socialMediaPlatformName": "Twitter",
  "socialMediaPlatformUrlFormat": "https://twitter.com/{username}",
  "socialMediaPlatformIcon": {
    "mediaId": "000004fe-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 18,
    "fileFormat": "fileFormat6",
    "description": "description0"
  }
}
```


---------------------------------------

# ./doc/models/muscle.md


# Muscle

## Structure

`Muscle`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Required | Unique identifier for the muscle |
| `muscleName` | `string \| undefined` | Optional | The name of the muscle in the default language (typically English) |

## Example (as JSON)

```json
{
  "muscleCode": "BICEPS_BRACHII",
  "muscleName": "Biceps Brachii"
}
```


---------------------------------------

# ./doc/models/publish-status-code-enum.md


# Publish Status Code Enum

The publish status of the exercise

## Enumeration

`PublishStatusCodeEnum`

## Fields

| Name |
|  --- |
| `UNREVIEWED` |
| `REVIEWED` |
| `PUBLISHED` |

## Example

```
UNREVIEWED
```


---------------------------------------

# ./doc/models/workout-content.md


# Workout Content

## Structure

`WorkoutContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutID` | `string \| undefined` | Optional | The ID of the workout |
| `workoutContent` | `unknown \| undefined` | Optional | The content of the workout (JSON formatted output from the JS Editor) |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout content was last updated. |

## Example (as JSON)

```json
{
  "workoutID": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "updatedAt": "07/08/2023 14:30:00",
  "workoutContent": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


---------------------------------------

# ./doc/models/muscle-group.md


# Muscle Group

## Structure

`MuscleGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | Unique identifier for the muscle group. |
| `muscleGroupName` | `string \| undefined` | Optional | Name of the muscle group, localized. |
| `muscleGroupParent` | `string \| null \| undefined` | Optional | parent group CODE for hierarchical structuring. |
| `muscleGroupMuscles` | `string[] \| undefined` | Optional | An array of muscle codes associated with this muscle group.<br>Each muscle code represents a specific muscle or muscle group targeted in exercises.<br>The codes are used to identify muscles across different languages and provide<br>consistency in muscle targeting for various exercises. |
| `muscleGroupType` | [`MuscleGroupTypeEnum \| undefined`] | Optional | - |
| `muscleGroupThumbnail` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "muscleGroupCode": "CHEST",
  "muscleGroupName": "Chest",
  "muscleGroupParent": "UPPER_BODY",
  "muscleGroupMuscles": [
    "PECTORALIS_MAJOR_STERNAL_HEAD",
    "ANTERIOR_DELTOID",
    "TRICEPS_BRACHII",
    "RECTUS_ABDOMINIS",
    "LATISSIMUS_DORSI",
    "BICEPS_BRACHII",
    "QUADRICEPS_FEMORIS",
    "HAMSTRINGS",
    "GASTROCNEMIUS"
  ],
  "muscleGroupType": "main_group"
}
```


---------------------------------------

# ./doc/models/exercise-instruction.md


# Exercise Instruction

## Structure

`ExerciseInstruction`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Required | The exerciseCode of the exercise to add instructions to. |
| `userId` | `string \| undefined` | Optional | The userId of the creator related to this instruction |
| `localeCode` | `string` | Required | Language code for the instructions |
| `instructionJSON` | [`InstructionJSON`] | Required | - |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL-BENCH-PRESS",
  "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
  "localeCode": "en-US",
  "instructionJSON": {
    "time": 1625832000000,
    "version": "2.24.3",
    "blocks": [
      {
        "id": "id6",
        "type": "paragraph",
        "data": {
          "text": "text0"
        }
      },
      {
        "id": "id6",
        "type": "paragraph",
        "data": {
          "text": "text0"
        }
      }
    ]
  }
}
```


---------------------------------------

# ./doc/models/user-login-request.md


# User Login Request

Data transfer object for user login

## Structure

`UserLoginRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | User's email address |
| `password` | `string` | Required | User's password |

## Example (as JSON)

```json
{
  "email": "john.doe@example.com",
  "password": "StrongP@ssw0rd!"
}
```


---------------------------------------

# ./doc/models/exercise-list-item.md


# Exercise List Item

## Structure

`ExerciseListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | Unique identifier for the exercise. |
| `exerciseName` | `string \| undefined` | Optional | Translated Primary Exercise Name for the chosen Locale |
| `exerciseTypeCode` | `string \| undefined` | Optional | The exerciseTypeCode of the exercise |
| `exerciseCategories` | `string[] \| undefined` | Optional | Array of category codes associated with this exercise |
| `publishedStatus` | `string \| undefined` | Optional | The publish status of the exercise |
| `exerciseMuscles` | [`ExerciseMuscle[] \| undefined`] | Optional | - |
| `exerciseThumbnail` | [`MediaAsset \| undefined`] | Optional | - |
| `exerciseMetrics` | `string[] \| undefined` | Optional | Array of metric codes associated with this exercise |
| `relatedExercises` | [`RelatedExerciseListItem[] \| undefined`] | Optional | - |
| `recentOrder` | `number \| undefined` | Optional | Used for sorting by most recently used exercises. |

## Example (as JSON)

```json
{
  "exerciseCode": "BENCH_PRESS",
  "exerciseName": "Bench Press",
  "exerciseTypeCode": "STRENGTH",
  "exerciseCategories": [
    "STRENGTH",
    "CARDIO"
  ],
  "publishedStatus": "PUBLISHED",
  "exerciseMuscles": [
    {
      "muscleCode": "PECTORALIS_MAJOR",
      "targetPercentage": 50,
      "isPrimary": true
    },
    {
      "muscleCode": "ANTERIOR_DELTOID",
      "targetPercentage": 30,
      "isPrimary": false
    },
    {
      "muscleCode": "TRICEPS_BRACHII",
      "targetPercentage": 20,
      "isPrimary": false
    }
  ],
  "exerciseMetrics": [
    "WEIGHT",
    "REPS",
    "DISTANCE"
  ],
  "recentOrder": 1
}
```


---------------------------------------

# ./doc/models/workout-response.md


# Workout Response

## Structure

`WorkoutResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Workout`] | Required | Represents a workout in the system. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
    "originalWorkoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
    "workoutTitle": "Full Body Strength Training",
    "workoutSlug": "full-body-strength-training",
    "createdAt": "07/01/2023 10:00:00",
    "updatedAt": "07/08/2023 14:30:00",
    "lastViewedAt": "07/07/2023 09:15:00",
    "workoutContent": {},
    "workoutBackgroundImage": {
      "mediaId": "00001014-0000-0000-0000-000000000000",
      "fileName": "fileName2",
      "filePath": "filePath2",
      "fileUrl": "fileUrl2",
      "fileSize": 88,
      "fileFormat": "fileFormat4",
      "description": "description8"
    }
  }
}
```


---------------------------------------

# ./doc/models/creator-social-media-account.md


# Creator Social Media Account

Represents a social media account associated with a creator.

## Structure

`CreatorSocialMediaAccount`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string \| undefined` | Optional | The ID of the social media platform from the predefined list. |
| `socialMediaAccountUsername` | `string \| undefined` | Optional | The creator's username on this platform. |

## Example (as JSON)

```json
{
  "socialMediaPlatformCode": "TWITTER",
  "socialMediaAccountUsername": "example_user"
}
```


---------------------------------------

# ./doc/models/muscle-group-translation-list-response.md


# Muscle Group Translation List Response

## Structure

`MuscleGroupTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MuscleGroupTranslation[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "localeCode": "en-US",
      "muscleGroupName": "Quadriceps",
      "muscleGroupDescription": "The quadriceps femoris is a large muscle group located on the front of the thigh."
    }
  ]
}
```


---------------------------------------

# ./doc/models/equipment-translation.md


# Equipment Translation

## Structure

`EquipmentTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| null \| undefined` | Optional | **Constraints**: *Minimum Length*: `0`, *Maximum Length*: `10` |
| `equipmentName` | `string` | Required | **Constraints**: *Minimum Length*: `1` |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "equipmentName": "Barbell"
}
```


---------------------------------------

# ./doc/models/workout-table-list-response.md


# Workout Table List Response

## Structure

`WorkoutTableListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`WorkoutTableItem[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
      "originalWorkoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
      "workoutTitle": "Full Body Strength Training",
      "workoutSlug": "full-body-strength-training",
      "isBookmark": true,
      "primaryMuscleGroups": [
        "CHEST",
        "QUADRICEPS",
        "BACK"
      ],
      "equipmentList": [
        "BARBELL",
        "BENCH",
        "DUMBBELL"
      ],
      "secondaryMuscleGroups": [
        "CHEST",
        "QUADRICEPS",
        "BACK"
      ],
      "createdAt": "07/01/2023 10:00:00",
      "updatedAt": "07/08/2023 14:30:00",
      "lastViewedAt": "07/07/2023 09:15:00",
      "tags": [
        "strength",
        "fullbody",
        "beginner"
      ],
      "WorkoutBackgroundImage": {
        "mediaId": "00000cba-0000-0000-0000-000000000000",
        "fileName": "fileName4",
        "filePath": "filePath0",
        "fileUrl": "fileUrl4",
        "fileSize": 14,
        "fileFormat": "fileFormat6",
        "description": "description0"
      }
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


---------------------------------------

# ./doc/models/equipment-group-list-response.md


# Equipment Group List Response

## Structure

`EquipmentGroupListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`EquipmentGroup[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "equipmentGroupCode": "DUMBBELLS",
      "equipmentGroupName": "Dumbbells",
      "equipmentGroupParent": "FREE_WEIGHTS",
      "sortOrder": 0,
      "equipmentGroupEquipment": [
        "equipmentGroupEquipment5",
        "equipmentGroupEquipment6",
        "equipmentGroupEquipment7"
      ],
      "equipmentGroupThumbnail": {
        "mediaId": "00000372-0000-0000-0000-000000000000",
        "fileName": "fileName8",
        "filePath": "filePath6",
        "fileUrl": "fileUrl8",
        "fileSize": 182,
        "fileFormat": "fileFormat0",
        "description": "description4"
      }
    }
  ]
}
```


---------------------------------------

# ./doc/models/muscle-group-type-enum.md


# Muscle Group Type Enum

## Enumeration

`MuscleGroupTypeEnum`

## Fields

| Name |
|  --- |
| `MainGroup` |
| `Subgroup` |
| `ExerciseGroup` |

## Example

```
main_group
```


---------------------------------------

# ./doc/models/equipment-list-response.md


# Equipment List Response

## Structure

`EquipmentListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Equipment[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "equipmentCode": "BARBELL",
      "equipmentName": "Barbell",
      "equipmentEquipmentGroups": [
        "WEIGHTS",
        "FREE_WEIGHTS"
      ],
      "equipmentThumbnail": {
        "mediaId": "0000103e-0000-0000-0000-000000000000",
        "fileName": "fileName4",
        "filePath": "filePath0",
        "fileUrl": "fileUrl4",
        "fileSize": 162,
        "fileFormat": "fileFormat6",
        "description": "description0"
      }
    }
  ]
}
```


---------------------------------------

# ./doc/models/exercise-category-translation-list-response.md


# Exercise Category Translation List Response

## Structure

`ExerciseCategoryTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseCategoryTranslation[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "localeCode": "en-US",
      "exerciseCategoryName": "Strength Training"
    }
  ]
}
```


---------------------------------------

# ./doc/models/muscle-group-dto.md


# Muscle Group Dto

## Structure

`MuscleGroupDto`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | The unique code of the muscle group |
| `muscleGroupName` | `string \| undefined` | Optional | The localized name of the muscle group |

## Example (as JSON)

```json
{
  "muscleGroupCode": "CHEST",
  "muscleGroupName": "Chest"
}
```


---------------------------------------

# ./doc/models/workouts-duplicate-request.md


# Workouts Duplicate Request

## Structure

`WorkoutsDuplicateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `newWorkoutTitle` | `string` | Required | The title for the new duplicated workout |

## Example (as JSON)

```json
{
  "newWorkoutTitle": "My Modified Full Body Workout"
}
```


---------------------------------------

# ./doc/models/media-asset.md


# Media Asset

## Structure

`MediaAsset`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaId` | `string` | Required | Unique identifier for the media element. |
| `fileName` | `string` | Required | The name of the file, which may be useful for generating URLs or simple validations. |
| `filePath` | `string` | Required | The relative path to the file within the storage system, useful for constructing URLs. |
| `fileUrl` | `string \| undefined` | Optional | The URL to the media file, which may be useful for embedding or downloading. |
| `fileSize` | `number` | Required | File size in bytes |
| `fileFormat` | `string \| undefined` | Optional | File format, extension |
| `description` | `string \| undefined` | Optional | Description of the media element |

## Example (as JSON)

```json
{
  "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
  "fileName": "workout_routine.mp4",
  "filePath": "media/videos/routines/workout_routine.mp4",
  "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
  "fileSize": 15728640,
  "fileFormat": "video/mp4",
  "description": "High-intensity interval training (HIIT) workout routine for beginners"
}
```


---------------------------------------

# ./doc/models/exercise-video-list-item.md


# Exercise Video List Item

## Structure

`ExerciseVideoListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Optional | Unique identifier for the user. |
| `userName` | `string \| undefined` | Optional | Username of the user who created the video. |
| `dateUpdated` | `string \| undefined` | Optional | - |
| `dateCreated` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
  "userName": "john_doe",
  "dateUpdated": "2023-07-10T11:45:00Z",
  "dateCreated": "2023-06-15T08:30:00Z"
}
```


---------------------------------------

# ./doc/models/user-info-response.md


# User Info Response

## Structure

`UserInfoResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`User`] | Required | Represents a user in the system. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "userName": "fitness_enthusiast_42",
    "emailConfirmed": true,
    "email": "jane.doe@example.com",
    "password": "$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5",
    "oAuthProvider": "Google",
    "roles": [
      "user"
    ],
    "LastSignInAt": "06/14/2023 09:30:00"
  }
}
```


---------------------------------------

# ./doc/models/muscle-translation.md


# Muscle Translation

## Structure

`MuscleTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Required | The muscle code of the translation |
| `localeCode` | `string` | Required | The locale code of the translation |
| `muscleName` | `string \| undefined` | Optional | The translated name of the muscle |

## Example (as JSON)

```json
{
  "muscleCode": "QUAD",
  "localeCode": "en-US",
  "muscleName": "Quadriceps"
}
```


---------------------------------------

# ./doc/models/equipment-group-translation-list-response.md


# Equipment Group Translation List Response

## Structure

`EquipmentGroupTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`EquipmentGroupTranslation`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "localeCode": "en-US",
    "equipmentGroupName": "Weightlifting Equipment",
    "equipmentGroupDescription": "Equipment used for weightlifting exercises"
  }
}
```


---------------------------------------

# ./doc/models/update-user-request.md


# Update User Request

## Structure

`UpdateUserRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `email` | `string \| undefined` | Optional | The user's email address. |

## Example (as JSON)

```json
{
  "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
  "email": "jane.doe@example.com"
}
```


---------------------------------------

# ./doc/models/o-auth-state-data.md


# O Auth State Data

Data object containing OAuth state information

## Structure

`OAuthStateData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `uri` | `string` | Required | The authorization URL to redirect the user to |
| `pkceVerifier` | `string` | Required | The PKCE verifier code for the OAuth flow |

## Example (as JSON)

```json
{
  "uri": "https://oauth-provider.com/auth?client_id=123&redirect_uri=...",
  "pkceVerifier": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
}
```


---------------------------------------

# ./doc/models/locale-response.md


# Locale Response

## Structure

`LocaleResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Locale`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "localeCode": "en-US",
    "localeName": "English (United States)",
    "published": true,
    "localeIcon": {
      "mediaId": "00000dd0-0000-0000-0000-000000000000",
      "fileName": "fileName2",
      "filePath": "filePath2",
      "fileUrl": "fileUrl2",
      "fileSize": 20,
      "fileFormat": "fileFormat4",
      "description": "description8"
    }
  }
}
```


---------------------------------------

# ./doc/models/exercises-videos-response-1.md


# Exercises Videos Response 1

## Structure

`ExercisesVideosResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `data` | [`ExerciseVideoResponse[] \| undefined`] | Optional | - |
| `message` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "message": {
    "key1": "val1",
    "key2": "val2"
  },
  "data": [
    {
      "status": "status2",
      "message": "message0",
      "data": {
        "exerciseCode": "exerciseCode2",
        "creatorProfileId": "00000d8c-0000-0000-0000-000000000000",
        "userName": "userName2",
        "mediaAsset": {
          "mediaId": "00001080-0000-0000-0000-000000000000",
          "fileName": "fileName0",
          "filePath": "filePath4",
          "fileUrl": "fileUrl0",
          "fileSize": 212,
          "fileFormat": "fileFormat2",
          "description": "description6"
        },
        "sortOrder": 70
      }
    }
  ]
}
```


---------------------------------------

# ./doc/models/just-gains-response-error.md


# Just Gains Response Error

## Structure

`JustGainsResponseError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


---------------------------------------

# ./doc/models/workout-data-list-response.md


# Workout Data List Response

## Structure

`WorkoutDataListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`WorkoutData[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "exerciseCode": "BARBELL_SQUAT",
      "exerciseNotes": "Keep your core tight throughout the movement",
      "exerciseOrder": 2,
      "exerciseGroupID": 1,
      "exerciseGroupType": "SUPERSET",
      "exerciseThumbnail": {
        "mediaId": "000024ec-0000-0000-0000-000000000000",
        "fileName": "fileName8",
        "filePath": "filePath6",
        "fileUrl": "fileUrl8",
        "fileSize": 240,
        "fileFormat": "fileFormat0",
        "description": "description6"
      },
      "exerciseMetrics": [
        {
          "metricCode": "metricCode6",
          "metricUnit": "metricUnit0"
        }
      ]
    }
  ]
}
```


---------------------------------------

# ./doc/models/auth-response.md


# Auth Response

Response object for authentication operations

## Structure

`AuthResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`AuthData`] | Required | Authentication data containing tokens and user information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "accessToken": "accessToken8",
    "refreshToken": "refreshToken8",
    "tokenExpiration": "tokenExpiration4",
    "userInfo": {
      "userId": "0000084a-0000-0000-0000-000000000000",
      "userName": "userName4",
      "emailConfirmed": false,
      "email": "email4",
      "password": "password6"
    }
  }
}
```


---------------------------------------

# ./doc/models/social-media-platform-update.md


# Social Media Platform Update

## Structure

`SocialMediaPlatformUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformName` | `string \| undefined` | Optional | Updated name of the social media platform |
| `socialMediaPlatformUrlFormat` | `string \| undefined` | Optional | Updated URL format for the platform's profile pages |
| `socialMediaPlatformIcon` | `string \| undefined` | Optional | Updated UUID of the associated MediaAsset for the platform's icon |

## Example (as JSON)

```json
{
  "socialMediaPlatformName": "Instagram",
  "socialMediaPlatformUrlFormat": "https://www.instagram.com/{username}",
  "socialMediaPlatformIcon": "123e4567-e89b-12d3-a456-426614174000"
}
```


---------------------------------------

# ./doc/models/media-asset-list-response.md


# Media Asset List Response

## Structure

`MediaAssetListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`MediaAsset[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
      "fileName": "workout_routine.mp4",
      "filePath": "media/videos/routines/workout_routine.mp4",
      "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
      "fileSize": 15728640,
      "fileFormat": "video/mp4",
      "description": "High-intensity interval training (HIIT) workout routine for beginners"
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


---------------------------------------

# ./doc/models/users-roles-response.md


# Users Roles Response

## Structure

`UsersRolesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | `string[]` | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    "admin",
    "user"
  ]
}
```


---------------------------------------

# ./doc/models/exercise-video-list-response.md


# Exercise Video List Response

## Structure

`ExerciseVideoListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseVideoListItem[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
      "userName": "john_doe",
      "dateUpdated": "2023-07-10T11:45:00Z",
      "dateCreated": "2023-06-15T08:30:00Z"
    }
  ]
}
```


---------------------------------------

# ./doc/models/auth-initiate-response.md


# Auth Initiate Response

## Structure

`AuthInitiateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`OAuthStateData`] | Required | Data object containing OAuth state information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "uri": "https://oauth-provider.com/auth?client_id=123&redirect_uri=...",
    "pkceVerifier": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
  }
}
```


---------------------------------------

# ./doc/models/forgot-password-request.md


# Forgot Password Request

Request object for initiating password reset

## Structure

`ForgotPasswordRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | Email address associated with the account |

## Example (as JSON)

```json
{
  "email": "john.doe@example.com"
}
```


---------------------------------------

# ./doc/models/muscles-400-error.md


# Muscles 400 Error

## Structure

`Muscles400Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `errors` | `string[] \| undefined` | Optional | A list of error messages that occurred during the operation. |
| `error` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Error",
  "message": "Operation Failed",
  "errors": [
    "Invalid input data",
    "User not found"
  ],
  "error": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


---------------------------------------

# ./doc/models/sort-order-enum.md


# Sort Order Enum

## Enumeration

`SortOrderEnum`

## Fields

| Name |
|  --- |
| `Asc` |
| `Desc` |


---------------------------------------

# ./doc/models/exercise-metric-1.md


# Exercise Metric 1

## Structure

`ExerciseMetric1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `metricCode` | `string \| undefined` | Optional | The code of the metric being recorded. |
| `metricUnit` | `string \| undefined` | Optional | The unit of measurement for this metric. |

## Example (as JSON)

```json
{
  "metricCode": "metricCode2",
  "metricUnit": "metricUnit4"
}
```


---------------------------------------

# ./doc/models/creator-profile.md


# Creator Profile

Represents a creator's profile information.

## Structure

`CreatorProfile`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `userId` | `string \| undefined` | Optional | Associated user ID, if applicable. |
| `userName` | `string \| undefined` | Optional | Creator's username. |
| `firstName` | `string \| undefined` | Optional | Creator's first name. |
| `lastName` | `string \| undefined` | Optional | Creator's last name. |
| `fullName` | `string \| undefined` | Optional | Creator's full name. |
| `profilePhoto` | [`MediaAsset \| undefined`] | Optional | - |
| `socialMediaAccounts` | [`CreatorSocialMediaAccount[] \| undefined`] | Optional | List of creator's social media accounts. |

## Example (as JSON)

```json
{
  "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "userName": "TheRock",
  "firstName": "Dwayne",
  "lastName": "Johnson",
  "fullName": "Dwayne Johnson"
}
```


---------------------------------------

# ./doc/models/locale.md


# Locale

## Structure

`Locale`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Optional | A unique code for the locale. |
| `localeName` | `string \| undefined` | Optional | The name of the locale. |
| `published` | `boolean \| undefined` | Optional | Indicates whether the locale is published. |
| `localeIcon` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "localeName": "English (United States)",
  "published": true,
  "localeIcon": {
    "mediaId": "00000dd0-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 20,
    "fileFormat": "fileFormat4",
    "description": "description8"
  }
}
```


---------------------------------------

# ./doc/models/instruction-json.md


# Instruction JSON

## Structure

`InstructionJSON`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `time` | `bigint \| undefined` | Optional | - |
| `blocks` | [`InstructionBlock[] \| undefined`] | Optional | - |
| `version` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "time": 1625832000000,
  "version": "2.24.3",
  "blocks": [
    {
      "id": "id6",
      "type": "paragraph",
      "data": {
        "text": "text0"
      }
    },
    {
      "id": "id6",
      "type": "paragraph",
      "data": {
        "text": "text0"
      }
    }
  ]
}
```


---------------------------------------

# ./doc/models/muscles-translations-response-1.md


# Muscles Translations Response 1

## Structure

`MusclesTranslationsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | `unknown \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "message": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


---------------------------------------

# ./doc/models/workout-muscle-groups-secondary.md


# Workout Muscle Groups Secondary

## Structure

`WorkoutMuscleGroupsSecondary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | Unique identifier for the muscle group. |
| `muscleGroupName` | `string \| undefined` | Optional | Name of the muscle group, localized. |
| `muscleGroupThumbnail` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "muscleGroupCode": "CHEST",
  "muscleGroupName": "Chest",
  "muscleGroupThumbnail": {
    "mediaId": "000002a2-0000-0000-0000-000000000000",
    "fileName": "fileName0",
    "filePath": "filePath4",
    "fileUrl": "fileUrl0",
    "fileSize": 246,
    "fileFormat": "fileFormat2",
    "description": "description6"
  }
}
```


---------------------------------------

# ./doc/models/exercise-metric.md


# Exercise Metric

Represents a metric associated with an exercise, including how it should be displayed.

## Structure

`ExerciseMetric`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseMetricCode` | `string \| undefined` | Optional | A unique identifier for the exercise metric. |
| `exerciseMetricTranslations` | [`ExerciseMetricTranslation[] \| undefined`] | Optional | Array of translations for the metric |

## Example (as JSON)

```json
{
  "exerciseMetricCode": "WEIGHT",
  "exerciseMetricTranslations": [
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    },
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    }
  ]
}
```


---------------------------------------

# ./doc/models/exercise-list-response.md


# Exercise List Response

## Structure

`ExerciseListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseListItem[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "exerciseCode": "BENCH_PRESS",
      "exerciseName": "Bench Press",
      "exerciseTypeCode": "STRENGTH",
      "exerciseCategories": [
        "STRENGTH",
        "CARDIO"
      ],
      "publishedStatus": "PUBLISHED",
      "exerciseMuscles": [
        {
          "muscleCode": "PECTORALIS_MAJOR",
          "targetPercentage": 50,
          "isPrimary": true
        },
        {
          "muscleCode": "ANTERIOR_DELTOID",
          "targetPercentage": 30,
          "isPrimary": false
        },
        {
          "muscleCode": "TRICEPS_BRACHII",
          "targetPercentage": 20,
          "isPrimary": false
        }
      ],
      "exerciseMetrics": [
        "WEIGHT",
        "REPS",
        "DISTANCE"
      ],
      "recentOrder": 1
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


---------------------------------------

# ./doc/models/exercise-metric-translation.md


# Exercise Metric Translation

## Structure

`ExerciseMetricTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Optional | The locale code for this translation |
| `metricName` | `string \| undefined` | Optional | Translated name of the metric |
| `measurementData` | `string \| undefined` | Optional | a custom JSON object that can be used to store any additional data related to the metric |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "measurementData": "{\r\n  \"unit\": \"lbs\",\r\n  \"precision\": 2\r\n}",
  "metricName": "metricName8"
}
```


---------------------------------------

# ./doc/models/equipment-response.md


# Equipment Response

## Structure

`EquipmentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Equipment`] | Required | Represents a piece of exercise equipment with its details and translations. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "equipmentCode": "BARBELL",
    "equipmentName": "Barbell",
    "equipmentEquipmentGroups": [
      "WEIGHTS",
      "FREE_WEIGHTS"
    ],
    "equipmentThumbnail": {
      "mediaId": "0000103e-0000-0000-0000-000000000000",
      "fileName": "fileName4",
      "filePath": "filePath0",
      "fileUrl": "fileUrl4",
      "fileSize": 162,
      "fileFormat": "fileFormat6",
      "description": "description0"
    }
  }
}
```


---------------------------------------

# ./doc/models/o-auth-settings-data.md


# O Auth Settings Data

Data object containing OAuth provider settings

## Structure

`OAuthSettingsData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Required | The OAuth client ID |
| `authorizeUrl` | `string` | Required | The authorization endpoint URL |
| `tokenUrl` | `string` | Required | The token endpoint URL |
| `scopes` | `string[]` | Required | Available OAuth scopes |

## Example (as JSON)

```json
{
  "clientId": "clientId2",
  "authorizeUrl": "authorizeUrl4",
  "tokenUrl": "tokenUrl8",
  "scopes": [
    "scopes4",
    "scopes5",
    "scopes6"
  ]
}
```


---------------------------------------

# ./doc/models/exercise-instruction-list-response.md


# Exercise Instruction List Response

## Structure

`ExerciseInstructionListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseInstructionListItem[]`] | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
      "userName": "john_doe",
      "localeCode": "en-US",
      "dateUpdated": "2023-07-10T11:45:00Z",
      "dateCreated": "2023-06-15T08:30:00Z"
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


---------------------------------------

# ./doc/models/exercise-instruction-response.md


# Exercise Instruction Response

## Structure

`ExerciseInstructionResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseInstruction`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "exerciseCode": "BARBELL-BENCH-PRESS",
    "userId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
    "localeCode": "en-US",
    "instructionJSON": {
      "time": 1625832000000,
      "version": "2.24.3",
      "blocks": [
        {
          "id": "id6",
          "type": "paragraph",
          "data": {
            "text": "text0"
          }
        },
        {
          "id": "id6",
          "type": "paragraph",
          "data": {
            "text": "text0"
          }
        }
      ]
    }
  }
}
```


---------------------------------------

# ./doc/models/just-gains-basic-response.md


# Just Gains Basic Response

## Structure

`JustGainsBasicResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully."
}
```


---------------------------------------

# ./doc/models/equipment-group-translation.md


# Equipment Group Translation

## Structure

`EquipmentGroupTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Required | The locale code for this translation |
| `equipmentGroupName` | `string` | Required | The translated name of the equipment group |
| `equipmentGroupDescription` | `string \| undefined` | Optional | The translated description of the equipment group |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "equipmentGroupName": "Weightlifting Equipment",
  "equipmentGroupDescription": "Equipment used for weightlifting exercises"
}
```


---------------------------------------

# ./doc/models/locale-list-response.md


# Locale List Response

## Structure

`LocaleListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Locale[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "localeCode": "en-US",
      "localeName": "English (United States)",
      "published": true,
      "localeIcon": {
        "mediaId": "00000dd0-0000-0000-0000-000000000000",
        "fileName": "fileName2",
        "filePath": "filePath2",
        "fileUrl": "fileUrl2",
        "fileSize": 20,
        "fileFormat": "fileFormat4",
        "description": "description8"
      }
    }
  ]
}
```


---------------------------------------

# ./doc/models/workout-muscle-groups-primary.md


# Workout Muscle Groups Primary

## Structure

`WorkoutMuscleGroupsPrimary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | Unique identifier for the muscle group. |
| `muscleGroupName` | `string \| undefined` | Optional | Name of the muscle group, localized. |
| `muscleGroupThumbnail` | [`MediaAsset \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "muscleGroupCode": "CHEST",
  "muscleGroupName": "Chest",
  "muscleGroupThumbnail": {
    "mediaId": "000002a2-0000-0000-0000-000000000000",
    "fileName": "fileName0",
    "filePath": "filePath4",
    "fileUrl": "fileUrl0",
    "fileSize": 246,
    "fileFormat": "fileFormat2",
    "description": "description6"
  }
}
```


---------------------------------------

# ./doc/models/workout-request.md


# Workout Request

A new workout being created by POST - All fields optional

## Structure

`WorkoutRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutTitle` | `string \| undefined` | Optional | The title of the workout. |
| `workoutBackgroundImage` | [`MediaAsset \| undefined`] | Optional | - |
| `workoutContent` | `unknown \| undefined` | Optional | The content of the workout (JSON formatted output from the JS Editor) |
| `workoutData` | [`WorkoutData[] \| undefined`] | Optional | - |
| `creatorCredits` | [`CreatorCredit[] \| undefined`] | Optional | List of creator credits associated with this workout. |

## Example (as JSON)

```json
{
  "workoutTitle": "Full Body Strength Training",
  "workoutContent": {},
  "workoutBackgroundImage": {
    "mediaId": "00001014-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 88,
    "fileFormat": "fileFormat4",
    "description": "description8"
  },
  "workoutData": [
    {
      "exerciseCode": "exerciseCode2",
      "exerciseNotes": "exerciseNotes8",
      "exerciseThumbnail": {
        "mediaId": "000024ec-0000-0000-0000-000000000000",
        "fileName": "fileName8",
        "filePath": "filePath6",
        "fileUrl": "fileUrl8",
        "fileSize": 240,
        "fileFormat": "fileFormat0",
        "description": "description6"
      },
      "exerciseMetrics": [
        {
          "metricCode": "metricCode6",
          "metricUnit": "metricUnit0"
        },
        {
          "metricCode": "metricCode6",
          "metricUnit": "metricUnit0"
        }
      ],
      "exerciseOrder": 132
    },
    {
      "exerciseCode": "exerciseCode2",
      "exerciseNotes": "exerciseNotes8",
      "exerciseThumbnail": {
        "mediaId": "000024ec-0000-0000-0000-000000000000",
        "fileName": "fileName8",
        "filePath": "filePath6",
        "fileUrl": "fileUrl8",
        "fileSize": 240,
        "fileFormat": "fileFormat0",
        "description": "description6"
      },
      "exerciseMetrics": [
        {
          "metricCode": "metricCode6",
          "metricUnit": "metricUnit0"
        },
        {
          "metricCode": "metricCode6",
          "metricUnit": "metricUnit0"
        }
      ],
      "exerciseOrder": 132
    }
  ],
  "creatorCredits": [
    {
      "creatorProfileId": "00002506-0000-0000-0000-000000000000",
      "workoutSourceURL": "workoutSourceURL2",
      "contributionType": "ORIGINAL_AUTHOR",
      "creatorProfile": {
        "creatorProfileId": "00001068-0000-0000-0000-000000000000",
        "userId": "00001b82-0000-0000-0000-000000000000",
        "userName": "userName4",
        "firstName": "firstName8",
        "lastName": "lastName6"
      }
    },
    {
      "creatorProfileId": "00002506-0000-0000-0000-000000000000",
      "workoutSourceURL": "workoutSourceURL2",
      "contributionType": "ORIGINAL_AUTHOR",
      "creatorProfile": {
        "creatorProfileId": "00001068-0000-0000-0000-000000000000",
        "userId": "00001b82-0000-0000-0000-000000000000",
        "userName": "userName4",
        "firstName": "firstName8",
        "lastName": "lastName6"
      }
    },
    {
      "creatorProfileId": "00002506-0000-0000-0000-000000000000",
      "workoutSourceURL": "workoutSourceURL2",
      "contributionType": "ORIGINAL_AUTHOR",
      "creatorProfile": {
        "creatorProfileId": "00001068-0000-0000-0000-000000000000",
        "userId": "00001b82-0000-0000-0000-000000000000",
        "userName": "userName4",
        "firstName": "firstName8",
        "lastName": "lastName6"
      }
    }
  ]
}
```


---------------------------------------

# ./doc/models/auth-data.md


# Auth Data

Authentication data containing tokens and user information

## Structure

`AuthData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accessToken` | `string \| undefined` | Optional | JWT access token for authenticated requests |
| `refreshToken` | `string \| undefined` | Optional | JWT refresh token for obtaining new access tokens |
| `tokenExpiration` | `string \| undefined` | Optional | Expiration time of the access token |
| `userInfo` | [`User \| undefined`] | Optional | Represents a user in the system. |

## Example (as JSON)

```json
{
  "accessToken": "accessToken8",
  "refreshToken": "refreshToken8",
  "tokenExpiration": "tokenExpiration4",
  "userInfo": {
    "userId": "0000084a-0000-0000-0000-000000000000",
    "userName": "userName4",
    "emailConfirmed": false,
    "email": "email4",
    "password": "password6"
  }
}
```


---------------------------------------

# ./doc/models/exercise-video-response.md


# Exercise Video Response

## Structure

`ExerciseVideoResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseVideo`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "exerciseCode": "BARBELL_SQUAT",
    "creatorProfileId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
    "userName": "john_doe",
    "sortOrder": 1,
    "mediaAsset": {
      "mediaId": "00001080-0000-0000-0000-000000000000",
      "fileName": "fileName0",
      "filePath": "filePath4",
      "fileUrl": "fileUrl0",
      "fileSize": 212,
      "fileFormat": "fileFormat2",
      "description": "description6"
    }
  }
}
```


---------------------------------------

# ./doc/models/social-media-platforms-validate-username-response.md


# Social Media Platforms Validate Username Response

## Structure

`SocialMediaPlatformsValidateUsernameResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Data2`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "isAvailable": true,
    "isValid": true,
    "validation": "Valid",
    "creatorProfileId": "123e4567-e89b-12d3-a456-426614174000"
  }
}
```


---------------------------------------

# ./doc/models/role.md


# Role

## Structure

`Role`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleId` | `number \| undefined` | Optional | - |
| `roleName` | `string \| undefined` | Optional | - |
| `description` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "roleId": 62,
  "roleName": "roleName0",
  "description": "description6"
}
```


---------------------------------------

# ./doc/models/exercise-muscle.md


# Exercise Muscle

## Structure

`ExerciseMuscle`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string \| undefined` | Optional | muscleCode that belongs to this exercise<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `targetPercentage` | `number \| undefined` | Optional | The percentage of effort targeted at this muscle in the exercise.<br>**Constraints**: `>= 0`, `<= 100` |
| `isPrimary` | `boolean \| undefined` | Optional | Indicates whether this muscle is the primary muscle used in the exercise. |

## Example (as JSON)

```json
{
  "muscleCode": "TRICEPS_BRACHII",
  "targetPercentage": 50,
  "isPrimary": true
}
```


---------------------------------------

# ./doc/models/user-register-request.md


# User Register Request

Data transfer object for user registration

## Structure

`UserRegisterRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `email` | `string` | Required | User's email address |
| `password` | `string` | Required | User's password (should meet security requirements) |
| `firstName` | `string \| undefined` | Optional | User's first name |
| `lastName` | `string \| undefined` | Optional | User's last name |
| `username` | `string` | Required | User's chosen username |
| `redirectUrl` | `string \| undefined` | Optional | URL to redirect after successful registration |

## Example (as JSON)

```json
{
  "email": "john.doe@example.com",
  "password": "StrongP@ssw0rd!",
  "firstName": "John",
  "lastName": "Doe",
  "username": "johndoe123",
  "redirectUrl": "https://example.com/welcome"
}
```


---------------------------------------

# ./doc/models/auth-signin-response.md


# Auth Signin Response

## Structure

`AuthSigninResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`AuthData`] | Required | Authentication data containing tokens and user information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "accessToken": "accessToken8",
    "refreshToken": "refreshToken8",
    "tokenExpiration": "tokenExpiration4",
    "userInfo": {
      "userId": "0000084a-0000-0000-0000-000000000000",
      "userName": "userName4",
      "emailConfirmed": false,
      "email": "email4",
      "password": "password6"
    }
  }
}
```


---------------------------------------

# ./doc/models/exercise-category.md


# Exercise Category

Represents a category for exercises, including its code and translations.

## Structure

`ExerciseCategory`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string \| undefined` | Optional | Unique identifier for the exercise category. |
| `exerciseCategoryName` | `string \| undefined` | Optional | The name of the exercise category in the default language (typically English). This is a read-only field derived from translations. |

## Example (as JSON)

```json
{
  "exerciseCategoryCode": "STRENGTH_TRAINING",
  "exerciseCategoryName": "Strength Training"
}
```


---------------------------------------

# ./doc/models/user-response.md


# User Response

## Structure

`UserResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`User`] | Required | Represents a user in the system. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "userId": "123e4567-e89b-12d3-a456-426614174000",
    "userName": "fitness_enthusiast_42",
    "emailConfirmed": true,
    "email": "jane.doe@example.com",
    "password": "$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5",
    "oAuthProvider": "Google",
    "roles": [
      "user"
    ],
    "LastSignInAt": "06/14/2023 09:30:00"
  }
}
```


---------------------------------------

# ./doc/models/published-status.md


# Published Status

## Structure

`PublishedStatus`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string \| undefined` | Optional | The unique code for the published status |
| `userRoleAccess` | `string \| undefined` | Optional | Comma-separated list of user roles that have access |
| `publishedStatusName` | `string \| undefined` | Optional | The name of the published status |

## Example (as JSON)

```json
{
  "publishedStatusCode": "PUBLISHED",
  "userRoleAccess": "ADMIN,USER",
  "publishedStatusName": "Published"
}
```


---------------------------------------

# ./doc/models/just-gains-pagination-response.md


# Just Gains Pagination Response

## Structure

`JustGainsPaginationResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | `unknown` | Required | - |
| `pagination` | [`Pagination \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "key1": "val1",
    "key2": "val2"
  },
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```


---------------------------------------

# ./doc/models/user-info-list-response.md


# User Info List Response

## Structure

`UserInfoListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`User[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "userId": "123e4567-e89b-12d3-a456-426614174000",
      "userName": "fitness_enthusiast_42",
      "emailConfirmed": true,
      "email": "jane.doe@example.com",
      "password": "$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5",
      "oAuthProvider": "Google",
      "roles": [
        "user"
      ],
      "LastSignInAt": "06/14/2023 09:30:00"
    }
  ]
}
```


---------------------------------------

# ./doc/models/user.md


# User

Represents a user in the system.

## Structure

`User`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string \| undefined` | Optional | Unique identifier for the user. |
| `userName` | `string \| undefined` | Optional | The user's chosen username for the platform. |
| `emailConfirmed` | `boolean \| undefined` | Optional | Indicates if the user's email has been confirmed |
| `email` | `string \| undefined` | Optional | The user's email address. |
| `password` | `string \| undefined` | Optional | The user's hashed password. This should never be exposed in API responses. |
| `oAuthProvider` | `string \| undefined` | Optional | The name of the OAuth provider if the user signed up using OAuth. |
| `roles` | `string[] \| undefined` | Optional | The user's role in the system, determining their permissions. |
| `lastSignInAt` | `string \| undefined` | Optional | Timestamp of the user's last login |
| `creatorProfile` | [`CreatorProfile1 \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "userName": "fitness_enthusiast_42",
  "emailConfirmed": true,
  "email": "jane.doe@example.com",
  "password": "$2a$10$Ks6Qr5Yl.Y5iY5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5",
  "oAuthProvider": "Google",
  "roles": [
    "user"
  ],
  "LastSignInAt": "06/14/2023 09:30:00"
}
```


---------------------------------------

# ./doc/models/target-muscle-dto.md


# Target Muscle DTO

## Structure

`TargetMuscleDTO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `muscleName` | `string \| undefined` | Optional | - |
| `targetPercentage` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 100` |

## Example (as JSON)

```json
{
  "muscle_name": "BICEP",
  "id": 244,
  "target_percentage": 80
}
```


---------------------------------------

# ./doc/models/muscle-list-response.md


# Muscle List Response

## Structure

`MuscleListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Muscle[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "muscleCode": "BICEPS_BRACHII",
      "muscleName": "Biceps Brachii"
    }
  ]
}
```


---------------------------------------

# ./doc/models/exercise-thumbnail.md


# Exercise Thumbnail

## Structure

`ExerciseThumbnail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Required | Unique identifier for the exercise. |
| `userId` | `string` | Required | The user ID of the user who created the thumbnail. |
| `userName` | `string \| undefined` | Optional | Username of the user who created this Exercise Theme. |
| `mediaAsset` | [`MediaAsset`] | Required | - |

## Example (as JSON)

```json
{
  "exerciseCode": "SQUAT",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "userName": "john_doe",
  "mediaAsset": {
    "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
    "fileName": "workout_routine.mp4",
    "filePath": "media/videos/routines/workout_routine.mp4",
    "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
    "fileSize": 15728640,
    "fileFormat": "video/mp4",
    "description": "High-intensity interval training (HIIT) workout routine for beginners"
  }
}
```


---------------------------------------

# ./doc/models/social-media-platform-create.md


# Social Media Platform Create

## Structure

`SocialMediaPlatformCreate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Required | Unique identifier for the social media platform |
| `socialMediaPlatformName` | `string` | Required | Name of the social media platform |
| `socialMediaPlatformUrlFormat` | `string` | Required | URL format for the platform's profile pages |
| `socialMediaPlatformIcon` | `string \| undefined` | Optional | UUID of the associated MediaAsset for the platform's icon |

## Example (as JSON)

```json
{
  "socialMediaPlatformCode": "INSTAGRAM",
  "socialMediaPlatformName": "Instagram",
  "socialMediaPlatformUrlFormat": "https://www.instagram.com/{username}",
  "socialMediaPlatformIcon": "123e4567-e89b-12d3-a456-426614174000"
}
```


---------------------------------------

# ./doc/models/pagination.md


# Pagination

## Structure

`Pagination`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `currentPage` | `number \| undefined` | Optional | The current page number |
| `totalPages` | `number \| undefined` | Optional | The total number of pages |
| `pageSize` | `number \| undefined` | Optional | The number of items per page |
| `totalCount` | `number \| undefined` | Optional | The total number of items across all pages |
| `hasPrevious` | `boolean \| undefined` | Optional | Indicates if there is a previous page |
| `hasNext` | `boolean \| undefined` | Optional | Indicates if there is a next page |

## Example (as JSON)

```json
{
  "currentPage": 1,
  "totalPages": 8,
  "pageSize": 10,
  "totalCount": 75,
  "hasPrevious": false,
  "hasNext": true
}
```


---------------------------------------

# ./doc/models/exercise-group-type-enum.md


# Exercise Group Type Enum

The type of group this exercise belongs to, if any. Null if not part of a group.

## Enumeration

`ExerciseGroupTypeEnum`

## Fields

| Name |
|  --- |
| `SUPERSET` |
| `INTERVAL` |
| `WARMUP` |
| `COOLDOWN` |
| `SECTION` |

## Example

```
SUPERSET
```


---------------------------------------

# ./doc/models/media-asset-assignment.md


# Media Asset Assignment

## Structure

`MediaAssetAssignment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaId` | `string \| undefined` | Optional | Unique identifier for the media element. |

## Example (as JSON)

```json
{
  "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b"
}
```


---------------------------------------

# ./doc/models/o-auth-state-response.md


# O Auth State Response

Response object for OAuth state

## Structure

`OAuthStateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`OAuthStateData`] | Required | Data object containing OAuth state information |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "uri": "https://oauth-provider.com/auth?client_id=123&redirect_uri=...",
    "pkceVerifier": "dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk"
  }
}
```


---------------------------------------

# ./doc/models/exercise-draft-dto.md


# Exercise Draft DTO

## Structure

`ExerciseDraftDTO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `fileName` | `string \| undefined` | Optional | - |
| `exerciseCode` | `string \| undefined` | Optional | - |
| `exerciseName` | `string \| undefined` | Optional | - |
| `alternateNames` | `string[] \| undefined` | Optional | - |
| `publishStatus` | [`PublishStatusEnum \| undefined`] | Optional | - |
| `models` | [`ExerciseModelDTO[] \| undefined`] | Optional | - |
| `exerciseType` | `string[] \| undefined` | Optional | - |
| `exerciseMetrics` | `string[] \| undefined` | Optional | - |
| `exerciseDifficulty` | `number \| undefined` | Optional | **Constraints**: `>= 1`, `<= 5` |
| `metabolicEquivalent` | `number \| undefined` | Optional | - |
| `equipmentRequired` | [`EquipmentRequired \| undefined`] | Optional | - |
| `primaryMuscleGroups` | [`TargetMuscleDTO[] \| undefined`] | Optional | - |
| `secondaryMuscleGroups` | [`TargetMuscleDTO[] \| undefined`] | Optional | - |
| `isPlateloaded` | `boolean \| undefined` | Optional | - |
| `isCardio` | `boolean \| undefined` | Optional | - |
| `olympicRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `powerlifterRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `calisthenicRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `popularityRating` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 5` |
| `exerciseTechnicalComplexity` | `number \| null \| undefined` | Optional | - |
| `isPlyometric` | `boolean \| undefined` | Optional | - |
| `isIsometric` | `boolean \| undefined` | Optional | - |
| `isCalisthenic` | `boolean \| undefined` | Optional | - |
| `isWeighted` | `boolean \| undefined` | Optional | - |
| `isUnilateral` | `boolean \| undefined` | Optional | - |
| `isBodyweight` | `boolean \| undefined` | Optional | - |
| `aiNotes` | `string \| undefined` | Optional | - |
| `exerciseInstructions` | [`ExerciseInstruction \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "id": 236,
  "file_name": "file_name4",
  "exercise_code": "exercise_code6",
  "exercise_name": "exercise_name6",
  "alternate_names": [
    "alternate_names1"
  ]
}
```


---------------------------------------

# ./doc/models/exercise-metric-data.md


# Exercise Metric Data

## Structure

`ExerciseMetricData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseMetricCode` | `string \| undefined` | Optional | A unique identifier for the exercise metric. |
| `exerciseMetricTranslations` | [`ExerciseMetricTranslation[] \| undefined`] | Optional | Array of translations for the metric |
| `metricName` | `string \| undefined` | Optional | Translated name of the metric in the requested locale |
| `measurementData` | `string \| undefined` | Optional | a custom JSON object that can be used to store any additional data related to the metric |

## Example (as JSON)

```json
{
  "exerciseMetricCode": "WEIGHT",
  "metricName": "Weight",
  "measurementData": "{\r\n  \"unit\": \"lbs\",\r\n  \"precision\": 2\r\n}",
  "exerciseMetricTranslations": [
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    },
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    },
    {
      "localeCode": "localeCode6",
      "metricName": "metricName8",
      "measurementData": "measurementData4"
    }
  ]
}
```


---------------------------------------

# ./doc/models/users-roles-response-1.md


# Users Roles Response 1

## Structure

`UsersRolesResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Role[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "roleId": 82,
      "roleName": "roleName4",
      "description": "description0"
    }
  ]
}
```


---------------------------------------

# ./doc/models/workout-content-response.md


# Workout Content Response

## Structure

`WorkoutContentResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`WorkoutContent`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "workoutID": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
    "updatedAt": "07/08/2023 14:30:00",
    "workoutContent": {
      "key1": "val1",
      "key2": "val2"
    }
  }
}
```


---------------------------------------

# ./doc/models/role-create-request.md


# Role Create Request

## Structure

`RoleCreateRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleName` | `string` | Required | - |
| `description` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "roleName": "roleName8",
  "description": "description8"
}
```


---------------------------------------

# ./doc/models/instruction-block.md


# Instruction Block

## Structure

`InstructionBlock`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | - |
| `type` | [`TypeEnum \| undefined`] | Optional | - |
| `data` | [`Data \| undefined`] | Optional | - |

## Example (as JSON)

```json
{
  "id": "cPYuP2KtocT",
  "type": "paragraph",
  "data": {
    "text": "text0"
  }
}
```


---------------------------------------

# ./doc/models/exercise-thumbnail-list-response.md


# Exercise Thumbnail List Response

## Structure

`ExerciseThumbnailListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`ExerciseThumbnail[]`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "exerciseCode": "SQUAT",
      "userId": "123e4567-e89b-12d3-a456-426614174000",
      "userName": "john_doe",
      "mediaAsset": {
        "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
        "fileName": "workout_routine.mp4",
        "filePath": "media/videos/routines/workout_routine.mp4",
        "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
        "fileSize": 15728640,
        "fileFormat": "video/mp4",
        "description": "High-intensity interval training (HIIT) workout routine for beginners"
      }
    }
  ]
}
```


---------------------------------------

# ./doc/models/social-media-platform-response.md


# Social Media Platform Response

## Structure

`SocialMediaPlatformResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`SocialMediaPlatform`] | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "socialMediaPlatformCode": "TWITTER",
    "socialMediaPlatformName": "Twitter",
    "socialMediaPlatformUrlFormat": "https://twitter.com/{username}",
    "socialMediaPlatformIcon": {
      "mediaId": "000004fe-0000-0000-0000-000000000000",
      "fileName": "fileName4",
      "filePath": "filePath0",
      "fileUrl": "fileUrl4",
      "fileSize": 18,
      "fileFormat": "fileFormat6",
      "description": "description0"
    }
  }
}
```


---------------------------------------

# ./doc/models/exercise-set.md


# Exercise Set

## Structure

`ExerciseSet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `setNumber` | `number` | Required | The number of the set within the exercise. |
| `metricValues` | `Record<string, number>` | Required | A map of metric codes to their corresponding values for this set. |

## Example (as JSON)

```json
{
  "setNumber": 1,
  "metricValues": {
    "WEIGHT": 100.5,
    "REPS": 10.0
  }
}
```


---------------------------------------

# ./doc/models/exercise-model-dto.md


# Exercise Model DTO

## Structure

`ExerciseModelDTO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `modelName` | `string \| undefined` | Optional | - |
| `videoId` | `string \| undefined` | Optional | - |
| `videoUrl` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "id": 118,
  "model_name": "model_name6",
  "video_id": "video_id6",
  "video_url": "video_url8"
}
```


---------------------------------------

# ./doc/models/type-enum.md


# Type Enum

## Enumeration

`TypeEnum`

## Fields

| Name |
|  --- |
| `Paragraph` |
| `Delimiter` |

## Example

```
paragraph
```


---------------------------------------

# ./doc/models/just-gains-response.md


# Just Gains Response

## Structure

`JustGainsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "key1": "val1",
    "key2": "val2"
  }
}
```


---------------------------------------

# ./doc/models/o-auth-settings.md


# O Auth Settings

OAuth provider settings response

## Structure

`OAuthSettings`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`OAuthSettingsData`] | Required | Data object containing OAuth provider settings |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "clientId": "clientId4",
    "authorizeUrl": "authorizeUrl6",
    "tokenUrl": "tokenUrl0",
    "scopes": [
      "scopes6",
      "scopes5"
    ]
  }
}
```


---------------------------------------

# ./doc/models/workout-preview.md


# Workout Preview

Represents a workout in the system.

## Structure

`WorkoutPreview`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string \| undefined` | Optional | Unique identifier for the workout. |
| `workoutTitle` | `string \| undefined` | Optional | The title of the workout. |
| `workoutBackgroundImage` | [`MediaAsset \| undefined`] | Optional | - |
| `workoutMuscleGroupsPrimary` | [`WorkoutMuscleGroupsPrimary[] \| undefined`] | Optional | - |
| `workoutMuscleGroupsSecondary` | [`WorkoutMuscleGroupsSecondary[] \| undefined`] | Optional | - |
| `workoutEquipmentGroups` | [`WorkoutEquipmentGroup[] \| undefined`] | Optional | - |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout was last updated. |
| `lastViewedAt` | `string \| undefined` | Optional | The date and time when the workout was last used. |
| `workoutData` | [`WorkoutData[] \| undefined`] | Optional | - |
| `workoutContent` | [`WorkoutContent \| undefined`] | Optional | - |
| `workoutSummary` | [`WorkoutSummary \| undefined`] | Optional | Summary information about the workout. |
| `workoutAnalytics` | [`WorkoutAnalytics \| undefined`] | Optional | Analytics data for the workout. |
| `creatorCredits` | [`CreatorCredit[] \| undefined`] | Optional | List of creator credits associated with this workout. |

## Example (as JSON)

```json
{
  "workoutId": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "workoutTitle": "Full Body Strength Training",
  "updatedAt": "07/08/2023 14:30:00",
  "lastViewedAt": "07/07/2023 09:15:00",
  "workoutBackgroundImage": {
    "mediaId": "00001014-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 88,
    "fileFormat": "fileFormat4",
    "description": "description8"
  },
  "workoutMuscleGroupsPrimary": [
    {
      "muscleGroupCode": "muscleGroupCode8",
      "muscleGroupName": "muscleGroupName8",
      "muscleGroupThumbnail": {
        "mediaId": "000002a2-0000-0000-0000-000000000000",
        "fileName": "fileName0",
        "filePath": "filePath4",
        "fileUrl": "fileUrl0",
        "fileSize": 246,
        "fileFormat": "fileFormat2",
        "description": "description6"
      }
    },
    {
      "muscleGroupCode": "muscleGroupCode8",
      "muscleGroupName": "muscleGroupName8",
      "muscleGroupThumbnail": {
        "mediaId": "000002a2-0000-0000-0000-000000000000",
        "fileName": "fileName0",
        "filePath": "filePath4",
        "fileUrl": "fileUrl0",
        "fileSize": 246,
        "fileFormat": "fileFormat2",
        "description": "description6"
      }
    },
    {
      "muscleGroupCode": "muscleGroupCode8",
      "muscleGroupName": "muscleGroupName8",
      "muscleGroupThumbnail": {
        "mediaId": "000002a2-0000-0000-0000-000000000000",
        "fileName": "fileName0",
        "filePath": "filePath4",
        "fileUrl": "fileUrl0",
        "fileSize": 246,
        "fileFormat": "fileFormat2",
        "description": "description6"
      }
    }
  ],
  "workoutMuscleGroupsSecondary": [
    {
      "muscleGroupCode": "muscleGroupCode0",
      "muscleGroupName": "muscleGroupName6",
      "muscleGroupThumbnail": {
        "mediaId": "000002a2-0000-0000-0000-000000000000",
        "fileName": "fileName0",
        "filePath": "filePath4",
        "fileUrl": "fileUrl0",
        "fileSize": 246,
        "fileFormat": "fileFormat2",
        "description": "description6"
      }
    }
  ]
}
```


---------------------------------------

# ./doc/models/equipment-group.md


# Equipment Group

## Structure

`EquipmentGroup`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string \| undefined` | Optional | Unique identifier for the equipment group. |
| `equipmentGroupName` | `string \| undefined` | Optional | Name of the equipment group, localized. |
| `equipmentGroupParent` | `string \| null \| undefined` | Optional | parent group CODE for hierarchical structuring. |
| `equipmentGroupEquipment` | `string[] \| undefined` | Optional | - |
| `equipmentGroupThumbnail` | [`MediaAsset \| undefined`] | Optional | - |
| `sortOrder` | `number \| undefined` | Optional | Used to sort the equipment groups<br>**Default**: `0` |

## Example (as JSON)

```json
{
  "equipmentGroupCode": "DUMBBELLS",
  "equipmentGroupName": "Dumbbells",
  "equipmentGroupParent": "FREE_WEIGHTS",
  "sortOrder": 0,
  "equipmentGroupEquipment": [
    "equipmentGroupEquipment9"
  ],
  "equipmentGroupThumbnail": {
    "mediaId": "00000372-0000-0000-0000-000000000000",
    "fileName": "fileName8",
    "filePath": "filePath6",
    "fileUrl": "fileUrl8",
    "fileSize": 182,
    "fileFormat": "fileFormat0",
    "description": "description4"
  }
}
```


---------------------------------------

# ./doc/controllers/exercise-library-muscles.md

# Exercise Library Muscles

```ts
const exerciseLibraryMusclesController = new ExerciseLibraryMusclesController(client);
```

## Class Name

`ExerciseLibraryMusclesController`

## Methods

* [Get Muscles]
* [Get Muscle Translations]
* [Update Muscle Translations]


# Get Muscles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscles(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code to filter muscles by language<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesController.getMuscles(localeCode);
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
| 400 | Failed to retrieve muscles | [`Muscles400Error`] |


# Get Muscle Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscleTranslations(  muscleCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Template, Required | The unique identifier code of the muscle to retrieve translations for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleTranslationListResponse`]

## Example Usage

```ts
const muscleCode = 'muscleCode0';

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesController.getMuscleTranslations(muscleCode);
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
| 400 | Failed to retrieve muscle translations | [`JustGainsErrorResponseError`] |
| 404 | Muscle not found | [`JustGainsErrorResponseError`] |


# Update Muscle Translations

```ts
async updateMuscleTranslations(  muscleCode: string,
  body: MuscleTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<MusclesTranslationsResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string` | Template, Required | The unique identifier code of the muscle to update translations for |
| `body` | [`MuscleTranslation[]`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MusclesTranslationsResponse1`]

## Example Usage

```ts
const muscleCode = 'muscleCode0';

const body: MuscleTranslation[] = [
  {
    muscleCode: '',
    localeCode: 'en-US',
    muscleName: 'Quadriceps',
  }
];

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesController.updateMuscleTranslations(
  muscleCode,
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
| 400 | Failed to update muscle translations | [`JustGainsErrorResponseError`] |
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |
| 404 | Muscle not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/common-media-assets.md

# Common Media Assets

```ts
const commonMediaAssetsController = new CommonMediaAssetsController(client);
```

## Class Name

`CommonMediaAssetsController`

## Methods

* [Get Media Assets]
* [Upload a New Media Asset]
* [Get Media Asset]
* [Update a Media Asset]
* [Delete a Media Asset]
* [Get Media Asset Detail]


# Get Media Assets

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMediaAssets(  page?: number,
  pageSize?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | **Default**: `1` |
| `pageSize` | `number \| undefined` | Query, Optional | **Default**: `20` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetListResponse`]

## Example Usage

```ts
const page = 1;

const pageSize = 20;

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.getMediaAssets(
  page,
  pageSize
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


# Upload a New Media Asset

```ts
async uploadANewMediaAsset(  file?: FileWrapper,
  mediaType?: string,
  description?: string,
  uploadDirectory?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `file` | `FileWrapper \| undefined` | Form, Optional | - |
| `mediaType` | `string \| undefined` | Form, Optional | **Constraints**: *Pattern*: `^[a-z]+/[a-z]+$` |
| `description` | `string \| undefined` | Form, Optional | - |
| `uploadDirectory` | `string \| undefined` | Form, Optional | Optional. Specify a custom upload directory. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetResponse`]

## Example Usage

```ts
const mediaType = 'image/jpeg';

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.uploadANewMediaAsset(
  undefined,
  mediaType
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


# Get Media Asset

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMediaAsset(  mediaAssetId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetResponse`]

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.getMediaAsset(mediaAssetId);
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
| 404 | Media asset not found | [`JustGainsErrorResponseError`] |


# Update a Media Asset

```ts
async updateAMediaAsset(  mediaAssetId: string,
  body: MediaAsset,
requestOptions?: RequestOptions): Promise<ApiResponse<MediaAssetResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `body` | [`MediaAsset`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MediaAssetResponse`]

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

const body: MediaAsset = {
  mediaId: '7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b',
  fileName: '',
  filePath: '',
  fileSize: 0,
};

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.updateAMediaAsset(
  mediaAssetId,
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
| 404 | Media asset not found | [`JustGainsErrorResponseError`] |


# Delete a Media Asset

```ts
async deleteAMediaAsset(  mediaAssetId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.deleteAMediaAsset(mediaAssetId);
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
| 404 | Media asset not found | [`JustGainsErrorResponseError`] |


# Get Media Asset Detail

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMediaAssetDetail(  mediaAssetId: string,
  fileName: string,
requestOptions?: RequestOptions): Promise<ApiResponse<NodeJS.ReadableStream | Blob>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mediaAssetId` | `string` | Template, Required | - |
| `fileName` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`NodeJS.ReadableStream | Blob`

## Example Usage

```ts
const mediaAssetId = '9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1';

const fileName = 'fileName4';

try {
  const { result, ...httpResponse } = await commonMediaAssetsController.getMediaAssetDetail(
  mediaAssetId,
  fileName
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
| 404 | Media asset not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/workouts.md

# Workouts

Core workout management functionality.

```ts
const workoutsController = new WorkoutsController(client);
```

## Class Name

`WorkoutsController`

## Methods

* [Get a Paginated List of Workouts]
* [Create a New Workout]
* [Get a Workout by ID]
* [Update a Workout by ID]
* [Delete a Workout]
* [Get a Workout by Workout Slug]
* [Bookmark Workout]
* [Remove Workout Bookmark]
* [Duplicate a Workout]


# Get a Paginated List of Workouts

```ts
async getAPaginatedListOfWorkouts(  page?: number,
  pageSize?: number,
  sortBy?: string,
  sortOrder?: SortOrderEnum,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutTableListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | The page number to retrieve<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `pageSize` | `number \| undefined` | Query, Optional | The number of items to retrieve per page<br>**Default**: `20`<br>**Constraints**: `>= 1`, `<= 100` |
| `sortBy` | `string \| undefined` | Query, Optional | - |
| `sortOrder` | [`SortOrderEnum \| undefined`] | Query, Optional | The order to sort the results in<br>**Default**: `SortOrderEnum.Desc` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutTableListResponse`]

## Example Usage

```ts
const page = 1;

const pageSize = 20;

const sortOrder = SortOrderEnum.Desc;

try {
  const { result, ...httpResponse } = await workoutsController.getAPaginatedListOfWorkouts(
  page,
  pageSize,
  undefined,
  sortOrder
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
| 400 | Invalid pagination parameters | [`JustGainsErrorResponseError`] |


# Create a New Workout

Creates a new workout with the provided data. Requires authentication. All fields are optional and update based on what's submitted.

```ts
async createANewWorkout(  body: WorkoutRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WorkoutRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`]

## Example Usage

```ts
const body: WorkoutRequest = {
  workoutTitle: 'Full Body Strength Training',
  workoutContent: {  },
};

try {
  const { result, ...httpResponse } = await workoutsController.createANewWorkout(body);
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
| 400 | Invalid workout data | [`JustGainsErrorResponseError`] |


# Get a Workout by ID

```ts
async getAWorkoutByID(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsController.getAWorkoutByID(workoutId);
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Update a Workout by ID

Updates an existing workout with the provided data. Requires authentication. All fields are optional and update based on what's submitted.

```ts
async updateAWorkoutByID(  workoutId: string,
  body: WorkoutRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to update |
| `body` | [`WorkoutRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const body: WorkoutRequest = {
  workoutTitle: 'Full Body Strength Training',
  workoutContent: {  },
};

try {
  const { result, ...httpResponse } = await workoutsController.updateAWorkoutByID(
  workoutId,
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
| 400 | Invalid workout data | [`JustGainsErrorResponseError`] |
| 403 | Permission denied | [`JustGainsErrorResponseError`] |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Delete a Workout

Soft-deletes a workout and all associated data

```ts
async deleteAWorkout(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to delete |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsController.deleteAWorkout(workoutId);
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
| 400 | Invalid workout ID format | [`JustGainsErrorResponseError`] |
| 403 | Permission denied | [`JustGainsErrorResponseError`] |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Get a Workout by Workout Slug

```ts
async getAWorkoutByWorkoutSlug(  workoutSlug: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutSlug` | `string` | Template, Required | The URL slug of the workout |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`]

## Example Usage

```ts
const workoutSlug = 'full-body-strength-training';

try {
  const { result, ...httpResponse } = await workoutsController.getAWorkoutByWorkoutSlug(workoutSlug);
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Bookmark Workout

Adds the specified workout to the current user's bookmarks. If the workout is already bookmarked, the request is idempotent and will not create a duplicate.

:information_source: **Note** This endpoint does not require authentication.

```ts
async bookmarkWorkout(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier of the workout to bookmark |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const workoutId = '00000e9a-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await workoutsController.bookmarkWorkout(workoutId);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | - | `ApiError` |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Remove Workout Bookmark

Removes the specified workout from the current user's bookmarks. If the workout is not bookmarked, the request is idempotent and will not result in an error.

:information_source: **Note** This endpoint does not require authentication.

```ts
async removeWorkoutBookmark(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier of the workout to remove from bookmarks |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const workoutId = '00000e9a-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await workoutsController.removeWorkoutBookmark(workoutId);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | - | `ApiError` |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Duplicate a Workout

Creates a copy of an existing workout, preserving creator credits and adding the current user as a new contributor.

```ts
async duplicateAWorkout(  workoutId: string,
  body: WorkoutsDuplicateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to duplicate |
| `body` | [`WorkoutsDuplicateRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const body: WorkoutsDuplicateRequest = {
  newWorkoutTitle: 'My Modified Full Body Workout',
};

try {
  const { result, ...httpResponse } = await workoutsController.duplicateAWorkout(
  workoutId,
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
| 400 | Invalid request data | [`JustGainsErrorResponseError`] |
| 403 | Permission denied | [`JustGainsErrorResponseError`] |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/exercise-library-exercises.md

# Exercise Library Exercises

```ts
const exerciseLibraryExercisesController = new ExerciseLibraryExercisesController(client);
```

## Class Name

`ExerciseLibraryExercisesController`

## Methods

* [Get Exercises]
* [Create a New Exercise]
* [Get Exercise]
* [Update an Exercise]
* [Delete an Exercise]
* [Get Exercise Translations]
* [Update Exercise Translations]
* [Get Exercise Muscle Group]


# Get Exercises

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExercises(  nameSearch?: string,
  exerciseCategoryCodes?: string[],
  exerciseTypeCodes?: string[],
  exerciseEquipmentCodes?: string[],
  exerciseMuscleCodes?: string[],
  exerciseMetricCodes?: string[],
  publishedStatusCodes?: string[],
  localeCode?: string,
  pageIndex?: number,
  pageSize?: number,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `nameSearch` | `string \| undefined` | Query, Optional | List of exercise names to filter by |
| `exerciseCategoryCodes` | `string[] \| undefined` | Query, Optional | List of exercise category codes to filter by<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `exerciseTypeCodes` | `string[] \| undefined` | Query, Optional | List of exercise types to filter by<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `exerciseEquipmentCodes` | `string[] \| undefined` | Query, Optional | List of exercise equipment to filter by<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `exerciseMuscleCodes` | `string[] \| undefined` | Query, Optional | List of exercise muscles to filter by (not muscle group)<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `exerciseMetricCodes` | `string[] \| undefined` | Query, Optional | List of exercise metrics to filter by<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `publishedStatusCodes` | `string[] \| undefined` | Query, Optional | List of publish statuses to filter by<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `localeCode` | `string \| undefined` | Query, Optional | Locale to filter by<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `pageIndex` | `number \| undefined` | Query, Optional | Page index for pagination<br>**Default**: `1` |
| `pageSize` | `number \| undefined` | Query, Optional | Page size for pagination<br>**Default**: `100` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseListResponse`]

## Example Usage

```ts
const nameSearch = 'Bench Press';

const exerciseCategoryCodes: string[] = [
  'STRENGTH',
  'CARDIO'
];

const localeCode = 'en-US';

const pageIndex = 1;

const pageSize = 100;

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.getExercises(
  nameSearch,
  exerciseCategoryCodes,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  localeCode,
  pageIndex,
  pageSize
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Create a New Exercise

```ts
async createANewExercise(  body: ExerciseUpdateRequest,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseUpdateRequest`] | Body, Required | - |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code to specify the language to return the newly created exercise in.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseResponse`]

## Example Usage

```ts
const body: ExerciseUpdateRequest = {
  exerciseCode: 'BARBELL_SQUAT',
  exerciseCategories: [
    'STRENGTH',
    'CARDIO'
  ],
  exerciseTypeCode: 'STRENGTH',
  publishStatusCode: PublishStatusCodeEnum.UNREVIEWED,
  difficulty: 7,
  metabolicEquivalent: 8.5,
  isPlateloaded: true,
  isCardio: false,
  olympicRating: 5,
  powerLifterRating: 5,
  calisthenicRating: 5,
  popularityRating: 5,
  isPlyometric: true,
  isIsometric: false,
  isCalisthenic: true,
  isWeighted: false,
  isUnilateral: true,
  isBodyweight: true,
  isVariant: false,
  adminNotes: 'This exercise requires supervision.',
};

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.createANewExercise(
  body,
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
| 400 | Invalid exercise data | [`JustGainsErrorResponseError`] |


# Get Exercise

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExercise(  exerciseCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | - |
| `localeCode` | `string \| undefined` | Query, Optional | Locale code to specify the language for exercise details<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.getExercise(
  exerciseCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise not found | [`JustGainsErrorResponseError`] |


# Update an Exercise

```ts
async updateAnExercise(  exerciseCode: string,
  body: ExerciseUpdateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | - |
| `body` | [`ExerciseUpdateRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const body: ExerciseUpdateRequest = {
  exerciseCode: 'BARBELL_SQUAT',
  exerciseCategories: [
    'STRENGTH',
    'CARDIO'
  ],
  exerciseTypeCode: 'STRENGTH',
  publishStatusCode: PublishStatusCodeEnum.UNREVIEWED,
  difficulty: 7,
  metabolicEquivalent: 8.5,
  isPlateloaded: true,
  isCardio: false,
  olympicRating: 5,
  powerLifterRating: 5,
  calisthenicRating: 5,
  popularityRating: 5,
  isPlyometric: true,
  isIsometric: false,
  isCalisthenic: true,
  isWeighted: false,
  isUnilateral: true,
  isBodyweight: true,
  isVariant: false,
  adminNotes: 'This exercise requires supervision.',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.updateAnExercise(
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
| 400 | Invalid exercise data | [`JustGainsErrorResponseError`] |


# Delete an Exercise

```ts
async deleteAnExercise(  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.deleteAnExercise(exerciseCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |
| 404 | Exercise not found | [`JustGainsErrorResponseError`] |


# Get Exercise Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseTranslations(  exerciseCode: string,
  localeCode?: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The unique code of the exercise |
| `localeCode` | `string[] \| undefined` | Query, Optional | The locale codes to filter by (e.g., 'en-US', 'es-ES')<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseTranslationListResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.getExerciseTranslations(exerciseCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise translations not found | [`JustGainsErrorResponseError`] |


# Update Exercise Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateExerciseTranslations(  exerciseCode: string,
  body: ExerciseTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The unique code of the exercise |
| `body` | [`ExerciseTranslation[]`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const body: ExerciseTranslation[] = [
  {
    localeCode: 'en-US',
  }
];

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.updateExerciseTranslations(
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise not found | [`JustGainsErrorResponseError`] |
| 422 | Validation error | [`JustGainsErrorResponseError`] |


# Get Exercise Muscle Group

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseMuscleGroup(  exerciseCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleGroupDtoResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The unique code of the exercise |
| `localeCode` | `string \| undefined` | Query, Optional | The locale code for the muscle group names (e.g., 'en-US', 'es-ES')<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleGroupDtoResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesController.getExerciseMuscleGroup(
  exerciseCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/users.md

# Users

User account management operations.

```ts
const usersController = new UsersController(client);
```

## Class Name

`UsersController`

## Methods

* [Get a List of All Users for Admin Management]
* [Get a User by ID]
* [Update a User]
* [Delete a User]
* [Assign User Creator Profile]


# Get a List of All Users for Admin Management

```ts
async getAListOfAllUsersForAdminManagement(requestOptions?: RequestOptions): Promise<ApiResponse<UserInfoListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserInfoListResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersController.getAListOfAllUsersForAdminManagement();
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
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 403 | Access denied | [`JustGainsErrorResponseError`] |


# Get a User by ID

```ts
async getAUserByID(  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | **Constraints**: *Pattern*: `^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`]

## Example Usage

```ts
const userId = '123e4567-e89b-12d3-a456-426614174000';

try {
  const { result, ...httpResponse } = await usersController.getAUserByID(userId);
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
| 400 | Invalid user ID format | [`JustGainsErrorResponseError`] |
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 403 | Access denied | [`JustGainsErrorResponseError`] |
| 404 | User not found | [`JustGainsErrorResponseError`] |


# Update a User

```ts
async updateAUser(  userId: string,
  body: UpdateUserRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `body` | [`UpdateUserRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`]

## Example Usage

```ts
const userId = 'userId0';

const body: UpdateUserRequest = {
  creatorProfileId: '123e4567-e89b-12d3-a456-426614174000',
  email: 'jane.doe@example.com',
};

try {
  const { result, ...httpResponse } = await usersController.updateAUser(
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
| 400 | Invalid user data | [`JustGainsErrorResponseError`] |
| 404 | User not found | [`JustGainsErrorResponseError`] |


# Delete a User

```ts
async deleteAUser(  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const userId = 'userId0';

try {
  const { result, ...httpResponse } = await usersController.deleteAUser(userId);
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
| 404 | User not found | [`JustGainsErrorResponseError`] |


# Assign User Creator Profile

```ts
async assignUserCreatorProfile(  creatorProfileId: string,
  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | The ID of the creator profile to assign to the user |
| `userId` | `string` | Template, Required | The ID of the user to assign the creator profile to |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Requires scope

### userRoles

`ADMIN`

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const creatorProfileId = '12345678-1234-1234-1234-123456789012';

const userId = '12345678-1234-1234-1234-123456789012';

try {
  const { result, ...httpResponse } = await usersController.assignUserCreatorProfile(
  creatorProfileId,
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
| 400 | Failed to assign creator profile to user | [`JustGainsErrorResponseError`] |
| 409 | Creator profile is already assigned to another user | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/exercise-library-exercise-drafts.md

# Exercise Library Exercise Drafts

```ts
const exerciseLibraryExerciseDraftsController = new ExerciseLibraryExerciseDraftsController(client);
```

## Class Name

`ExerciseLibraryExerciseDraftsController`


# Create Update an Exercise With Exercise Draft DTO

```ts
async createUpdateAnExerciseWithExerciseDraftDTO(  body: ExerciseDraftDTO,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseDraftDTO`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseResponse`]

## Example Usage

```ts
const body: ExerciseDraftDTO = {};

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseDraftsController.createUpdateAnExerciseWithExerciseDraftDTO(body);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/exercise-library-muscles-muscle-groups.md

# Exercise Library Muscles Muscle Groups

```ts
const exerciseLibraryMusclesMuscleGroupsController = new ExerciseLibraryMusclesMuscleGroupsController(client);
```

## Class Name

`ExerciseLibraryMusclesMuscleGroupsController`

## Methods

* [Get Muscle Groups]
* [Create a New Muscle Group]
* [Update Muscle Group]
* [Delete a Muscle Group]
* [Get Muscle Group Translations]
* [Update Muscle Group Translations]


# Get Muscle Groups

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscleGroups(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleGroupListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized muscle group names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleGroupListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.getMuscleGroups(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Muscle Group

```ts
async createANewMuscleGroup(  body: MuscleGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`MuscleGroup`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: MuscleGroup = {
  muscleGroupCode: 'CHEST',
  muscleGroupParent: 'UPPER_BODY',
  muscleGroupMuscles: [
    'PECTORALIS_MAJOR_STERNAL_HEAD',
    'ANTERIOR_DELTOID',
    'TRICEPS_BRACHII',
    'RECTUS_ABDOMINIS',
    'LATISSIMUS_DORSI',
    'BICEPS_BRACHII',
    'QUADRICEPS_FEMORIS',
    'HAMSTRINGS',
    'GASTROCNEMIUS'
  ],
  muscleGroupType: MuscleGroupTypeEnum.MainGroup,
};

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.createANewMuscleGroup(body);
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
| 400 | Invalid muscle group data | [`JustGainsErrorResponseError`] |
| 401 | Authentication required | [`JustGainsErrorResponseError`] |


# Update Muscle Group

```ts
async updateMuscleGroup(  muscleGroupCode: string,
  body: MuscleGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The muscle group code to update.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`MuscleGroup`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

const body: MuscleGroup = {
  muscleGroupCode: 'CHEST',
  muscleGroupParent: 'UPPER_BODY',
  muscleGroupMuscles: [
    'PECTORALIS_MAJOR_STERNAL_HEAD',
    'ANTERIOR_DELTOID',
    'TRICEPS_BRACHII',
    'RECTUS_ABDOMINIS',
    'LATISSIMUS_DORSI',
    'BICEPS_BRACHII',
    'QUADRICEPS_FEMORIS',
    'HAMSTRINGS',
    'GASTROCNEMIUS'
  ],
  muscleGroupType: MuscleGroupTypeEnum.MainGroup,
};

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.updateMuscleGroup(
  muscleGroupCode,
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
| 400 | Invalid muscle group data | [`JustGainsErrorResponseError`] |
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 404 | Muscle group not found | [`JustGainsErrorResponseError`] |


# Delete a Muscle Group

```ts
async deleteAMuscleGroup(  muscleGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The muscle group code to delete.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.deleteAMuscleGroup(muscleGroupCode);
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
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 404 | Muscle group not found | [`JustGainsErrorResponseError`] |


# Get Muscle Group Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getMuscleGroupTranslations(  muscleGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<MuscleGroupTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The unique code of the muscle group<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`MuscleGroupTranslationListResponse`]

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.getMuscleGroupTranslations(muscleGroupCode);
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
| 400 | Failed to retrieve muscle group translations | [`JustGainsErrorResponseError`] |
| 404 | Muscle group not found | [`JustGainsErrorResponseError`] |


# Update Muscle Group Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateMuscleGroupTranslations(  muscleGroupCode: string,
  body: MuscleGroupTranslation[],
  localeCodes?: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string` | Template, Required | The unique code of the muscle group<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`MuscleGroupTranslation[]`] | Body, Required | - |
| `localeCodes` | `string[] \| undefined` | Query, Optional | The array of locales for the instructions (e.g., 'en-US', 'es-ES')<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const muscleGroupCode = 'muscleGroupCode2';

const body: MuscleGroupTranslation[] = [
  {
    localeCode: 'en-US',
    muscleGroupName: 'Quadriceps',
    muscleGroupDescription: 'The quadriceps femoris is a large muscle group located on the front of the thigh.',
  }
];

const localeCodes: string[] = [
  'en-US',
  'es-ES'
];

try {
  const { result, ...httpResponse } = await exerciseLibraryMusclesMuscleGroupsController.updateMuscleGroupTranslations(
  muscleGroupCode,
  body,
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
| 400 | Failed to update muscle group translations | [`JustGainsErrorResponseError`] |
| 404 | Muscle group not found | [`JustGainsErrorResponseError`] |
| 422 | Validation error | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/exercise-library-exercises-exercise-instructions.md

# Exercise Library Exercises Exercise Instructions

```ts
const exerciseLibraryExercisesExerciseInstructionsController = new ExerciseLibraryExercisesExerciseInstructionsController(client);
```

## Class Name

`ExerciseLibraryExercisesExerciseInstructionsController`

## Methods

* [Get Exercise Instructions]
* [Get Exercise Instruction]
* [Update Exercise Instructions]


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

[`ExerciseInstructionListResponse`]

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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise instructions not found | [`JustGainsErrorResponseError`] |


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

[`ExerciseInstructionResponse`]

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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise instructions not found | [`JustGainsErrorResponseError`] |


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
| `body` | [`ExerciseInstruction`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseInstructionResponse`]

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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |
| 404 | Exercise instructions not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/users-roles.md

# Users Roles

Manage User roles.

```ts
const usersRolesController = new UsersRolesController(client);
```

## Class Name

`UsersRolesController`

## Methods

* [Assign a Role to a User]
* [Get User Roles]
* [Get All Roles]
* [Create a New Role]
* [Update a Role]
* [Delete a Role]


# Assign a Role to a User

:information_source: **Note** This endpoint does not require authentication.

```ts
async assignARoleToAUser(  userId: string,
  body: string[],
requestOptions?: RequestOptions): Promise<ApiResponse<UsersRolesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `body` | `string[]` | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsersRolesResponse`]

## Example Usage

```ts
const userId = '000013ec-0000-0000-0000-000000000000';

const body: string[] = [
  'body4',
  'body5'
];

try {
  const { result, ...httpResponse } = await usersRolesController.assignARoleToAUser(
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


# Get User Roles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getUserRoles(  userId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<UsersRolesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UsersRolesResponse1`]

## Example Usage

```ts
const userId = '000013ec-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await usersRolesController.getUserRoles(userId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get All Roles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAllRoles(requestOptions?: RequestOptions): Promise<ApiResponse<RolesResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RolesResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersRolesController.getAllRoles();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Role

:information_source: **Note** This endpoint does not require authentication.

```ts
async createANewRole(  body: RoleCreateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<RolesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`RoleCreateRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RolesResponse1`]

## Example Usage

```ts
const body: RoleCreateRequest = {
  roleName: 'roleName0',
};

try {
  const { result, ...httpResponse } = await usersRolesController.createANewRole(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Role

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateARole(  roleName: string,
  body: RoleUpdateRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<RolesResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleName` | `string` | Template, Required | - |
| `body` | [`RoleUpdateRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`RolesResponse1`]

## Example Usage

```ts
const roleName = 'roleName6';

const body: RoleUpdateRequest = {};

try {
  const { result, ...httpResponse } = await usersRolesController.updateARole(
  roleName,
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


# Delete a Role

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteARole(  roleName: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `roleName` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const roleName = 'roleName6';

try {
  const { result, ...httpResponse } = await usersRolesController.deleteARole(roleName);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


---------------------------------------

# ./doc/controllers/users-social-media-accounts.md

# Users Social Media Accounts

```ts
const usersSocialMediaAccountsController = new UsersSocialMediaAccountsController(client);
```

## Class Name

`UsersSocialMediaAccountsController`

## Methods

* [List Users Social Media Accounts]
* [Create Social Media Platform]
* [Get Social Media Platform]
* [Update Social Media Platform]
* [Delete Social Media Platform]
* [Validate Social Media Username]


# List Users Social Media Accounts

Retrieve a list of Users|Social Media Accounts with optional name filter

:information_source: **Note** This endpoint does not require authentication.

```ts
async listUsersSocialMediaAccounts(  name?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Query, Optional | Filter platforms by name |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformListResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.listUsersSocialMediaAccounts();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Social Media Platform

Create a new social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async createSocialMediaPlatform(  body: SocialMediaPlatformCreate,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`SocialMediaPlatformCreate`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformResponse`]

## Example Usage

```ts
const body: SocialMediaPlatformCreate = {
  socialMediaPlatformCode: 'INSTAGRAM',
  socialMediaPlatformName: 'Instagram',
  socialMediaPlatformUrlFormat: 'https://www.instagram.com/{username}',
  socialMediaPlatformIcon: '123e4567-e89b-12d3-a456-426614174000',
};

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.createSocialMediaPlatform(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Social Media Platform

Retrieve details of a specific social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async getSocialMediaPlatform(  socialMediaPlatformCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The unique code of the social media platform |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformResponse`]

## Example Usage

```ts
const socialMediaPlatformCode = 'socialMediaPlatformCode4';

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.getSocialMediaPlatform(socialMediaPlatformCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update Social Media Platform

Update an existing social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateSocialMediaPlatform(  socialMediaPlatformCode: string,
  body: SocialMediaPlatformUpdate,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The unique code of the social media platform |
| `body` | [`SocialMediaPlatformUpdate`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformResponse`]

## Example Usage

```ts
const socialMediaPlatformCode = 'socialMediaPlatformCode4';

const body: SocialMediaPlatformUpdate = {
  socialMediaPlatformName: 'Instagram',
  socialMediaPlatformUrlFormat: 'https://www.instagram.com/{username}',
  socialMediaPlatformIcon: '123e4567-e89b-12d3-a456-426614174000',
};

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.updateSocialMediaPlatform(
  socialMediaPlatformCode,
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


# Delete Social Media Platform

Delete a social media platform

:information_source: **Note** This endpoint does not require authentication.

```ts
async deleteSocialMediaPlatform(  socialMediaPlatformCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The unique code of the social media platform |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const socialMediaPlatformCode = 'socialMediaPlatformCode4';

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.deleteSocialMediaPlatform(socialMediaPlatformCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Validate Social Media Username

:information_source: **Note** This endpoint does not require authentication.

```ts
async validateSocialMediaUsername(  socialMediaPlatformCode: string,
  username: string,
requestOptions?: RequestOptions): Promise<ApiResponse<SocialMediaPlatformsValidateUsernameResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `socialMediaPlatformCode` | `string` | Template, Required | The code of the social media platform to check against<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `username` | `string` | Template, Required | The username to validate |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`SocialMediaPlatformsValidateUsernameResponse`]

## Example Usage

```ts
const socialMediaPlatformCode = 'INSTAGRAM';

const username = 'fitness_guru';

try {
  const { result, ...httpResponse } = await usersSocialMediaAccountsController.validateSocialMediaUsername(
  socialMediaPlatformCode,
  username
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/exercise-library-equipment.md

# Exercise Library Equipment

```ts
const exerciseLibraryEquipmentController = new ExerciseLibraryEquipmentController(client);
```

## Class Name

`ExerciseLibraryEquipmentController`

## Methods

* [Get Equipments]
* [Create Equipment]
* [Get Equipment]
* [Update Equipment]
* [Delete Equipment]
* [Get Equipment Translations]
* [Update Equipment Translations]


# Get Equipments

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipments(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized equipment names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.getEquipments(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Equipment

```ts
async createEquipment(  body: Equipment,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Equipment`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: Equipment = {
  equipmentCode: 'BARBELL',
  equipmentEquipmentGroups: [
    'WEIGHTS',
    'FREE_WEIGHTS'
  ],
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.createEquipment(body);
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
| 400 | Invalid request data. | [`JustGainsErrorResponseError`] |


# Get Equipment

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipment(  equipmentCode: string,
  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment. |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized equipment names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentResponse`]

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.getEquipment(
  equipmentCode,
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
| 404 | Equipment not found with the given code. | [`JustGainsErrorResponseError`] |


# Update Equipment

```ts
async updateEquipment(  equipmentCode: string,
  body: Equipment,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment to update. |
| `body` | [`Equipment`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const body: Equipment = {
  equipmentCode: 'BARBELL',
  equipmentEquipmentGroups: [
    'WEIGHTS',
    'FREE_WEIGHTS'
  ],
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.updateEquipment(
  equipmentCode,
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
| 400 | Bad request. Invalid input data. | [`JustGainsErrorResponseError`] |
| 404 | Equipment not found with the given code. | [`JustGainsErrorResponseError`] |
| 409 | Conflict. The equipment code already exists for a different equipment. | [`JustGainsErrorResponseError`] |


# Delete Equipment

```ts
async deleteEquipment(  equipmentCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code identifying the equipment to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.deleteEquipment(equipmentCode);
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
| 400 | Failed to delete the equipment or equipment does not exist. | [`JustGainsErrorResponseError`] |


# Get Equipment Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipmentTranslations(  equipmentCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code of the equipment |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentTranslationListResponse`]

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.getEquipmentTranslations(equipmentCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Equipment not found | [`JustGainsErrorResponseError`] |


# Update Equipment Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateEquipmentTranslations(  equipmentCode: string,
  body: EquipmentTranslation,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Template, Required | The unique code of the equipment |
| `body` | [`EquipmentTranslation`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const equipmentCode = 'equipmentCode6';

const body: EquipmentTranslation = {
  equipmentName: 'Barbell',
  localeCode: 'en-US',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentController.updateEquipmentTranslations(
  equipmentCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Equipment not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/common-published-status.md

# Common Published Status

```ts
const commonPublishedStatusController = new CommonPublishedStatusController(client);
```

## Class Name

`CommonPublishedStatusController`

## Methods

* [Get All Published Status]
* [Create Update a Published Status]
* [Delete a Published Status]


# Get All Published Status

:information_source: **Note** This endpoint does not require authentication.

```ts
async getAllPublishedStatus(requestOptions?: RequestOptions): Promise<ApiResponse<PublishedStatusListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`PublishedStatusListResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await commonPublishedStatusController.getAllPublishedStatus();
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Create Update a Published Status

```ts
async createUpdateAPublishedStatus(  publishedStatusCode: string,
  body: PublishedStatus,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | **Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`PublishedStatus`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

const body: PublishedStatus = {
  userRoleAccess: 'ADMIN,USER',
};

try {
  const { result, ...httpResponse } = await commonPublishedStatusController.createUpdateAPublishedStatus(
  publishedStatusCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Published status not found | [`JustGainsErrorResponseError`] |


# Delete a Published Status

```ts
async deleteAPublishedStatus(  publishedStatusCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `publishedStatusCode` | `string` | Template, Required | **Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const publishedStatusCode = 'publishedStatusCode2';

try {
  const { result, ...httpResponse } = await commonPublishedStatusController.deleteAPublishedStatus(publishedStatusCode);
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
| 404 | Published status not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/common-locales.md

# Common Locales

```ts
const commonLocalesController = new CommonLocalesController(client);
```

## Class Name

`CommonLocalesController`

## Methods

* [Get Locales]
* [Create a New Locale]
* [Get Locale]
* [Update a Locale]
* [Delete a Locale]


# Get Locales

:information_source: **Note** This endpoint does not require authentication.

```ts
async getLocales(  showAll: boolean,
requestOptions?: RequestOptions): Promise<ApiResponse<LocaleListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `showAll` | `boolean` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocaleListResponse`]

## Example Usage

```ts
const showAll = false;

try {
  const { result, ...httpResponse } = await commonLocalesController.getLocales(showAll);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create a New Locale

```ts
async createANewLocale(  body: Locale,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`Locale`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: Locale = {
  localeName: 'English (United States)',
  published: true,
};

try {
  const { result, ...httpResponse } = await commonLocalesController.createANewLocale(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Locale

:information_source: **Note** This endpoint does not require authentication.

```ts
async getLocale(  localeCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<LocaleResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Template, Required | The locale code to retrieve.<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocaleResponse`]

## Example Usage

```ts
const localeCode = 'localeCode2';

try {
  const { result, ...httpResponse } = await commonLocalesController.getLocale(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Update a Locale

```ts
async updateALocale(  localeCode: string,
  body: Locale,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Template, Required | The locale code to update.<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `body` | [`Locale`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const localeCode = 'localeCode2';

const body: Locale = {
  localeName: 'English (United States)',
  published: true,
};

try {
  const { result, ...httpResponse } = await commonLocalesController.updateALocale(
  localeCode,
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


# Delete a Locale

```ts
async deleteALocale(  localeCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Template, Required | The locale code to delete.<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const localeCode = 'localeCode2';

try {
  const { result, ...httpResponse } = await commonLocalesController.deleteALocale(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


---------------------------------------

# ./doc/controllers/status.md

# Status

Verify API status.

```ts
const statusController = new StatusController(client);
```

## Class Name

`StatusController`

## Methods

* [Check Server Alive]
* [Test Unauthorized]


# Check Server Alive

Returns a simple message to indicate that the API is working.

:information_source: **Note** This endpoint does not require authentication.

```ts
async checkServerAlive(requestOptions?: RequestOptions): Promise<ApiResponse<string>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`string`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await statusController.checkServerAlive();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
"All is working!"
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | `ApiError` |
| 404 | Not found | `ApiError` |


# Test Unauthorized

Returns a JSON response simulating an unauthorized access attempt.

:information_source: **Note** This endpoint does not require authentication.

```ts
async testUnauthorized(requestOptions?: RequestOptions): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await statusController.testUnauthorized();
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
| 401 | Unauthorized response | [`JustGainsResponseError`] |


---------------------------------------

# ./doc/controllers/exercise-library-exercise-metrics.md

# Exercise Library Exercise Metrics

```ts
const exerciseLibraryExerciseMetricsController = new ExerciseLibraryExerciseMetricsController(client);
```

## Class Name

`ExerciseLibraryExerciseMetricsController`

## Methods

* [Get Exercise Metrics]
* [Create a New Exercise Metric]
* [Update an Exercise Metric]
* [Delete an Exercise Metric]


# Get Exercise Metrics

Retrieve a list of all exercise metrics - Since the exercise type is never displayed, we don't have a translation for it.

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

[`ExerciseMetricListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseMetricsController.getExerciseMetrics(localeCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Create a New Exercise Metric

```ts
async createANewExerciseMetric(  body: ExerciseMetric,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseMetric`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: ExerciseMetric = {
  exerciseMetricCode: 'WEIGHT',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseMetricsController.createANewExerciseMetric(body);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


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
| `body` | [`ExerciseMetric`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const metricCode = 'metricCode4';

const body: ExerciseMetric = {
  exerciseMetricCode: 'WEIGHT',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseMetricsController.updateAnExerciseMetric(
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise metric not found | [`JustGainsErrorResponseError`] |


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

[`JustGainsResponse`]

## Example Usage

```ts
const metricCode = 'metricCode4';

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseMetricsController.deleteAnExerciseMetric(metricCode);
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
| 404 | Exercise metric not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/workouts-workout-data.md

# Workouts Workout Data

```ts
const workoutsWorkoutDataController = new WorkoutsWorkoutDataController(client);
```

## Class Name

`WorkoutsWorkoutDataController`

## Methods

* [Get Workout Data by Id]
* [Update Workout Data by Workout ID]
* [Get Workout Detail by Id]
* [Update Exercise in the Workout]
* [Deletes an Exercise From the Workout]


# Get Workout Data by Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getWorkoutDataById(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataListResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.getWorkoutDataById(workoutId);
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Update Workout Data by Workout ID

```ts
async updateWorkoutDataByWorkoutID(  workoutId: string,
  body: WorkoutData[],
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | - |
| `body` | [`WorkoutData[]`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataListResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const body: WorkoutData[] = [
  {
    exerciseCode: 'BARBELL_SQUAT',
    exerciseNotes: 'Keep your core tight throughout the movement',
    exerciseOrder: 2,
    exerciseGroupID: 1,
    exerciseGroupType: ExerciseGroupTypeEnum.SUPERSET,
  }
];

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.updateWorkoutDataByWorkoutID(
  workoutId,
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
| 400 | Invalid workout data | [`JustGainsErrorResponseError`] |
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Get Workout Detail by Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getWorkoutDetailById(  workoutId: string,
  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier code of the workout to retrieve the exercise from |
| `exerciseCode` | `string` | Template, Required | The unique identifier code of the exercise to retrieve<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.getWorkoutDetailById(
  workoutId,
  exerciseCode
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
| 404 | Workout or exercise not found | [`JustGainsErrorResponseError`] |


# Update Exercise in the Workout

```ts
async updateExerciseInTheWorkout(  workoutId: string,
  exerciseCode: string,
  body: WorkoutData,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutDataResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier code of the workout to update the exercise in |
| `exerciseCode` | `string` | Template, Required | The unique identifier code of the exercise to update<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `body` | [`WorkoutData`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutDataResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const exerciseCode = 'SQUAT';

const body: WorkoutData = {
  exerciseCode: 'BARBELL_SQUAT',
  exerciseNotes: 'Keep your core tight throughout the movement',
  exerciseOrder: 2,
  exerciseGroupID: 1,
  exerciseGroupType: ExerciseGroupTypeEnum.SUPERSET,
};

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.updateExerciseInTheWorkout(
  workoutId,
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
| 400 | Invalid exercise data | [`JustGainsErrorResponseError`] |
| 404 | Workout or exercise not found | [`JustGainsErrorResponseError`] |


# Deletes an Exercise From the Workout

```ts
async deletesAnExerciseFromTheWorkout(  workoutId: string,
  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The unique identifier code of the workout to remove the exercise from |
| `exerciseCode` | `string` | Template, Required | The unique identifier code of the exercise to remove<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await workoutsWorkoutDataController.deletesAnExerciseFromTheWorkout(
  workoutId,
  exerciseCode
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
| 404 | Workout or exercise not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/exercise-library-exercises-exercise-thumbnails.md

# Exercise Library Exercises Exercise Thumbnails

```ts
const exerciseLibraryExercisesExerciseThumbnailsController = new ExerciseLibraryExercisesExerciseThumbnailsController(client);
```

## Class Name

`ExerciseLibraryExercisesExerciseThumbnailsController`

## Methods

* [Get Exercise Thumbnails]
* [Get Exercise Thumbnail by User Id]
* [Add or Update Exercise Thumbnail]
* [Delete an Exercise Thumbnail]


# Get Exercise Thumbnails

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseThumbnails(  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseThumbnailListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve thumbnails for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseThumbnailListResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseThumbnailsController.getExerciseThumbnails(exerciseCode);
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
| 400 | Invalid exercise code | [`JustGainsErrorResponseError`] |
| 404 | Exercise thumbnails not found | [`JustGainsErrorResponseError`] |


# Get Exercise Thumbnail by User Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseThumbnailByUserId(  exerciseCode: string,
  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseThumbnailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve thumbnail for |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the creator whose thumbnail we're referencing |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseThumbnailResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseThumbnailsController.getExerciseThumbnailByUserId(
  exerciseCode,
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
| 400 | Invalid exercise code or user ID | [`JustGainsErrorResponseError`] |
| 404 | Exercise thumbnail not found | [`JustGainsErrorResponseError`] |


# Add or Update Exercise Thumbnail

```ts
async addOrUpdateExerciseThumbnail(  exerciseCode: string,
  creatorProfileId: string,
  body: MediaAssetAssignment,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseThumbnailResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to add or update thumbnail for |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the thumbnail creator |
| `body` | [`MediaAssetAssignment`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseThumbnailResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

const body: MediaAssetAssignment = {
  mediaId: '7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseThumbnailsController.addOrUpdateExerciseThumbnail(
  exerciseCode,
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
| 400 | Invalid exercise thumbnail data | [`JustGainsErrorResponseError`] |
| 401 | Authentication required | [`JustGainsErrorResponseError`] |


# Delete an Exercise Thumbnail

```ts
async deleteAnExerciseThumbnail(  exerciseCode: string,
  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the thumbnail creator |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseThumbnailsController.deleteAnExerciseThumbnail(
  exerciseCode,
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
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 404 | Exercise thumbnail not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/exercise-library-equipment-equipment-groups.md

# Exercise Library Equipment Equipment Groups

```ts
const exerciseLibraryEquipmentEquipmentGroupsController = new ExerciseLibraryEquipmentEquipmentGroupsController(client);
```

## Class Name

`ExerciseLibraryEquipmentEquipmentGroupsController`

## Methods

* [Get Equipment Groups]
* [Add Equipment Group]
* [Update Equipment Group]
* [Delete an Equipment Group]
* [Get Equipment Group Translations]
* [Update Equipment Group Translations]


# Get Equipment Groups

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipmentGroups(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentGroupListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale to use for the localized equipment group names.<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentGroupListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.getEquipmentGroups(localeCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Add Equipment Group

```ts
async addEquipmentGroup(  body: EquipmentGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`EquipmentGroup`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: EquipmentGroup = {
  equipmentGroupCode: 'DUMBBELLS',
  equipmentGroupParent: 'FREE_WEIGHTS',
  sortOrder: 0,
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.addEquipmentGroup(body);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Update Equipment Group

```ts
async updateEquipmentGroup(  equipmentGroupCode: string,
  body: EquipmentGroup,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The equipment group code to update. |
| `body` | [`EquipmentGroup`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const equipmentGroupCode = 'equipmentGroupCode8';

const body: EquipmentGroup = {
  equipmentGroupCode: 'DUMBBELLS',
  equipmentGroupParent: 'FREE_WEIGHTS',
  sortOrder: 0,
};

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.updateEquipmentGroup(
  equipmentGroupCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Delete an Equipment Group

```ts
async deleteAnEquipmentGroup(  equipmentGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The equipment group code to delete. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const equipmentGroupCode = 'equipmentGroupCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.deleteAnEquipmentGroup(equipmentGroupCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get Equipment Group Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getEquipmentGroupTranslations(  equipmentGroupCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<EquipmentGroupTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The unique code of the equipment group |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`EquipmentGroupTranslationListResponse`]

## Example Usage

```ts
const equipmentGroupCode = 'equipmentGroupCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.getEquipmentGroupTranslations(equipmentGroupCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Equipment group not found | [`JustGainsErrorResponseError`] |


# Update Equipment Group Translations

Updates the translations for a specific equipment group identified by its code.

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateEquipmentGroupTranslations(  equipmentGroupCode: string,
  body: EquipmentGroupTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentGroupCode` | `string` | Template, Required | The unique code of the equipment group |
| `body` | [`EquipmentGroupTranslation[]`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const equipmentGroupCode = 'EQP-001';

const body: EquipmentGroupTranslation[] = [
  {
    localeCode: 'en-US',
    equipmentGroupName: 'Weightlifting Equipment',
    equipmentGroupDescription: 'Equipment used for weightlifting exercises',
  }
];

try {
  const { result, ...httpResponse } = await exerciseLibraryEquipmentEquipmentGroupsController.updateEquipmentGroupTranslations(
  equipmentGroupCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Equipment group not found | [`JustGainsErrorResponseError`] |
| 422 | Validation error | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/users-creator-profiles.md

# Users Creator Profiles

```ts
const usersCreatorProfilesController = new UsersCreatorProfilesController(client);
```

## Class Name

`UsersCreatorProfilesController`

## Methods

* [Get Creator Profiles]
* [Create Creator Profile]
* [Get Creator Profile]
* [Update Creator Profile]
* [Delete Creator Profile]


# Get Creator Profiles

:information_source: **Note** This endpoint does not require authentication.

```ts
async getCreatorProfiles(  page?: number,
  mvpAssetsOnly?: boolean,
  limit?: number,
  search?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `page` | `number \| undefined` | Query, Optional | Page number for pagination<br>**Default**: `1`<br>**Constraints**: `>= 1` |
| `mvpAssetsOnly` | `boolean \| undefined` | Query, Optional | Filter creator profiles with MVP assets only |
| `limit` | `number \| undefined` | Query, Optional | Number of items per page<br>**Default**: `20`<br>**Constraints**: `>= 1`, `<= 100` |
| `search` | `string \| undefined` | Query, Optional | Optional search term to filter creator profiles. The search is case-insensitive and matches against:<br><br>- Creator's username<br>- Creator's social media account usernames<br>- Creator's full name (first name + last name)<br><br>Examples:<br><br>- search=john (matches usernames, social media accounts, or names containing "john")<br>- search=@twitter (matches social media accounts containing "@twitter")<br>- search="John Doe" (matches full names containing "John Doe")<br><br>Leave empty to retrieve all profiles without filtering. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileListResponse`]

## Example Usage

```ts
const page = 1;

const limit = 20;

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.getCreatorProfiles(
  page,
  undefined,
  limit
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |


# Create Creator Profile

```ts
async createCreatorProfile(  body: CreatorProfile,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CreatorProfile`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileResponse`]

## Example Usage

```ts
const body: CreatorProfile = {
  firstName: 'Dwayne',
  lastName: 'Johnson',
};

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.createCreatorProfile(body);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |


# Get Creator Profile

:information_source: **Note** This endpoint does not require authentication.

```ts
async getCreatorProfile(  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileResponse`]

## Example Usage

```ts
const creatorProfileId = '000008d2-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.getCreatorProfile(creatorProfileId);
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
| 404 | Creator profile not found | [`JustGainsErrorResponseError`] |


# Update Creator Profile

```ts
async updateCreatorProfile(  creatorProfileId: string,
  body: CreatorProfile,
requestOptions?: RequestOptions): Promise<ApiResponse<CreatorProfileResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `body` | [`CreatorProfile`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CreatorProfileResponse`]

## Example Usage

```ts
const creatorProfileId = '000008d2-0000-0000-0000-000000000000';

const body: CreatorProfile = {
  firstName: 'Dwayne',
  lastName: 'Johnson',
};

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.updateCreatorProfile(
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |
| 404 | Creator profile not found | [`JustGainsErrorResponseError`] |


# Delete Creator Profile

```ts
async deleteCreatorProfile(  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `creatorProfileId` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const creatorProfileId = '000008d2-0000-0000-0000-000000000000';

try {
  const { result, ...httpResponse } = await usersCreatorProfilesController.deleteCreatorProfile(creatorProfileId);
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
| 401 | Unauthorized | [`JustGainsErrorResponseError`] |
| 404 | Creator profile not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/workouts-workout-content.md

# Workouts Workout Content

```ts
const workoutsWorkoutContentController = new WorkoutsWorkoutContentController(client);
```

## Class Name

`WorkoutsWorkoutContentController`

## Methods

* [Get Workout Content by ID]
* [Update Workout Content by ID]


# Get Workout Content by ID

```ts
async getWorkoutContentByID(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutContentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutContentResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsWorkoutContentController.getWorkoutContentByID(workoutId);
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


# Update Workout Content by ID

```ts
async updateWorkoutContentByID(  workoutId: string,
  body?: WorkoutContent,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutContentResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to update |
| `body` | [`WorkoutContent \| undefined`] | Body, Optional | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutContentResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

const body: WorkoutContent = {
  workoutID: '9f897bfa-716d-4caa-b8fb-20bf3f2f3416',
};

try {
  const { result, ...httpResponse } = await workoutsWorkoutContentController.updateWorkoutContentByID(
  workoutId,
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/authentication.md

# Authentication

Endpoints for user authentication, including registration, login, logout, and token refresh.

```ts
const authenticationController = new AuthenticationController(client);
```

## Class Name

`AuthenticationController`

## Methods

* [Get User Info]
* [Update User Info]
* [Register User]
* [Login User]
* [Resend Confirmation Email]
* [Forgot Password]
* [Reset Password]
* [Refresh Token]
* [Signout]
* [Initiate Auth]
* [Handle Callback]
* [Get Settings]


# Get User Info

```ts
async getUserInfo(requestOptions?: RequestOptions): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await authenticationController.getUserInfo();
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
| 401 | Failed to retrieve user information | [`JustGainsErrorResponseError`] |


# Update User Info

```ts
async updateUserInfo(  body: UpdateUserRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UpdateUserRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const body: UpdateUserRequest = {
  creatorProfileId: '123e4567-e89b-12d3-a456-426614174000',
  email: 'jane.doe@example.com',
};

try {
  const { result, ...httpResponse } = await authenticationController.updateUserInfo(body);
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
| 400 | Failed to update user information | [`JustGainsErrorResponseError`] |


# Register User

:information_source: **Note** This endpoint does not require authentication.

```ts
async registerUser(  body: UserRegisterRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<UserResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UserRegisterRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`UserResponse`]

## Example Usage

```ts
const body: UserRegisterRequest = {
  email: 'john.doe@example.com',
  password: 'StrongP@ssw0rd!',
  username: 'johndoe123',
  firstName: 'John',
  lastName: 'Doe',
  redirectUrl: 'https://example.com/welcome',
};

try {
  const { result, ...httpResponse } = await authenticationController.registerUser(body);
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
| 400 | Invalid parameters | [`JustGainsErrorResponseError`] |


# Login User

:information_source: **Note** This endpoint does not require authentication.

```ts
async loginUser(  body: UserLoginRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthSigninResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`UserLoginRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthSigninResponse`]

## Example Usage

```ts
const body: UserLoginRequest = {
  email: 'john.doe@example.com',
  password: 'StrongP@ssw0rd!',
};

try {
  const { result, ...httpResponse } = await authenticationController.loginUser(body);
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
| 400 | Invalid credentials | [`JustGainsErrorResponseError`] |


# Resend Confirmation Email

:information_source: **Note** This endpoint does not require authentication.

```ts
async resendConfirmationEmail(  body: ConfirmEmailRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConfirmEmailRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: ConfirmEmailRequest = {
  email: 'john.doe@example.com',
};

try {
  const { result, ...httpResponse } = await authenticationController.resendConfirmationEmail(body);
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
| 400 | Failed to send confirmation email | [`JustGainsErrorResponseError`] |


# Forgot Password

:information_source: **Note** This endpoint does not require authentication.

```ts
async forgotPassword(  body: ForgotPasswordRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ForgotPasswordRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const body: ForgotPasswordRequest = {
  email: 'john.doe@example.com',
};

try {
  const { result, ...httpResponse } = await authenticationController.forgotPassword(body);
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
| 404 | Failed to send password reset email | [`JustGainsErrorResponseError`] |


# Reset Password

:information_source: **Note** This endpoint does not require authentication.

```ts
async resetPassword(  body: ResetPasswordRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ResetPasswordRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: ResetPasswordRequest = {
  newPassword: 'NewStrongP@ssw0rd!',
};

try {
  const { result, ...httpResponse } = await authenticationController.resetPassword(body);
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
| 400 | Failed to reset password | [`JustGainsErrorResponseError`] |


# Refresh Token

:information_source: **Note** This endpoint does not require authentication.

```ts
async refreshToken(requestOptions?: RequestOptions): Promise<ApiResponse<AuthRefreshTokenResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthRefreshTokenResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await authenticationController.refreshToken();
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
| 400 | Failed to refresh token | [`JustGainsErrorResponseError`] |


# Signout

```ts
async signout(requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await authenticationController.signout();
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
| 400 | Failed to sign out user | [`JustGainsErrorResponseError`] |


# Initiate Auth

:information_source: **Note** This endpoint does not require authentication.

```ts
async initiateAuth(  provider: string,
  body: InitiateAuthRequest,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthInitiateResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `provider` | `string` | Template, Required | OAuth provider name (e.g., 'google', 'facebook') |
| `body` | [`InitiateAuthRequest`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthInitiateResponse`]

## Example Usage

```ts
const provider = 'google';

const body: InitiateAuthRequest = {
  redirectUrl: 'https://example.com/callback',
};

try {
  const { result, ...httpResponse } = await authenticationController.initiateAuth(
  provider,
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
| 400 | Failed to initiate OAuth flow | [`JustGainsErrorResponseError`] |


# Handle Callback

:information_source: **Note** This endpoint does not require authentication.

```ts
async handleCallback(  provider: string,
  code: string,
  error?: string,
  errorDescription?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthCallbackResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `provider` | `string` | Template, Required | OAuth provider name (e.g., 'google', 'facebook') |
| `code` | `string` | Query, Required | Authorization code from OAuth provider |
| `error` | `string \| undefined` | Query, Optional | Error code from OAuth provider |
| `errorDescription` | `string \| undefined` | Query, Optional | Detailed error description from OAuth provider |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthCallbackResponse`]

## Example Usage

```ts
const provider = 'google';

const code = 'code8';

try {
  const { result, ...httpResponse } = await authenticationController.handleCallback(
  provider,
  code
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
| 400 | Failed to handle OAuth callback | [`JustGainsErrorResponseError`] |


# Get Settings

:information_source: **Note** This endpoint does not require authentication.

```ts
async getSettings(  provider: string,
requestOptions?: RequestOptions): Promise<ApiResponse<AuthSettingsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `provider` | `string` | Template, Required | OAuth provider name (e.g., 'google', 'facebook') |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`AuthSettingsResponse`]

## Example Usage

```ts
const provider = 'google';

try {
  const { result, ...httpResponse } = await authenticationController.getSettings(provider);
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
| 400 | Failed to retrieve OAuth provider settings | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/workouts-workout-preview.md

# Workouts Workout Preview

```ts
const workoutsWorkoutPreviewController = new WorkoutsWorkoutPreviewController(client);
```

## Class Name

`WorkoutsWorkoutPreviewController`


# Get Workout Preview by ID

```ts
async getWorkoutPreviewByID(  workoutId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<WorkoutPreviewResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `string` | Template, Required | The ID of the workout to retrieve |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`WorkoutPreviewResponse`]

## Example Usage

```ts
const workoutId = '9f897bfa-716d-4caa-b8fb-20bf3f2f3416';

try {
  const { result, ...httpResponse } = await workoutsWorkoutPreviewController.getWorkoutPreviewByID(workoutId);
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
| 404 | Workout not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/exercise-library-exercises-exercise-videos.md

# Exercise Library Exercises Exercise Videos

```ts
const exerciseLibraryExercisesExerciseVideosController = new ExerciseLibraryExercisesExerciseVideosController(client);
```

## Class Name

`ExerciseLibraryExercisesExerciseVideosController`

## Methods

* [Get Exercise Video On]
* [Get Exercise Video by User Id]
* [Add New Exercise Videos to the Specified Creator Theme]
* [Delete an Exercise Video]


# Get Exercise Video On

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseVideoOn(  exerciseCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseVideoListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve videos for |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseVideoListResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.getExerciseVideoOn(exerciseCode);
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
| 400 | Invalid exercise code | [`JustGainsErrorResponseError`] |
| 404 | Exercise videos not found | [`JustGainsErrorResponseError`] |


# Get Exercise Video by User Id

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseVideoByUserId(  exerciseCode: string,
  creatorProfileId: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExercisesVideosResponse1>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to retrieve videos for |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the creator whose videos we're referencing |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExercisesVideosResponse1`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.getExerciseVideoByUserId(
  exerciseCode,
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
| 400 | Invalid exercise code | [`JustGainsErrorResponseError`] |
| 404 | Exercise videos not found | [`JustGainsErrorResponseError`] |


# Add New Exercise Videos to the Specified Creator Theme

```ts
async addNewExerciseVideosToTheSpecifiedCreatorTheme(  exerciseCode: string,
  creatorProfileId: string,
  body: MediaAssetAssignment,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseVideoResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code to add videos to |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the video creator |
| `body` | [`MediaAssetAssignment`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseVideoResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

const body: MediaAssetAssignment = {
  mediaId: '7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.addNewExerciseVideosToTheSpecifiedCreatorTheme(
  exerciseCode,
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
| 400 | Invalid exercise video data | [`JustGainsErrorResponseError`] |
| 401 | Authentication required | [`JustGainsErrorResponseError`] |


# Delete an Exercise Video

```ts
async deleteAnExerciseVideo(  exerciseCode: string,
  creatorProfileId: string,
  exerciseVideoId: number,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Template, Required | The exercise code |
| `creatorProfileId` | `string` | Template, Required | The creatorProfileId of the video creator |
| `exerciseVideoId` | `number` | Template, Required | The exercise video ID to delete |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const exerciseCode = 'exerciseCode8';

const creatorProfileId = 'creatorProfileId8';

const exerciseVideoId = 66;

try {
  const { result, ...httpResponse } = await exerciseLibraryExercisesExerciseVideosController.deleteAnExerciseVideo(
  exerciseCode,
  creatorProfileId,
  exerciseVideoId
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
| 401 | Authentication required | [`JustGainsErrorResponseError`] |
| 404 | Exercise video not found | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/controllers/exercise-library-exercise-categories.md

# Exercise Library Exercise Categories

```ts
const exerciseLibraryExerciseCategoriesController = new ExerciseLibraryExerciseCategoriesController(client);
```

## Class Name

`ExerciseLibraryExerciseCategoriesController`

## Methods

* [Get Exercise Categories]
* [Create Exercise Category]
* [Update Exercise Category]
* [Delete an Exercise Category]
* [Get Exercise Category Translations]
* [Update Exercise Category Translations]


# Get Exercise Categories

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseCategories(  localeCode?: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoryListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Query, Optional | The locale for returned category names<br>**Default**: `'en-US'`<br>**Constraints**: *Pattern*: `^[a-z]{2}-[A-Z]{2}$` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoryListResponse`]

## Example Usage

```ts
const localeCode = 'en-US';

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.getExerciseCategories(localeCode);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Create Exercise Category

```ts
async createExerciseCategory(  body: ExerciseCategory,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ExerciseCategory`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const body: ExerciseCategory = {
  exerciseCategoryCode: 'STRENGTH_TRAINING',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.createExerciseCategory(body);
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
| 400 | Bad Request | [`JustGainsErrorResponseError`] |


# Update Exercise Category

```ts
async updateExerciseCategory(  exerciseCategoryCode: string,
  body: ExerciseCategory,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | - |
| `body` | [`ExerciseCategory`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

const body: ExerciseCategory = {
  exerciseCategoryCode: 'STRENGTH_TRAINING',
};

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.updateExerciseCategory(
  exerciseCategoryCode,
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
| 400 | Bad Request | [`JustGainsErrorResponseError`] |
| 404 | Category not found | [`JustGainsErrorResponseError`] |


# Delete an Exercise Category

```ts
async deleteAnExerciseCategory(  exerciseCategoryCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsResponse`]

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.deleteAnExerciseCategory(exerciseCategoryCode);
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
| 404 | Category not found | [`JustGainsErrorResponseError`] |


# Get Exercise Category Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async getExerciseCategoryTranslations(  exerciseCategoryCode: string,
requestOptions?: RequestOptions): Promise<ApiResponse<ExerciseCategoryTranslationListResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | The unique code of the exercise category |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ExerciseCategoryTranslationListResponse`]

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.getExerciseCategoryTranslations(exerciseCategoryCode);
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise category not found | [`JustGainsErrorResponseError`] |


# Update Exercise Category Translations

:information_source: **Note** This endpoint does not require authentication.

```ts
async updateExerciseCategoryTranslations(  exerciseCategoryCode: string,
  body: ExerciseCategoryTranslation[],
requestOptions?: RequestOptions): Promise<ApiResponse<JustGainsBasicResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCategoryCode` | `string` | Template, Required | The unique code of the exercise category |
| `body` | [`ExerciseCategoryTranslation[]`] | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`JustGainsBasicResponse`]

## Example Usage

```ts
const exerciseCategoryCode = 'exerciseCategoryCode8';

const body: ExerciseCategoryTranslation[] = [
  {
    localeCode: 'en-US',
    exerciseCategoryName: 'Strength Training',
  }
];

try {
  const { result, ...httpResponse } = await exerciseLibraryExerciseCategoriesController.updateExerciseCategoryTranslations(
  exerciseCategoryCode,
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
| 400 | Bad request | [`JustGainsErrorResponseError`] |
| 404 | Exercise category not found | [`JustGainsErrorResponseError`] |
| 422 | Validation error | [`JustGainsErrorResponseError`] |


---------------------------------------

# ./doc/auth/oauth-2-bearer-token.md


# OAuth 2 Bearer token



Documentation for accessing and setting credentials for bearerAuth.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| AccessToken | `string` | The OAuth 2.0 Access Token to use for API requests. | `accessToken` |



**Note:** Auth credentials can be set using `bearerAuthCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  bearerAuthCredentials: {
    accessToken: 'AccessToken'
  },
});
```



---------------------------------------

# ./doc/auth/custom-header-signature.md


# Custom Header Signature



Documentation for accessing and setting credentials for userRoles.

## Auth Credentials

| Name | Type | Description | Setter |
|  --- | --- | --- | --- |
| X-User-Role | `string` | User role required for the operation | `xUserRole` |



**Note:** Auth credentials can be set using `userRolesCredentials` object in the client.

## Usage Example

### Client Initialization

You must provide credentials in the client as shown in the following code snippet.

```ts
const client = new Client({
  userRolesCredentials: {
    'X-User-Role': 'X-User-Role'
  },
});
```



---------------------------------------

# ./doc/client.md


# Client Class Documentation

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Testing`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `bearerAuthCredentials` | [`BearerAuthCredentials`] | The credential object for bearerAuth |
| `userRolesCredentials` | [`UserRolesCredentials`] | The credential object for userRoles |

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


---------------------------------------

# ./doc/api-error.md


# ApiError

Thrown when the HTTP status code is not okay.

The ApiError extends the ApiResponse interface, so all ApiResponse properties are available.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| request | HttpRequest | Original request that resulted in this response. |
| statusCode | number | Response status code. |
| headers | Record<string, string> | Response headers. |
| result | T | Response data. |
| body | string \| Blob \| NodeJS.ReadableStream | Original body from the response. |


---------------------------------------

# ./doc/api-response.md


# ApiResponse

An interface for the result of an API call.

## Properties

| Name | Type | Description |
|  --- | --- | --- |
| request | HttpRequest | Original request that resulted in this response. |
| statusCode | number | Response status codee. |
| headers | Record<string, string> | Response headers. |
| result | T | Response data. |
| body | string \| Blob \| NodeJS.ReadableStream | Original body from the response. |


---------------------------------------

# ./README.md


# Getting Started with JustGains-API

## Introduction

API for managing workout programs, exercises, and user accounts. Includes endpoints for creating, updating, and deleting workouts, exercises, and user profiles, as well as managing exercise instructions, videos, and equipment data.

## Install the Package

Run the following command from your project directory to install the package from npm:

```ts
npm install just-gains-api-sdk@0.2.2
```

For additional package details, see the [Npm page for the just-gains-api-sdk@0.2.2 npm].

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

**_Note:_** Documentation for the client can be found [here.]

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | `Environment` | The API environment. <br> **Default: `Environment.Testing`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `bearerAuthCredentials` | [`BearerAuthCredentials`] | The credential object for bearerAuth |
| `userRolesCredentials` | [`UserRolesCredentials`] | The credential object for userRoles |

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

* [`bearerAuth (OAuth 2 Bearer token)`]
* [`userRoles (Custom Header Signature)`]

## List of APIs

* [Users Creator Profiles]
* [Users Social Media Accounts]
* [Exercise Library Exercises]
* [Exercise Library Exercises Exercise Instructions]
* [Exercise Library Exercises Exercise Videos]
* [Exercise Library Exercises Exercise Thumbnails]
* [Exercise Library Muscles]
* [Exercise Library Muscles Muscle Groups]
* [Exercise Library Equipment]
* [Exercise Library Equipment Equipment Groups]
* [Exercise Library Exercise Drafts]
* [Exercise Library Exercise Categories]
* [Exercise Library Exercise Metrics]
* [Workouts Workout Data]
* [Workouts Workout Content]
* [Workouts Workout Preview]
* [Common Media Assets]
* [Common Locales]
* [Common Published Status]
* [Status]
* [Authentication]
* [Users]
* [Users Roles]
* [Workouts]

## Classes Documentation

* [ApiResponse]
* [ApiError]


---------------------------------------

