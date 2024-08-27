
# Workouts Duplicate 403 Error

## Structure

`WorkoutsDuplicate403Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Forbidden",
  "message": "You don't have permission to duplicate this workout",
  "errors": [
    "DUPLICATE_PERMISSION_DENIED"
  ]
}
```

