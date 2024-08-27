
# Muscles Translations Response

## Structure

`MusclesTranslationsResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | `string` | Required | - |
| `message` | `string` | Required | - |
| `data` | [`MuscleTranslation[] \| undefined`](../../doc/models/muscle-translation.md) | Optional | - |

## Example (as JSON)

```json
{
  "status": "OK",
  "message": "Muscle translations retrieved successfully",
  "data": [
    {
      "muscleCode": "muscleCode0",
      "localeCode": "localeCode2",
      "muscleName": "muscleName2"
    }
  ]
}
```

