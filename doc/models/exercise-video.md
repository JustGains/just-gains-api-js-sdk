
# Exercise Video

## Structure

`ExerciseVideo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | Unique identifier for the exercise. |
| `creatorProfileId` | `string \| undefined` | Optional | Unique identifier for the creator profile. |
| `userName` | `string \| undefined` | Optional | Username of the user who created the video. |
| `mediaAsset` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `sortOrder` | `number \| undefined` | Optional | The order in which the video should be displayed. |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL_SQUAT",
  "creatorProfileId": "9fdd12f5-c7b9-82a8-f6cc-cceac14c13c1",
  "userName": "john_doe",
  "sortOrder": 1,
  "mediaAsset": {
    "mediaId": "00001080-0000-0000-0000-000000000000",
    "fileName": "fileName0",
    "filePath": "filePath4",
    "fileUrl": "fileUrl0",
    "fileSize": 212,
    "fileFormat": "fileFormat2",
    "description": "description6"
  }
}
```

