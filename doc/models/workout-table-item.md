
# Workout Table Item

Represents a workout in the system from the My Workouts Page.

## Structure

`WorkoutTableItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `number \| undefined` | Optional | Unique identifier for the workout. |
| `workoutTitle` | `string \| undefined` | Optional | The title of the workout. |
| `workoutImage` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `isMyWorkout` | `boolean \| undefined` | Optional | Indicates if the workout is a user's own workout. |
| `creatorCredits` | [`CreatorCredit[] \| undefined`](../../doc/models/creator-credit.md) | Optional | List of creator credits associated with this workout. |
| `primaryMuscleGroups` | `string[] \| undefined` | Optional | List of primary muscle group codes targeted in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `equipmentList` | `string[] \| undefined` | Optional | List of equipment codes used in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `secondaryMuscleGroups` | `string[] \| undefined` | Optional | List of secondary muscles targeted in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `createdAt` | `string \| undefined` | Optional | The date and time when the workout was created. |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout was last updated. |
| `lastUsedAt` | `string \| undefined` | Optional | The date and time when the workout was last used. |
| `tags` | `string[] \| undefined` | Optional | NOT IMPLEMENTED:- TODO- List of tags associated with the workout. |
| `workoutSummary` | [`WorkoutSummary \| undefined`](../../doc/models/workout-summary.md) | Optional | Summary information about the workout. |
| `analytics` | [`WorkoutAnalytics \| undefined`](../../doc/models/workout-analytics.md) | Optional | Analytics data for the workout. |
| `originalWorkoutId` | `number \| undefined` | Optional | ID of the original workout if this is a duplicate. |

## Example (as JSON)

```json
{
  "workoutId": 1234,
  "workoutTitle": "Full Body Strength Training",
  "isMyWorkout": true,
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
  "lastUsedAt": "07/07/2023 09:15:00",
  "tags": [
    "strength",
    "fullbody",
    "beginner"
  ],
  "originalWorkoutId": 1000,
  "workoutImage": {
    "mediaId": "00000cf4-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 40,
    "fileFormat": "fileFormat4",
    "description": "description8"
  },
  "creatorCredits": [
    {
      "creatorProfileId": "00002506-0000-0000-0000-000000000000",
      "workoutSourceURL": "workoutSourceURL2",
      "contributionType": "ORIGINAL_AUTHOR",
      "creatorProfile": {
        "creatorProfileId": "00001068-0000-0000-0000-000000000000",
        "userId": "00001b82-0000-0000-0000-000000000000",
        "creatorEmail": "creatorEmail0",
        "profilePhoto": {
          "mediaId": "000006b6-0000-0000-0000-000000000000",
          "fileName": "fileName4",
          "filePath": "filePath0",
          "fileUrl": "fileUrl4",
          "fileSize": 10,
          "fileFormat": "fileFormat6",
          "description": "description0"
        },
        "socialMediaAccounts": [
          {
            "socialMediaPlatformCode": "socialMediaPlatformCode8",
            "socialMediaAccountUsername": "socialMediaAccountUsername8"
          },
          {
            "socialMediaPlatformCode": "socialMediaPlatformCode8",
            "socialMediaAccountUsername": "socialMediaAccountUsername8"
          }
        ]
      }
    }
  ]
}
```

