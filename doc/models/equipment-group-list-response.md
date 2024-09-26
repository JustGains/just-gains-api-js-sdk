
# Equipment Group List Response

## Structure

`EquipmentGroupListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`EquipmentGroup[]`](../../doc/models/equipment-group.md) | Required | - |

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
      "equipmentGroupThumbnail": {
        "mediaId": "00000372-0000-0000-0000-000000000000",
        "fileName": "fileName8",
        "filePath": "filePath6",
        "fileUrl": "fileUrl8",
        "fileSize": 182,
        "fileFormat": "fileFormat0",
        "description": "description4"
      }
    }
  ]
}
```

