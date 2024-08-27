
# Exercises Videos 404 Error

## Structure

`ExercisesVideos404Error`

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
  "message": "Exercise videos not found",
  "errors": [
    "No videos found for the specified exercise code"
  ]
}
```

