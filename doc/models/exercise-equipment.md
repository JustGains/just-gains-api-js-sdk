
# Exercise Equipment

## Structure

`ExerciseEquipment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `required` | `string[] \| undefined` | Optional | Array of equipment code arrays that are required for this exercise |
| `optional` | `string[] \| undefined` | Optional | Array of equipment code arrays that are optional for this exercise |

## Example (as JSON)

```json
{
  "required": [
    [
      "BARBELL",
      "WEIGHT_PLATES"
    ],
    [
      "DUMBBELLS"
    ]
  ],
  "optional": [
    [
      "WEIGHT_BELT",
      "WRIST_WRAPS"
    ],
    [
      "RESISTANCE_BANDS"
    ]
  ]
}
```

