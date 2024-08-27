
# Workouts Data Response 1

## Structure

`WorkoutsDataResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Data99 \| undefined`](../../doc/models/data-99.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Exercise data retrieved successfully",
  "data": {
    "exerciseCode": "exerciseCode2",
    "exerciseNotes": "exerciseNotes8",
    "exerciseMetrics": [
      {
        "metricCode": "metricCode6",
        "metricUnit": "metricUnit0"
      }
    ],
    "exerciseData": [
      [
        98.87
      ]
    ],
    "exerciseOrder": 162
  }
}
```

