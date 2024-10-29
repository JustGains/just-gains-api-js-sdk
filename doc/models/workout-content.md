
# Workout Content

## Structure

`WorkoutContent`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `workoutID` | `string \| undefined` | Optional | The ID of the workout |
| `workoutContent` | `unknown \| undefined` | Optional | The content of the workout (JSON formatted output from the JS Editor) |
| `updatedAt` | `string \| undefined` | Optional | The date and time when the workout content was last updated. |

## Example (as JSON)

```json
{
  "workoutID": "9f897bfa-716d-4caa-b8fb-20bf3f2f3416",
  "updatedAt": "07/08/2023 14:30:00",
  "workoutContent": {
    "key1": "val1",
    "key2": "val2"
  }
}
```

