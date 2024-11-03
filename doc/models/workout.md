
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
| `workoutBackgroundImage` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `createdAt` | `string \| undefined` | Optional | The date and time when the workout was created. |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout was last updated. |
| `lastViewedAt` | `string \| undefined` | Optional | The date and time when the workout was last used. |
| `workoutSummary` | [`WorkoutSummary \| undefined`](../../doc/models/workout-summary.md) | Optional | Summary information about the workout. |
| `workoutAnalytics` | [`WorkoutAnalytics \| undefined`](../../doc/models/workout-analytics.md) | Optional | Analytics data for the workout. |
| `workoutData` | [`WorkoutData[] \| undefined`](../../doc/models/workout-data.md) | Optional | - |
| `workoutContent` | `unknown \| undefined` | Optional | The content of the workout (JSON formatted output from the JS Editor) |
| `creatorCredits` | [`CreatorCredit[] \| undefined`](../../doc/models/creator-credit.md) | Optional | List of creator credits associated with this workout. |

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

