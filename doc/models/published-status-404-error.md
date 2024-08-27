
# Published Status 404 Error

## Structure

`PublishedStatus404Error`

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
  "message": "Published status not found",
  "errors": [
    "The requested published status could not be found"
  ]
}
```

