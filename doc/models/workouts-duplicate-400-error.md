
# Workouts Duplicate 400 Error

## Structure

`WorkoutsDuplicate400Error`

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
  "message": "Invalid contribution type",
  "errors": [
    "INVALID_CONTRIBUTION_TYPE"
  ]
}
```

