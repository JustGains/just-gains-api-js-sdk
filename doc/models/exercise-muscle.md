
# Exercise Muscle

## Structure

`ExerciseMuscle`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string \| undefined` | Optional | muscleCode that belongs to this exercise<br>**Constraints**: *Pattern*: `^[A-Z_]+$` |
| `targetPercentage` | `number \| undefined` | Optional | The percentage of effort targeted at this muscle in the exercise.<br>**Constraints**: `>= 0`, `<= 100` |
| `isPrimary` | `boolean \| undefined` | Optional | Indicates whether this muscle is the primary muscle used in the exercise. |

## Example (as JSON)

```json
{
  "muscleCode": "TRICEPS_BRACHII",
  "targetPercentage": 50,
  "isPrimary": true
}
```

