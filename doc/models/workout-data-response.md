
# Workout Data Response

## Structure

`WorkoutDataResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`WorkoutData1`](../../doc/models/workout-data-1.md) | Required | The data returned by the operation. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
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
}
```

