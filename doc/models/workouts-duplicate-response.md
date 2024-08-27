
# Workouts Duplicate Response

## Structure

`WorkoutsDuplicateResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Data96 \| undefined`](../../doc/models/data-96.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "Created",
  "message": "Workout duplicated successfully",
  "data": {
    "workoutId": 20,
    "workoutTitle": "workoutTitle8",
    "updatedAt": "2016-03-13T12:52:32.123Z",
    "lastUsedAt": "2016-03-13T12:52:32.123Z",
    "totalUses": 108
  }
}
```

