
# Workouts Duplicate 404 Error

## Structure

`WorkoutsDuplicate404Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Not Found",
  "message": "Workout not found",
  "errors": [
    "WORKOUT_NOT_FOUND"
  ]
}
```

