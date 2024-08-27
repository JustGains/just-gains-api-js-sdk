
# Exercises Videos 401 Error

## Structure

`ExercisesVideos401Error`

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
  "message": "Authentication required",
  "errors": [
    "User is not authenticated"
  ]
}
```

