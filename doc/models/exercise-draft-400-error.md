
# Exercise Draft 400 Error

## Structure

`ExerciseDraft400Error`

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
  "message": "Failed to update exercise",
  "errors": [
    "Invalid exercise data format"
  ]
}
```

