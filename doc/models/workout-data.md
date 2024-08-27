
# Workout Data

Represents a single exercise within a workout, including its data, order, and grouping information.

## Structure

`WorkoutData`

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
  "exerciseMetrics": [
    {
      "code": "WEIGHT",
      "unit": "KG",
      "metricCode": "metricCode6",
      "metricUnit": "metricUnit0"
    },
    {
      "code": "REPS",
      "unit": "COUNT",
      "metricCode": "metricCode6",
      "metricUnit": "metricUnit0"
    }
  ],
  "exerciseData": [
    [
      1.0,
      100.0,
      10.0
    ],
    [
      2.0,
      110.0,
      8.0
    ],
    [
      3.0,
      120.0,
      6.0
    ],
    [
      4.0,
      120.0,
      6.0
    ]
  ],
  "exerciseOrder": 2,
  "exerciseGroupID": 1,
  "exerciseGroupType": "SUPERSET"
}
```

