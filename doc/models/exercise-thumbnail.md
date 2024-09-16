
# Exercise Thumbnail

## Structure

`ExerciseThumbnail`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `exerciseCode` | `string` | Required | Unique identifier for the exercise. |
| `userId` | `string` | Required | The user ID of the user who created the thumbnail. |
| `userName` | `string \| undefined` | Optional | Username of the user who created this Exercise Theme. |
| `mediaAsset` | [`MediaAsset`](../../doc/models/media-asset.md) | Required | - |

## Example (as JSON)

```json
{
  "exerciseCode": "SQUAT",
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "userName": "john_doe",
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

