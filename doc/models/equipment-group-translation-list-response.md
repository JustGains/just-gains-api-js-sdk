
# Equipment Group Translation List Response

## Structure

`EquipmentGroupTranslationListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`EquipmentGroupTranslation1`](../../doc/models/equipment-group-translation-1.md) | Required | The data returned by the operation. |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": {
    "localeCode": "en-US",
    "equipmentGroupName": "Weightlifting Equipment",
    "equipmentGroupDescription": "Equipment used for weightlifting exercises"
  }
}
```
