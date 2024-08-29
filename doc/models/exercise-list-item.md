
# Exercise List Item

## Structure

`ExerciseListItem`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | Unique identifier for the exercise. |
| `exerciseName` | `string \| undefined` | Optional | Translated Primary Exercise Name for the chosen Locale |
| `exerciseMuscles` | [`ExerciseMuscle[] \| undefined`](../../doc/models/exercise-muscle.md) | Optional | - |
| `exerciseThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `recentOrder` | `number \| undefined` | Optional | Used for sorting by most recently used exercises. |
| `exerciseTypeCode` | `string \| undefined` | Optional | The exerciseTypeCode of the exercise |
| `exerciseMetrics` | `string[] \| undefined` | Optional | Array of metric codes associated with this exercise |

## Example (as JSON)

```json
{
  "exerciseCode": "BENCH_PRESS",
  "exerciseName": "Bench Press",
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
  "recentOrder": 1,
  "exerciseTypeCode": "STRENGTH",
  "exerciseMetrics": [
    "WEIGHT",
    "REPS",
    "DISTANCE"
  ],
  "exerciseThumbnail": {
    "mediaId": "000024ec-0000-0000-0000-000000000000",
    "fileName": "fileName8",
    "filePath": "filePath6",
    "fileUrl": "fileUrl8",
    "fileSize": 240,
    "fileFormat": "fileFormat0",
    "description": "description6"
  }
}
```

