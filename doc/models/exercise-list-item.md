
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
| `exerciseMuscles` | [`ExerciseMuscle[] \| undefined`](../../doc/models/exercise-muscle.md) | Optional | - |
| `exerciseThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `exerciseMetrics` | `string[] \| undefined` | Optional | Array of metric codes associated with this exercise |
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

