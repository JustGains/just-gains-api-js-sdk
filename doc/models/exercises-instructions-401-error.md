
# Exercises Instructions 401 Error

## Structure

`ExercisesInstructions401Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Unauthorized",
  "message": "Unauthorized",
  "errors": [
    "User not authenticated"
  ]
}
```

