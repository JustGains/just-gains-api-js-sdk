
# Equipment 1

The data returned by the operation.

## Structure

`Equipment1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Required | A unique identifier for the equipment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `equipmentName` | `string \| undefined` | Optional | The name of the equipment, localized. |
| `equipmentThumbnail` | [`MediaAsset \| undefined`](../../doc/models/media-asset.md) | Optional | - |
| `equipmentEquipmentGroups` | `string[] \| null \| undefined` | Optional | A list of equipment groups this equipment belongs to. |

## Example (as JSON)

```json
{
  "equipmentCode": "BARBELL",
  "equipmentName": "Barbell",
  "equipmentEquipmentGroups": [
    "WEIGHTS",
    "FREE_WEIGHTS"
  ],
  "equipmentThumbnail": {
    "mediaId": "0000103e-0000-0000-0000-000000000000",
    "fileName": "fileName4",
    "filePath": "filePath0",
    "fileUrl": "fileUrl4",
    "fileSize": 162,
    "fileFormat": "fileFormat6",
    "description": "description0"
  }
}
```

