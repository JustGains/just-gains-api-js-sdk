
# Published Status Response 1

## Structure

`PublishedStatusResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`PublishedStatus \| undefined`](../../doc/models/published-status.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "Created",
  "message": "Published status created successfully",
  "data": {
    "publishedStatusCode": "publishedStatusCode8",
    "userRoleAccess": "userRoleAccess0",
    "publishedStatusName": "publishedStatusName4"
  }
}
```

