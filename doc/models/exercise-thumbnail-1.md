
# Exercise Thumbnail 1

The data returned by the operation.

## Structure

`ExerciseThumbnail1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Required | Unique identifier for the exercise. |
| `userId` | `string` | Required | The user ID of the user who created the thumbnail. |
| `mediaAsset` | [`MediaAsset`](../../doc/models/media-asset.md) | Required | - |

## Example (as JSON)

```json
{
  "exerciseCode": "exerciseCode2",
  "userId": "000010cc-0000-0000-0000-000000000000",
  "mediaAsset": {
    "mediaId": "7b8e9f2a-c1d3-45e6-a7b8-9c0d1e2f3a4b",
    "fileName": "workout_routine.mp4",
    "filePath": "media/videos/routines/workout_routine.mp4",
    "fileUrl": "https://api.justsuperhuman.com/media/videos/routines/workout_routine.mp4",
    "fileSize": 15728640,
    "fileFormat": "video/mp4",
    "description": "High-intensity interval training (HIIT) workout routine for beginners"
  }
}
```

