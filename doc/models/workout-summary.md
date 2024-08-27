
# Workout Summary

Summary information about the workout.

## Structure

`WorkoutSummary`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `totalReps` | `number \| undefined` | Optional | Total number of repetitions across all exercises in the workout. |
| `totalSets` | `number \| undefined` | Optional | Total number of sets across all exercises in the workout. |
| `totalVolume` | `number \| undefined` | Optional | Total volume (weight * reps) across all exercises in the workout. |
| `totalDistance` | `number \| undefined` | Optional | Total distance covered in the workout, if applicable. |
| `estimatedDuration` | `number \| undefined` | Optional | Estimated duration of the workout in minutes. |
| `exerciseCount` | `number \| undefined` | Optional | Number of exercises in the workout. |

## Example (as JSON)

```json
{
  "totalReps": 100,
  "totalSets": 20,
  "totalVolume": 5000.5,
  "totalDistance": 5.5,
  "estimatedDuration": 60,
  "exerciseCount": 8
}
```

