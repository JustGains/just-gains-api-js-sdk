
# Exercises Instructions Response

## Structure

`ExercisesInstructionsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`ExerciseInstructionList[] \| undefined`](../../doc/models/exercise-instruction-list.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Exercise instructions models retrieved successfully",
  "data": [
    {
      "userId": "userId0",
      "localeCode": "localeCode2",
      "dateUpdated": "2016-03-13T12:52:32.123Z",
      "dateCreated": "2016-03-13T12:52:32.123Z"
    },
    {
      "userId": "userId0",
      "localeCode": "localeCode2",
      "dateUpdated": "2016-03-13T12:52:32.123Z",
      "dateCreated": "2016-03-13T12:52:32.123Z"
    }
  ]
}
```

