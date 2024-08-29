
# Published Status List Response

## Structure

`PublishedStatusListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`PublishedStatus[]`](../../doc/models/published-status.md) | Required | The data returned by the operation. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "publishedStatusCode": "PUBLISHED",
      "userRoleAccess": "ADMIN,USER",
      "publishedStatusName": "Published"
    }
  ]
}
```

