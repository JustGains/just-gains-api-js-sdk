
# Workout Muscle Groups Primary

## Structure

`WorkoutMuscleGroupsPrimary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleGroupCode` | `string \| undefined` | Optional | Unique identifier for the muscle group. |
| `muscleGroupName` | `string \| undefined` | Optional | Name of the muscle group, localized. |
| `muscleGroupThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |

## Example (as JSON)

```json
{
  "muscleGroupCode": "CHEST",
  "muscleGroupName": "Chest",
  "muscleGroupThumbnail": {
    "mediaId": "000002a2-0000-0000-0000-000000000000",
    "fileName": "fileName0",
    "filePath": "filePath4",
    "fileUrl": "fileUrl0",
    "fileSize": 246,
    "fileFormat": "fileFormat2",
    "description": "description6"
  }
}
```

