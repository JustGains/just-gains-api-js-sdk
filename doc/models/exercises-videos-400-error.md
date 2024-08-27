
# Exercises Videos 400 Error

## Structure

`ExercisesVideos400Error`

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
  "message": "Invalid exercise code",
  "errors": [
    "Invalid exercise code provided"
  ]
}
```

