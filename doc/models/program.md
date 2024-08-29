
# Program

Represents a training program consisting of multiple weeks and workouts.

## Structure

`Program`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `programId` | `number` | Required | Unique identifier for the program. |
| `userId` | `string` | Required | Identifier of the user who created the program. |
| `programName` | `string` | Required | Name of the training program. |
| `programDescription` | `string` | Required | Detailed description of the program, its goals, and target audience. |
| `programThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `publishStatusCode` | `string` | Required | Code indicating the publish status of the program (e.g., draft, published, archived). |
| `createdAt` | `string` | Required | Timestamp of when the program was created. |
| `updatedAt` | `string` | Required | Timestamp of when the program was last updated. |
| `deletedAt` | `string \| undefined` | Optional | Timestamp of when the program was soft deleted, if applicable. |
| `deletedBy` | `string \| undefined` | Optional | Identifier of the user who deleted the program, if applicable. |

## Example (as JSON)

```json
{
  "programId": 1001,
  "userId": "123e4567-e89b-12d3-a456-426614174000",
  "programName": "12-Week Strength Builder",
  "programDescription": "A comprehensive strength training program designed for intermediate lifters looking to increase their overall strength in major compound lifts.",
  "publishStatusCode": "PUBLISHED",
  "createdAt": "07/01/2023 09:00:00",
  "updatedAt": "07/15/2023 14:30:00",
  "deletedAt": "08/01/2023 10:00:00",
  "deletedBy": "987e6543-e21b-12d3-a456-426614174000",
  "programThumbnail": {
    "mediaId": "00001cb0-0000-0000-0000-000000000000",
    "fileName": "fileName0",
    "filePath": "filePath4",
    "fileUrl": "fileUrl0",
    "fileSize": 20,
    "fileFormat": "fileFormat2",
    "description": "description6"
  }
}
```

