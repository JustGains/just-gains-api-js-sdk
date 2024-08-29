
# Equipment Group List Response

## Structure

`EquipmentGroupListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`EquipmentGroup[]`](../../doc/models/equipment-group.md) | Required | The data returned by the operation. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "equipmentGroupCode": "DUMBBELLS",
      "equipmentGroupName": "Dumbbells",
      "equipmentGroupParent": "FREE_WEIGHTS",
      "sortOrder": 0,
      "equipmentGroupEquipment": [
        "equipmentGroupEquipment5",
        "equipmentGroupEquipment6",
        "equipmentGroupEquipment7"
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
  ]
}
```
