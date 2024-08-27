
# Media Assets Response

## Structure

`MediaAssetsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`MediaAsset[] \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `pagination` | [`Pagination \| undefined`](../../doc/models/pagination.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Media assets retrieved successfully",
  "data": [
    {
      "mediaId": "00001930-0000-0000-0000-000000000000",
      "fileName": "fileName4",
      "filePath": "filePath0",
      "fileUrl": "fileUrl4",
      "fileSize": 148,
      "fileFormat": "fileFormat6",
      "description": "description0"
    },
    {
      "mediaId": "00001930-0000-0000-0000-000000000000",
      "fileName": "fileName4",
      "filePath": "filePath0",
      "fileUrl": "fileUrl4",
      "fileSize": 148,
      "fileFormat": "fileFormat6",
      "description": "description0"
    },
    {
      "mediaId": "00001930-0000-0000-0000-000000000000",
      "fileName": "fileName4",
      "filePath": "filePath0",
      "fileUrl": "fileUrl4",
      "fileSize": 148,
      "fileFormat": "fileFormat6",
      "description": "description0"
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

