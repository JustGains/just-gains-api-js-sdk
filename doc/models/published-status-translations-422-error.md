
# Published Status Translations 422 Error

## Structure

`PublishedStatusTranslations422Error`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `errors` | `string[] \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "status": "Unknown Status",
  "message": "Failed to process the request",
  "errors": [
    "Invalid locale code",
    "Duplicate translations for the same locale"
  ]
}
```

