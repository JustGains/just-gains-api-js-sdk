
# Media Assets Response 1

## Structure

`MediaAssetsResponse1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Data17 \| undefined`](../../doc/models/data-17.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "Created",
  "message": "Media asset created successfully",
  "data": {
    "mediaId": "00001930-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 148
  }
}
```

