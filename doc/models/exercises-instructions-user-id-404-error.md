
# Exercises Instructions User Id 404 Error

## Structure

`ExercisesInstructionsUserId404Error`

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
  "message": "Exercise instructions not found",
  "errors": [
    "No instructions found for the specified exercise code"
  ]
}
```

