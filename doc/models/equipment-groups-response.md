
# Equipment Groups Response

## Structure

`EquipmentGroupsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`EquipmentGroupList[] \| undefined`](../../doc/models/equipment-group-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Equipment groups retrieved successfully",
  "data": [
    {
      "equipmentGroupCode": "equipmentGroupCode2",
      "equipmentGroupName": "equipmentGroupName6",
      "equipmentGroupType": "main_group",
      "equipmentGroupParent": "equipmentGroupParent4",
      "subgroups": [
        {
          "equipmentGroupCode": "equipmentGroupCode4",
          "equipmentGroupName": "equipmentGroupName8",
          "equipmentGroupType": "exercise_group",
          "equipmentGroupParent": "equipmentGroupParent6"
        },
        {
          "equipmentGroupCode": "equipmentGroupCode4",
          "equipmentGroupName": "equipmentGroupName8",
          "equipmentGroupType": "exercise_group",
          "equipmentGroupParent": "equipmentGroupParent6"
        }
      ]
    }
  ]
}
```

