
# Published Status 400 Error

## Structure

`PublishedStatus400Error`

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
  "message": "Failed to retrieve published statuses",
  "errors": [
    "Invalid locale code"
  ]
}
```

