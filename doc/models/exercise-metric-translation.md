
# Exercise Metric Translation

## Structure

`ExerciseMetricTranslation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `localeCode` | `string \| undefined` | Optional | The locale code for this translation |
| `metricName` | `string \| undefined` | Optional | Translated name of the metric |
| `measurementData` | `string \| undefined` | Optional | a custom JSON object that can be used to store any additional data related to the metric |

## Example (as JSON)

```json
{
  "localeCode": "en-US",
  "measurementData": "{\r\n  \"unit\": \"lbs\",\r\n  \"precision\": 2\r\n}",
  "metricName": "metricName8"
}
```

