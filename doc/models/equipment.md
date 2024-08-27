
# Equipment

Represents a piece of exercise equipment with its details and translations.

## Structure

`Equipment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `equipmentCode` | `string` | Required | A unique identifier for the equipment.<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `100` |
| `equipmentName` | `string \| undefined` | Optional | The name of the equipment, localized. |
| `equipmentThumbnail` | `string \| null \| undefined` | Optional | An optional thumbnail image representing the equipment. |
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
  "equipmentThumbnail": "equipmentThumbnail0"
}
```

