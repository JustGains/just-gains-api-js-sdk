
# Workout Data

## Structure

`WorkoutData`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | Unique identifier for the exercise. |
| `exerciseNotes` | `string \| undefined` | Optional | Additional notes or instructions for this specific instance of the exercise. |
| `exerciseThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `exerciseMetrics` | [`ExerciseMetric1[] \| undefined`](../../doc/models/exercise-metric-1.md) | Optional | List of metric codes and their units used for this exercise, in order |
| `exerciseOrder` | `number \| undefined` | Optional | The order of this exercise within the workout or its group. |
| `exerciseGroupID` | `number \| null \| undefined` | Optional | Identifier for the group this exercise belongs to, if any. Null if not part of a group. |
| `exerciseGroupType` | [`ExerciseGroupTypeEnum \| null \| undefined`](../../doc/models/exercise-group-type-enum.md) | Optional | The type of group this exercise belongs to, if any. Null if not part of a group. |
| `exerciseData` | [`ExerciseSet[] \| undefined`](../../doc/models/exercise-set.md) | Optional | - |

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

