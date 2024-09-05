
# Muscle List Response

## Structure

`MuscleListResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | The status of the response, corresponding to standard HTTP status codes. |
| `message` | `string` | Required | A human-readable message describing the result of the operation. |
| `data` | [`Muscle[]`](../../doc/models/muscle.md) | Required | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Operation completed successfully.",
  "data": [
    {
      "muscleCode": "BICEPS_BRACHII",
      "muscleName": "Biceps Brachii"
    }
  ]
}
```

