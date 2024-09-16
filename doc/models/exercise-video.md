
# Exercise Video

## Structure

`ExerciseVideo`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string \| undefined` | Optional | Unique identifier for the exercise. |
| `userId` | `string \| undefined` | Optional | The user ID of the user who created the exercise. |
| `userName` | `string \| undefined` | Optional | Username of the user who created the video. |
| `mediaAsset` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `sortOrder` | `number \| undefined` | Optional | The order in which the video should be displayed. |

## Example (as JSON)

```json
{
  "exerciseCode": "BARBELL_SQUAT",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
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

