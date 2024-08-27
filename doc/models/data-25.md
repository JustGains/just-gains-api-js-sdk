
# Data 25

## Structure

`Data25`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `muscleCode` | `string \| undefined` | Optional | Unique identifier for the muscle |
| `muscleName` | `string \| undefined` | Optional | The name of the muscle in the default language (typically English) |
| `muscleTranslations` | [`MuscleTranslation[] \| undefined`](../../doc/models/muscle-translation.md) | Optional | Array of translations for the muscle name in different languages. This is a write-only field used when creating or updating muscles. |

## Example (as JSON)

```json
{
  "muscleCode": "BICEPS_BRACHII",
  "muscleName": "Biceps Brachii",
  "muscleTranslations": [
    {
      "muscleCode": "muscleCode2",
      "localeCode": "localeCode4",
      "muscleName": "muscleName4"
    }
  ]
}
```

