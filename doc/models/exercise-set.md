
# Exercise Set

## Structure

`ExerciseSet`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `setNumber` | `number` | Required | The number of the set within the exercise. |
| `metricValues` | `Record<string, number>` | Required | A map of metric codes to their corresponding values for this set. |

## Example (as JSON)

```json
{
  "setNumber": 1,
  "metricValues": {
    "WEIGHT": 100.5,
    "REPS": 10.0
  }
}
```

