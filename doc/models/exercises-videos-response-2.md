
# Exercises Videos Response 2

## Structure

`ExercisesVideosResponse2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`ExerciseVideo[] \| undefined`](../../doc/models/exercise-video.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Exercise videos updated successfully",
  "data": [
    {
      "exerciseCode": "exerciseCode2",
      "userId": "000018a6-0000-0000-0000-000000000000",
      "mediaElement": {
        "mediaId": "00001ea4-0000-0000-0000-000000000000",
        "fileName": "fileName0",
        "filePath": "filePath4",
        "fileUrl": "fileUrl0",
        "fileSize": 200,
        "fileFormat": "fileFormat2",
        "description": "description6"
      },
      "sortOrder": 70
    },
    {
      "exerciseCode": "exerciseCode2",
      "userId": "000018a6-0000-0000-0000-000000000000",
      "mediaElement": {
        "mediaId": "00001ea4-0000-0000-0000-000000000000",
        "fileName": "fileName0",
        "filePath": "filePath4",
        "fileUrl": "fileUrl0",
        "fileSize": 200,
        "fileFormat": "fileFormat2",
        "description": "description6"
      },
      "sortOrder": 70
    }
  ]
}
```

