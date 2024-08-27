
# Exercises Muscle Groups 400 Error

## Structure

`ExercisesMuscleGroups400Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Bad Request",
  "message": "Invalid request parameters",
  "errors": [
    "Invalid exercise code",
    "Invalid locale code"
  ]
}
```

