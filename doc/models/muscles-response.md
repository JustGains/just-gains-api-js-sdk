
# Muscles Response

## Structure

`MusclesResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`Muscle[] \| undefined`](../../doc/models/muscle.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Muscles retrieved successfully",
  "data": [
    {
      "muscleCode": "muscleCode0",
      "muscleName": "muscleName2",
      "muscleTranslations": [
        {
          "muscleCode": "muscleCode2",
          "localeCode": "localeCode4",
          "muscleName": "muscleName4"
        },
        {
          "muscleCode": "muscleCode2",
          "localeCode": "localeCode4",
          "muscleName": "muscleName4"
        }
      ]
    }
  ]
}
```

