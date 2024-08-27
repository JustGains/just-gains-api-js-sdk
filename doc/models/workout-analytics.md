
# Workout Analytics

Analytics data for the workout.

## Structure

`WorkoutAnalytics`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `views` | `number \| undefined` | Optional | Number of views for the workout. |
| `totalUses` | `number \| undefined` | Optional | The number of times this workout has been used.<br>**Default**: `0` |
| `averageRating` | `number \| undefined` | Optional | The average rating of the workout. |

## Example (as JSON)

```json
{
  "views": 1000,
  "totalUses": 15,
  "averageRating": 4.7
}
```

