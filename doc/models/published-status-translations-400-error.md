
# Published Status Translations 400 Error

## Structure

`PublishedStatusTranslations400Error`

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
  "message": "Failed to retrieve published status translations",
  "errors": [
    "Invalid published status code"
  ]
}
```

