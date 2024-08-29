
# Target Muscle DTO

## Structure

`TargetMuscleDTO`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `number \| undefined` | Optional | - |
| `muscleName` | `string \| undefined` | Optional | - |
| `targetPercentage` | `number \| undefined` | Optional | **Constraints**: `>= 0`, `<= 100` |

## Example (as JSON)

```json
{
  "muscle_name": "BICEP",
  "id": 244,
  "target_percentage": 80
}
```

