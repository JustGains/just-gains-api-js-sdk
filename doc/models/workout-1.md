
# Workout 1

The data returned by the operation.

## Structure

`Workout1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutId` | `number \| undefined` | Optional | Unique identifier for the workout. |
| `workoutTitle` | `string \| undefined` | Optional | The title of the workout. |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout was last updated. |
| `lastUsedAt` | `string \| undefined` | Optional | The date and time when the workout was last used. |
| `totalUses` | `number \| undefined` | Optional | The number of times this workout has been used.<br>**Default**: `0` |
| `averageRating` | `number \| undefined` | Optional | The average rating of the workout. |
| `creatorCredits` | [`CreatorCredit[] \| undefined`](../../doc/models/creator-credit.md) | Optional | List of creator credits associated with this workout. |

## Example (as JSON)

```json
{
  "workoutId": 1234,
  "workoutTitle": "Full Body Strength Training",
  "updatedAt": "07/08/2023 14:30:00",
  "lastUsedAt": "07/07/2023 09:15:00",
  "totalUses": 15,
  "averageRating": 4.7
}
```

