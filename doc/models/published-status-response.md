
# Published Status Response

## Structure

`PublishedStatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`PublishedStatus[] \| undefined`](../../doc/models/published-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Published statuses retrieved successfully",
  "data": [
    {
      "publishedStatusCode": "publishedStatusCode8",
      "userRoleAccess": "userRoleAccess0",
      "publishedStatusName": "publishedStatusName4"
    },
    {
      "publishedStatusCode": "publishedStatusCode8",
      "userRoleAccess": "userRoleAccess0",
      "publishedStatusName": "publishedStatusName4"
    },
    {
      "publishedStatusCode": "publishedStatusCode8",
      "userRoleAccess": "userRoleAccess0",
      "publishedStatusName": "publishedStatusName4"
    }
  ]
}
```

