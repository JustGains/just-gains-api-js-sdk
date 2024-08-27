
# Programs Reviews 400 Error

## Structure

`ProgramsReviews400Error`

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
  "message": "Failed to add review",
  "errors": [
    "Invalid review data"
  ]
}
```

