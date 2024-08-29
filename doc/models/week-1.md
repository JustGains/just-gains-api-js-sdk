
# Week 1

The data returned by the operation.

## Structure

`Week1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `weekId` | `number` | Required | Unique identifier for the week. |
| `userId` | `string` | Required | Identifier of the user who created or owns this week. |
| `weekTitle` | `string` | Required | Title or name of the week. |
| `weekContent` | `string` | Required | JSON string containing the structured content of the week, including workout plans and notes. |
| `weekThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `createdAt` | `string` | Required | Timestamp of when the week was created. |
| `updatedAt` | `string` | Required | Timestamp of when the week was last updated. |
| `deletedAt` | `string \| undefined` | Optional | Timestamp of when the week was soft deleted, if applicable. |
| `deletedBy` | `string \| undefined` | Optional | Identifier of the user who deleted the week, if applicable. |

## Example (as JSON)

```json
{
  "weekId": 1234,
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "weekTitle": "Week 1: Foundation Building",
  "weekContent": "{\"monday\": {\"workoutId\": 101, \"notes\": \"Focus on form\"}, \"wednesday\": {\"workoutId\": 102, \"notes\": \"Increase weight if possible\"}, \"friday\": {\"workoutId\": 103, \"notes\": \"Cool down properly\"}}",
  "createdAt": "07/21/2023 15:30:00",
  "updatedAt": "07/22/2023 10:15:00",
  "deletedAt": "08/01/2023 09:00:00",
  "deletedBy": "987e6543-e21b-12d3-a456-426614174000",
  "weekThumbnail": {
    "mediaId": "0000005c-0000-0000-0000-000000000000",
    "fileName": "fileName8",
    "filePath": "filePath6",
    "fileUrl": "fileUrl8",
    "fileSize": 192,
    "fileFormat": "fileFormat0",
    "description": "description4"
  }
}
```

