
# Workout Update

## Structure

`WorkoutUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutTitle` | `string \| undefined` | Optional | The title of the workout. |
| `workoutBackgroundImage` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `workoutSlug` | `string \| undefined` | Optional | The URL slug of the workout. |
| `tags` | `string[] \| undefined` | Optional | (NOT IMPLEMENTED) List of tags associated with the workout. |

## Example (as JSON)

```json
{
  "workoutTitle": "Full Body Strength Training",
  "workoutSlug": "full-body-strength-training",
  "tags": [
    "strength",
    "fullbody",
    "beginner"
  ],
  "workoutBackgroundImage": {
    "mediaId": "00001014-0000-0000-0000-000000000000",
    "fileName": "fileName2",
    "filePath": "filePath2",
    "fileUrl": "fileUrl2",
    "fileSize": 88,
    "fileFormat": "fileFormat4",
    "description": "description8"
  }
}
```

