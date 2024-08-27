
# Exercises Instructions User Id 400 Error

## Structure

`ExercisesInstructionsUserId400Error`

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
  "message": "Invalid request",
  "errors": [
    "Invalid exercise code"
  ]
}
```

