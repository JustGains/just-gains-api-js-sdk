
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
| `workoutImage` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `isBookmark` | `boolean \| undefined` | Optional | Indicates if the workout is a user's own workout or a bookmarked one from another user. |
| `creatorCredits` | [`CreatorCredit[] \| undefined`](../../doc/models/creator-credit.md) | Optional | List of creator credits associated with this workout. |
| `primaryMuscleGroups` | `string[] \| undefined` | Optional | List of primary muscle group codes targeted in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `equipmentList` | `string[] \| undefined` | Optional | List of equipment codes used in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `secondaryMuscleGroups` | `string[] \| undefined` | Optional | List of secondary muscles targeted in the workout.<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `createdAt` | `string \| undefined` | Optional | The date and time when the workout was created. |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout was last updated. |
| `lastViewedAt` | `string \| undefined` | Optional | The date and time when the workout was last used. |
| `tags` | `string[] \| undefined` | Optional | NOT IMPLEMENTED:- TODO- List of tags associated with the workout. |
| `workoutSummary` | [`WorkoutSummary \| undefined`](../../doc/models/workout-summary.md) | Optional | Summary information about the workout. |
| `workoutAnalytics` | [`WorkoutAnalytics \| undefined`](../../doc/models/workout-analytics.md) | Optional | Analytics data for the workout. |

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
  "workoutImage": {
    "mediaId": "00000cf4-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 40,
    "fileFormat": "fileFormat4",
    "description": "description8"
  }
}
```

