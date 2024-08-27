
# Exercises Instructions User Id Response

## Structure

`ExercisesInstructionsUserIdResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Data82 \| undefined`](../../doc/models/data-82.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Exercise instruction retrieved successfully",
  "data": {
    "exerciseCode": "exerciseCode2",
    "userId": "userId0",
    "localeCode": "localeCode2",
    "instructionJSON": {
      "time": 156,
      "blocks": [
        {
          "id": "id6",
          "type": "paragraph",
          "data": {
            "text": "text0"
          }
        },
        {
          "id": "id6",
          "type": "paragraph",
          "data": {
            "text": "text0"
          }
        }
      ],
      "version": "version8"
    }
  }
}
```

