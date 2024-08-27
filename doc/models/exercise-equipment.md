
# Exercise Equipment

## Structure

`ExerciseEquipment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `required` | `string[] \| undefined` | Optional | Array of equipment codes that are required for this exercise |
| `optional` | `string[] \| undefined` | Optional | Array of equipment codes that are optional for this exercise |

## Example (as JSON)

```json
{
  "required": [
    "BARBELL",
    "BENCH",
    "WEIGHT_PLATES"
  ],
  "optional": [
    "WEIGHT_BELT",
    "WRIST_WRAPS"
  ]
}
```

