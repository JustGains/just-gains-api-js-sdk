
# Equipment Group Translation 1

The data returned by the operation.

## Structure

`EquipmentGroupTranslation1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Required | The locale code for this translation |
| `equipmentGroupName` | `string` | Required | The translated name of the equipment group |
| `equipmentGroupDescription` | `string \| undefined` | Optional | The translated description of the equipment group |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "equipmentGroupName": "Weightlifting Equipment",
  "equipmentGroupDescription": "Equipment used for weightlifting exercises"
}
```

