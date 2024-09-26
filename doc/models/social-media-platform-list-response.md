
# Social Media Platform List Response

## Structure

`SocialMediaPlatformListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`SocialMediaPlatform[]`](../../doc/models/social-media-platform.md) | Required | - |
| `pagination` | [`Pagination \| undefined`](../../doc/models/pagination.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "socialMediaPlatformCode": "TWITTER",
      "socialMediaPlatformName": "Twitter",
      "socialMediaPlatformUrlFormat": "https://twitter.com/{username}",
      "socialMediaPlatformIcon": "123e4567-e89b-12d3-a456-426614174000"
    }
  ],
  "pagination": {
    "currentPage": 166,
    "totalPages": 154,
    "pageSize": 134,
    "totalCount": 250,
    "hasPrevious": false
  }
}
```

