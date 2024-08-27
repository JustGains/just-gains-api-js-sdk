
# Exercises Muscle Groups 404 Error

## Structure

`ExercisesMuscleGroups404Error`

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
  "message": "Exercise not found",
  "errors": [
    "No exercise found with the specified code"
  ]
}
```

