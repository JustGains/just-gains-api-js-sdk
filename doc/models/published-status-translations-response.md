
# Published Status Translations Response

## Structure

`PublishedStatusTranslationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`PublishedStatusTranslation \| undefined`](../../doc/models/published-status-translation.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Published status translations retrieved successfully",
  "data": {
    "localeCode": "localeCode2",
    "publishedStatusName": "publishedStatusName4"
  }
}
```

