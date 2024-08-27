
# Exercise Metric Translation

## Structure

`ExerciseMetricTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string` | Required | The locale code of the translation |
| `exerciseMetricName` | `string` | Required | Translated Metric Name for the chosen Locale |
| `measurementData` | `unknown` | Required | JSONB format containing measurement details |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "exerciseMetricName": "exerciseMetricName4",
  "measurementData": {
    "unit": "kg",
    "unitType": "weight",
    "unitPrecision": 2
  }
}
```

