
# Data 99

## Structure

`Data99`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | Unique identifier for the exercise. |
| `exerciseNotes` | `string \| undefined` | Optional | Additional notes or instructions for this specific instance of the exercise. |
| `exerciseMetrics` | [`ExerciseMetric1[] \| undefined`](../../doc/models/exercise-metric-1.md) | Optional | List of metric codes and their units used for this exercise, in order |
| `exerciseData` | `number[] \| undefined` | Optional | Array of sets, each containing the set number and metric values in order. |
| `exerciseOrder` | `number \| undefined` | Optional | The order of this exercise within the workout or its group. |
| `exerciseGroupID` | `number \| null \| undefined` | Optional | Identifier for the group this exercise belongs to, if any. Null if not part of a group. |
| `exerciseGroupType` | [`ExerciseGroupTypeEnum \| null \| undefined`](../../doc/models/exercise-group-type-enum.md) | Optional | The type of group this exercise belongs to, if any. Null if not part of a group. |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL_SQUAT",
  "exerciseNotes": "Keep your core tight throughout the movement",
  "exerciseOrder": 2,
  "exerciseGroupID": 1,
  "exerciseGroupType": "SUPERSET",
  "exerciseMetrics": [
    {
      "metricCode": "metricCode6",
      "metricUnit": "metricUnit0"
    },
    {
      "metricCode": "metricCode6",
      "metricUnit": "metricUnit0"
    },
    {
      "metricCode": "metricCode6",
      "metricUnit": "metricUnit0"
    }
  ],
  "exerciseData": [
    [
      167.57,
      167.58,
      167.59
    ],
    [
      167.57,
      167.58,
      167.59
    ],
    [
      167.57,
      167.58,
      167.59
    ]
  ]
}
```

